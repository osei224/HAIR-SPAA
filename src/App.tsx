import Hero from "./components/Hero";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ReservationDialog from "./components/ReservationDialog";
import Access from "./components/Access";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const salonData = {
    name: "HAIR & SPA Lumière",
    address: "大阪市〇〇区〇〇 1-2-3 ルミエールビル2F",
    tel: "06-1234-5678",
    hours: "10:00-20:00（最終受付19:00）",
    mapUrl: "https://www.google.com/maps/embed?pb=...埋め込みURL...",
  };

  return (
    <div>
      <Hero />
      <Features />
      <Menu />
      <Pricing />
      <Testimonials />
      <ReservationDialog />
      <Access salon={salonData} />
      <Footer />
    </div>
  );
}
