import React from 'react';

interface HeaderProps {
  onReservationClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReservationClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-white/60 shadow-[0_2px_20px_rgba(15,61,62,0.04)]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-[#0f3d3e] tracking-wide">
              ✨ HAIR & SPA <span className="text-[#b08968]">Lumière</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-[#0f3d3e] transition-colors font-medium"
            >
              ホーム
            </a>
            <a 
              href="#menu" 
              className="text-gray-700 hover:text-[#0f3d3e] transition-colors font-medium"
            >
              メニュー
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-[#0f3d3e] transition-colors font-medium"
            >
              料金
            </a>
            <a 
              href="#access" 
              className="text-gray-700 hover:text-[#0f3d3e] transition-colors font-medium"
            >
              アクセス
            </a>
            <button
              onClick={onReservationClick}
              className="inline-flex items-center justify-center rounded-3xl px-6 py-3 font-medium transition hover:translate-y-[1px] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#b08968]/40 bg-[#0f3d3e] text-white"
            >
              予約
            </button>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={onReservationClick}
              className="inline-flex items-center justify-center rounded-3xl px-4 py-2 font-medium transition hover:translate-y-[1px] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#b08968]/40 bg-[#0f3d3e] text-white text-sm"
            >
              予約
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
