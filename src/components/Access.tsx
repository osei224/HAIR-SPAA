// src/components/Access.tsx
import React from "react";

type Salon = {
  name?: string;
  address?: string;
  mapUrl?: string;
  phone?: string;
  hours?: string;
};

export default function Access({ salon }: { salon: Salon }) {
  // 値が無くても落ちないようにガード
  const { name, address, mapUrl, phone, hours } = salon || {};

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">アクセス</h2>

      {name && <p className="mb-2">店名：{name}</p>}
      {address && <p className="mb-2">住所：{address}</p>}
      {phone && <p className="mb-2">TEL：{phone}</p>}
      {hours && <p className="mb-6">営業時間：{hours}</p>}

      {/* mapUrl があれば地図を出す。無ければ何も出さない */}
      {mapUrl ? (
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Google Map"
          />
        </div>
      ) : (
        <p className="text-sm text-gray-500">地図は準備中です。</p>
      )}
    </section>
  );
}
