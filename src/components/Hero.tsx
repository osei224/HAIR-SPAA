// src/components/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* 背景（画像 or グラデ） */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% -10%, rgba(99,102,241,.25), transparent 60%), radial-gradient(1000px 500px at 90% 10%, rgba(236,72,153,.2), transparent 55%), linear-gradient(180deg, #ffffff, #f8fafc 40%, #ffffff)",
        }}
      />
      {/* 画像を使うなら ↓ を有効化（/public/hero.jpg を置く） */}
      {/* <img src="/hero.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70" /> */}

      <div className="container mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full bg-white/70 px-3 py-1 text-sm text-gray-600 shadow-sm ring-1 ring-gray-200">
            HAIR &amp; SPA Lumière
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            髪と心がほどける、<span className="text-indigo-600">ご褒美スパ</span>体験
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            完全予約制のプライベート空間で、極上のヘッドスパと似合わせカット。
            忙しい毎日に、静かなリセットを。
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://lin.ee/XXXXXXXX" // ← 公式LINEのURLに差し替え
              className="rounded-2xl bg-indigo-600 px-6 py-3 text-white shadow-lg shadow-indigo-200 transition hover:translate-y-[-2px] hover:bg-indigo-500"
            >
              LINEで予約
            </a>
            <a
              href="#menu"
              className="rounded-2xl bg-white px-6 py-3 text-gray-700 ring-1 ring-gray-200 transition hover:bg-gray-50"
            >
              メニューを見る
            </a>
          </div>

          {/* 小さな実績/バッジ */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>完全予約制</span>
            <span>｜</span>
            <span>駅徒歩5分</span>
            <span>｜</span>
            <span>夜20時まで</span>
          </div>
        </div>
      </div>

      {/* デコレーションのぼかし円 */}
      <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full bg-pink-300/30 blur-3xl" />
    </section>
  );
}
