// Access.tsx の先頭付近に追加
const safeSalon = {
  name: salon?.name ?? "HAIR & SPA Lumière",
  address: salon?.address ?? "",
  tel: salon?.tel ?? "",
  hours: salon?.hours ?? "",
  mapUrl: salon?.mapUrl ?? "",
};

// 参照するところは safeSalon.xxx を使う
<p>{safeSalon.address || "住所未設定。"}</p>
{safeSalon.mapUrl ? (
  <iframe src={safeSalon.mapUrl} ... />
) : (
  <p className="text-gray-500">地図URLが未設定です。</p>
)}
