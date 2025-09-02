// src/components/Access.tsx
import React from "react";

type Salon = {
  name: string;
  address: string;
  tel: string;
  hours: string;
  mapUrl?: string; // Google Maps 埋め込みURL（なくても動く）
};

const DEFAULT_SALON: Salon = {
  name: "HAIR & SPA Lumière",
  address: "大阪市〇〇区〇〇 1-2-3 ルミエールビル2F",
  tel: "06-1234-5678",
  hours: "10:00-20:00（最終受付19:00）",
  // 必要なら実URLを入れてください（空でもOK）
  mapUrl: "",
};

export default function Access(props: { salon?: Partial<Salon> }) {
  const s: Salon = { ...DEFAULT_SALON, ...props.salon };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">アクセス</h2>
      <p className="mb-1">店名：{s.name}</p>
      <p className="mb-1">住所：{s.address || "住所未設定です。"}</p>
      <p className="mb-1">TEL：{s.tel}</p>
      <p className="mb-6">営業時間：{s.hours}</p>

      {s.mapUrl ? (
        <iframe
          src={s.mapUrl}
          className="w-full h-[420px] rounded-xl border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <p className="text-gray-500">地図URLが未設定です。</p>
      )}
    </section>
  );
}
