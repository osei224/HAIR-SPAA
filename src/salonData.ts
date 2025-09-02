// src/salonData.ts
export type Salon = {
  name: string;
  address: string;
  tel: string;
  hours: string;
  mapUrl?: string;   // iframe の src にそのまま使う URL
  mapLink?: string;  // クリック時に開く地図（任意）
};

export const salon: Salon = {
  name: "HAIR & SPA Lumière",
  address: "大阪市〇〇区〇〇 1-2-3 ルミエールビル2F",
  tel: "06-1234-5678",
  hours: "10:00-20:00（最終受付19:00）",
  // 👇ダミー：大阪駅あたりの OSM 埋め込み
  mapUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=135.485%2C34.690%2C135.505%2C34.705&layer=mapnik&marker=34.697%2C135.495",
  mapLink: "https://www.openstreetmap.org/?mlat=34.697&mlon=135.495#map=16/34.697/135.495",
};
