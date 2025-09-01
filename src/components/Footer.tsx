import React from 'react';

interface FooterProps {
  salonData: {
    name: string;
    phone: string;
    address: string;
    hours: string;
    closed: string;
    instagram: string;
    lineUrl: string;
  };
}

const Footer: React.FC<FooterProps> = ({ salonData }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              HAIR & SPA <span className="text-[#b08968]">Lumière</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              20〜30代女性のための上質なヘアケア体験を提供する美容サロンです。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">店舗情報</h4>
            <div className="space-y-3 text-gray-300">
              <p>📍 {salonData.address}</p>
              <p>🚃 JR原宿駅 徒歩3分</p>
              <p>📞 {salonData.phone}</p>
              <p>🕐 {salonData.hours}（定休日：{salonData.closed}）</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">SNS</h4>
            <div className="flex space-x-4">
              <a 
                href={salonData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors"
              >
                📷
              </a>
              <a 
                href={salonData.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-colors"
              >
                💬
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HAIR & SPA Lumière. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
