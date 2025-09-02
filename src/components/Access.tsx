// src/components/Access.tsx
import React from "react"
import type { Salon } from "../salonData"

type Props = { salon?: Partial<Salon> }

export default function Access({ salon = {} }: Props) {
  const name = salon.name ?? "HAIR & SPA Lumière"
  const address = salon.address ?? "住所未設定"
  const tel = salon.tel ?? "TEL未設定"
  const hours = salon.hours ?? "営業時間未設定"
  const mapUrl = salon.mapUrl // ここは undefined 許容

  return (
    <section id="access" className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">アクセス</h2>
      <p>店名：{name}</p>
      <p>住所：{address}</p>
      <p>TEL：{tel}</p>
      <p>営業時間：{hours}</p>

      <div className="mt-6 rounded-2xl overflow-hidden border">
        {mapUrl ? (
          <iframe
            src={mapUrl}
            width="100%"
            height="480"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <p className="text-gray-500 p-6">地図URLが未設定です。</p>
        )}
      </div>
    </section>
  )
}
