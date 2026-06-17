import { NextResponse } from "next/server";
import { db } from "@/db";
import { reservations } from "@/db/schema";
import { sql } from "drizzle-orm";

export async function GET() {
  try {
    const result = await db
      .select({ eventDate: reservations.eventDate, status: reservations.status })
      .from(reservations)
      .where(sql`${reservations.eventDate} >= CURRENT_DATE`);

    const bookedDates = result
      .filter((r) => r.status === "confirmada" || r.status === "pendente")
      .map((r) => r.eventDate);

    return NextResponse.json(bookedDates);
  } catch (error) {
    console.error("Error fetching booked dates:", error);
    return NextResponse.json(
      { error: "Erro ao buscar datas" },
      { status: 500 }
    );
  }
}
