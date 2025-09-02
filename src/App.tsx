// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Access from "./components/Access";
import Footer from "./components/Footer";

const salon = {
  name: "HAIR & SPA Lumière",
  address: "大阪市〇〇区〇〇 1-2-3 ルミエールビル2F",
  tel: "06-1234-5678",
  hours: "10:00-20:00（最終受付19:00）",
  // mapUrl: "https://www.google.com/maps/embed?pb=...", // あれば入れる
};

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <Pricing />
      <Testimonials />
      <Access salon={salon} />
      <Footer />
    </main>
  );
}
