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

import { salon } from "./salonData"; // ← サロン情報をインポート

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <Pricing />
      <Testimonials />
      <Access salon={salon} />   {/* ← salonデータを渡す */}
      <Footer />
    </main>
  );
}
