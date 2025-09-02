// src/salonData.ts
export type Salon = {
  name: string
  address: string
  tel: string
  hours: string
  mapUrl: string
}

export const salon: Salon = {
  name: "HAIR & SPA Lumière",
  address: "大阪市〇〇区〇〇 1-2-3 ルミエールビル2F",
  tel: "06-1234-5678",
  hours: "10:00-20:00（最終受付19:00）",
  // ※ Google マップ埋め込みURL（<iframe src="..."> に使うやつ）
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...（実URL）",
}
