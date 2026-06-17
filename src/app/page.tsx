import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Structure from "@/components/Structure";
import Gallery from "@/components/Gallery";
import ReservationForm from "@/components/ReservationForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Structure />
      <Gallery />
      <ReservationForm />
      <Contact />
      <Footer />
    </main>
  );
}
