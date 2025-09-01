import React from 'react';

interface HeroProps {
  onReservationClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onReservationClick }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl mx-4 mt-4">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&q=80&w=1920&auto=format&fit=crop)'
        }}
      />
      
      {/* グラデーションマスク */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#fff5f5]/60 to-[#fffaf0]/40" />
      
      {/* 装飾的な円形 */}
      <div className="absolute -top-32 -left-32 bg-[#f7e6e0]/40 blur-3xl w-64 h-64 rounded-full" />
      <div className="absolute -bottom-32 -right-32 bg-[#b08968]/20 blur-3xl w-64 h-64 rounded-full" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <h1 className="leading-relaxed text-wrap-balance mb-6">
          <div className="text-4xl md:text-5xl font-extrabold text-[#0f3d3e] tracking-wide">
            髪に、ときめきを。
          </div>
          <br />
          <div className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#b08968] via-[#f59e0b] to-[#ec4899] bg-clip-text text-transparent">
            あなたらしさをもっと輝かせる場所
          </div>
        </h1>
        
        <h2 className="text-lg md:text-xl text-gray-700 mt-6 leading-relaxed">
          自然光に包まれた空間で、丁寧なカットと癒しのひとときを。
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <button 
            onClick={onReservationClick}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-lg font-medium shadow-md hover:shadow-lg hover:translate-y-[1px] transition bg-[#b08968] text-white hover:opacity-95 w-full sm:w-auto"
          >
            ✨ 初回限定50%OFF
          </button>
          <button 
            onClick={onReservationClick}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-lg font-medium shadow-md hover:shadow-lg hover:translate-y-[1px] transition bg-[#0f3d3e] text-white hover:opacity-95 w-full sm:w-auto"
          >
            LINEで予約
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
