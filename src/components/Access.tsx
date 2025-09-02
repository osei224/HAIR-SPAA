// src/components/Access.tsx
import React from "react";

type SalonData = {
  name?: string;
  address?: string;
  tel?: string;
  hours?: string;
  mapUrl?: string;
};

// ここで必ずデフォルト値を用意（env が空でも絶対に undefined にはしない）
const salonData: SalonData = {
  name: "HAIR & SPA Lumière",
  address: import.meta.env.VITE_SALON_ADDRESS || "大阪市〇〇区〇〇 1-2-3 ルミエールビル2F",
  tel: import.meta.env.VITE_SALON_TEL || "06-1234-5678",
  hours: import.meta.env.VITE_SALON_HOURS || "10:00-20:00（最終受付19:00）",
  mapUrl: import.meta.env.VITE_GOOGLE_MAPS_EMBED || "", // 空なら iframe を出さない
};

export default function Access() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">アクセス</h2>

      <p className="mb-1">店名：{salonData.name ?? "未設定"}</p>
      <p className="mb-1">住所：{salonData.address ?? "未設定"}</p>
      <p className="mb-1">TEL：{salonData.tel ?? "未設定"}</p>
      <p className="mb-6">営業時間：{salonData.hours ?? "未設定"}</p>

      {salonData.mapUrl ? (
        <div className="rounded-xl overflow-hidden border">
          <iframe
            src={salonData.mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      ) : (
        <p className="text-gray-500">地図URLが未設定です。</p>
      )}
    </section>
  );
}
