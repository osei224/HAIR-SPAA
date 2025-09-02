// src/components/Access.tsx
import React from "react";

type SalonData = {
  name: string;
  address: string;
  tel: string;
  hours: string;
  mapUrl: string;
};

export default function Access(props: { data?: Partial<SalonData> }) {
  // props.data が無くても既定値で表示できるようにする
  const data: SalonData = {
    name: props.data?.name ?? "HAIR & SPA Lumière",
    address: props.data?.address ?? "大阪市〇〇区〇〇 1-2-3 ルミエールビル2F",
    tel: props.data?.tel ?? "06-1234-5678",
    hours: props.data?.hours ?? "10:00-20:00（最終受付19:00）",
    mapUrl:
      props.data?.mapUrl ??
      "https://www.google.com/maps?output=embed&q=Osaka",
  };

  return (
    <section className="wrap my-12">
      <h2 className="text-2xl font-bold mb-4">アクセス</h2>
      <p>店名：{data.name}</p>
      <p>住所：{data.address}</p>
      <p>TEL：{data.tel}</p>
      <p>営業時間：{data.hours}</p>

      <div className="mt-4 rounded-2xl overflow-hidden border border-gray-200">
        <iframe
          title="map"
          src={data.mapUrl}
          width="100%"
          height="450"
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
