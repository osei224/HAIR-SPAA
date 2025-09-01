import React from 'react';

interface CTASectionProps {
  onReservationClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onReservationClick }) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[#0f3d3e] to-[#b08968] mx-4 rounded-3xl shadow-[0_10px_30px_rgba(15,61,62,0.08)]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-white mb-8 leading-tight">
          あなたの"似合う"を、
          <br />
          今日アップデート。
        </h2>
        
        <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
          カウンセリングから仕上げまで、丁寧に。まずはLINEでかんたん予約。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onReservationClick}
            className="inline-flex items-center justify-center rounded-3xl px-6 py-3 font-medium transition hover:translate-y-[1px] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/40 bg-white text-[#0f3d3e] text-lg w-full sm:w-auto"
          >
            LINEで予約
          </button>
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-3xl px-6 py-3 font-medium transition hover:translate-y-[1px] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/40 border-2 border-white text-white hover:bg-white hover:text-[#0f3d3e] text-lg w-full sm:w-auto"
          >
            メニューを見る
          </a>
        </div>
        
        <div className="mt-12 text-white/80">
          <p className="text-sm">
            ※初回限定キャンペーンは予告なく終了する場合があります
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
