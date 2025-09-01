import React from 'react';

interface AccessProps {
  salonData: {
    name: string;
    phone: string;
    address: string;
    hours: string;
    closed: string;
    mapUrl: string;
  };
}

const Access: React.FC<AccessProps> = ({ salonData }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 mb-4">
            アクセス
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            原宿駅から徒歩3分の好立地
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="rounded-2xl shadow-sm border border-gray-100 p-6 bg-white">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">店舗情報</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[#b08968] mr-3 mt-1">📍</span>
                  <div>
                    <p className="font-medium text-gray-900">住所</p>
                    <p className="text-gray-700">{salonData.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-[#b08968] mr-3 mt-1">🚃</span>
                  <div>
                    <p className="font-medium text-gray-900">アクセス</p>
                    <p className="text-gray-700">JR原宿駅 徒歩3分</p>
                    <p className="text-gray-700">東京メトロ明治神宮前駅 徒歩5分</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-[#b08968] mr-3 mt-1">📞</span>
                  <div>
                    <p className="font-medium text-gray-900">電話番号</p>
                    <a 
                      href={`tel:${salonData.phone}`}
                      className="text-[#0f3d3e] hover:underline"
                    >
                      {salonData.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-[#b08968] mr-3 mt-1">🕐</span>
                  <div>
                    <p className="font-medium text-gray-900">営業時間</p>
                    <p className="text-gray-700">{salonData.hours}</p>
                    <p className="text-gray-700">定休日：{salonData.closed}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href={salonData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition hover:opacity-90 bg-[#0f3d3e] text-white"
                >
                  🗺️ 地図を見る
                </a>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl shadow-sm border border-gray-100 bg-white overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-lg font-medium">地図プレースホルダー</p>
                <p className="text-sm">Google Maps埋め込み予定</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
