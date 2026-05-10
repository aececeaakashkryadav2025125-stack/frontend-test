import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingPlants from "@/components/TrendingPlants";
import TopSelling from "@/components/TopSelling";
import Reviews from "@/components/Reviews";
import O2Section from "@/components/O2Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">

      <Navbar />

      <Hero />

      <TrendingPlants />

      <TopSelling />

      <Reviews />

      <O2Section />

      <Footer />

    </main>
  );
}