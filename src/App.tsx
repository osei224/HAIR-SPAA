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

const salonData = {
  name: "HAIR & SPA Lumière",
  address: "大阪市〇〇区〇〇 1-2-3 ルミエールビル2F",
  tel: "06-1234-5678",
  hours: "10:00-20:00（最終受付19:00）",
  mapUrl:
    "https://www.google.com/maps?output=embed&q=Osaka", // あなたの埋め込みURLに差替えてOK
};

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Menu />
      <Pricing />
      <Testimonials />
      {/* ここで props を渡す（Access が props を受け取る想定の場合）*/}
      <Access data={salonData} />
      <Footer />
    </>
  );
}
