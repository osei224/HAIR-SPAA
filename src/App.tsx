// src/App.tsx
import React from "react";
import "./index.css";
import Access from "./components/Access";
// 他のコンポーネント（Hero, Menu, Footer など）も必要なら import してね

const salonData = {
  name: "HAIR & SPA Lumière",
  address: "大阪市〇〇区〇〇 1-2-3 ルミエールビル2F",
  mapUrl: "https://www.google.com/maps/embed?pb=...（Googleマップ埋め込みURL）",
  phone: "06-1234-5678",
  hours: "10:00-20:00（最終受付19:00）",
};

export default function App() {
  return (
    <>
      {/* 他のセクション */}
      <Access salon={salonData} />
      {/* Footer など */}
    </>
  );
}
