import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Pricing from './components/Pricing';
import Access from './components/Access';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ReservationDialog from './components/ReservationDialog';
import AdminPanel from './components/AdminPanel';

// データ定数
export const SALON_DATA = {
  name: 'HAIR & SPA Lumière',
  phone: '03-1234-5678',
  address: '東京都渋谷区神宮前1-2-3 ルミエールビル2F',
  hours: '10:00 - 20:00',
  closed: '月曜日',
  lineUrl: 'https://line.me/R/ti/p/@lumiere-salon',
  mapUrl: 'https://maps.google.com/?q=東京都渋谷区神宮前1-2-3',
  instagram: 'https://instagram.com/lumiere_salon'
};

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const openReservation = () => {
    setIsReservationOpen(true);
  };

  const closeReservation = () => {
    setIsReservationOpen(false);
  };

  const openAdmin = () => {
    setIsAdminOpen(true);
  };

  const closeAdmin = () => {
    setIsAdminOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7f2] via-[#f7e6e0] to-[#efe7df]">
      <Header onReservationClick={openReservation} />
      
      <main>
        <section id="home">
          <Hero onReservationClick={openReservation} />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="menu">
          <Menu />
        </section>
        
        <section id="pricing">
          <Pricing onReservationClick={openReservation} />
        </section>
        
        <section id="access">
          <Access salonData={SALON_DATA} />
        </section>
        
        <CTASection onReservationClick={openReservation} />
      </main>
      
      <Footer salonData={SALON_DATA} />
      
      <ReservationDialog 
        isOpen={isReservationOpen}
        onClose={closeReservation}
        salonData={SALON_DATA}
      />
      
      <AdminPanel 
        isOpen={isAdminOpen}
        onClose={closeAdmin}
      />
      
      {/* 管理者用ボタン（開発時のみ表示） */}
      <button
        onClick={openAdmin}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition z-40"
        title="管理パネル"
      >
        ⚙️
      </button>
    </div>
  );
}

export default App;
