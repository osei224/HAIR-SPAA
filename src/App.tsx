// src/App.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Pricing from "./components/Pricing";
import Access from "./components/Access";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ReservationDialog from "./components/ReservationDialog";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-24 py-16">
        <Hero />
        <Features />
        <Menu />
        <Pricing />
        <Access />
        <Testimonials />
        <ReservationDialog />
      </main>
      <Footer />
    </div>
  );
}
