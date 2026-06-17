import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { reservations } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const dateParam = searchParams.get("date");

  try {
    if (dateParam) {
      const result = await db
        .select()
        .from(reservations)
        .where(eq(reservations.eventDate, dateParam))
        .orderBy(desc(reservations.createdAt));
      return NextResponse.json(result);
    }

    const result = await db
      .select()
      .from(reservations)
      .orderBy(desc(reservations.createdAt));
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching reservations:", error);
    return NextResponse.json(
      { error: "Erro ao buscar reservas" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, eventType, guestCount, message } =
      body;

    if (!name || !email || !phone || !eventDate || !eventType || !guestCount) {
      return NextResponse.json(
        { error: "Todos os campos obrigatórios devem ser preenchidos" },
        { status: 400 }
      );
    }

    // Check if date is already booked
    const existing = await db
      .select()
      .from(reservations)
      .where(eq(reservations.eventDate, eventDate));

    const confirmed = existing.filter((r) => r.status === "confirmada");
    if (confirmed.length > 0) {
      return NextResponse.json(
        { error: "Esta data já está reservada. Por favor, escolha outra data." },
        { status: 409 }
      );
    }

    const result = await db
      .insert(reservations)
      .values({
        name,
        email,
        phone,
        eventDate,
        eventType,
        guestCount: Number(guestCount),
        message: message || null,
        status: "pendente",
      })
      .returning();

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error("Error creating reservation:", error);
    return NextResponse.json(
      { error: "Erro ao criar reserva" },
      { status: 500 }
    );
  }
}
