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
// 予約モーダル等があれば↓も（ファイルがある場合だけ）
// import ReservationDialog from "./components/ReservationDialog";

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <Pricing />
      <Testimonials />
      <Access />
      {/* <ReservationDialog /> */}
      <Footer />
    </main>
  );
}
