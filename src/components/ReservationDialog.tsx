import React from 'react';

interface ReservationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  salonData: {
    name: string;
    phone: string;
    lineUrl: string;
    mapUrl: string;
    hours: string;
    closed: string;
  };
}

const ReservationDialog: React.FC<ReservationDialogProps> = ({ 
  isOpen, 
  onClose, 
  salonData 
}) => {
  if (!isOpen) return null;

  const handleLineReservation = () => {
    window.open(salonData.lineUrl, '_blank', 'noopener,noreferrer');
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${salonData.phone}`;
  };

  const handleMapOpen = () => {
    window.open(salonData.mapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0f3d3e] to-[#b08968] rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-2 text-center lg:text-left">
                ご予約
              </h3>
              <p className="text-gray-600 text-center lg:text-left">
                LINE公式から24時間受付中
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <button
                onClick={handleLineReservation}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <span>💬</span>
                <span>LINEで予約</span>
              </button>

              <button
                onClick={handlePhoneCall}
                className="w-full border-2 border-[#0f3d3e] text-[#0f3d3e] hover:bg-[#0f3d3e] hover:text-white px-6 py-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <span>📞</span>
                <span>電話する</span>
              </button>

              <button
                onClick={handleMapOpen}
                className="w-full border-2 border-[#b08968] text-[#b08968] hover:bg-[#b08968] hover:text-white px-6 py-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <span>🗺️</span>
                <span>地図を見る</span>
              </button>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-sm text-amber-800 font-medium text-center">
                🎉 初回限定50%OFF実施中！
              </p>
              <p className="text-xs text-amber-700 mt-1 text-center">
                ※キャンペーンは予告なく終了する場合があります
              </p>
            </div>

            <div className="mt-6 text-xs text-gray-500 text-center">
              <p>営業時間: {salonData.hours}</p>
              <p>定休日: {salonData.closed}</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-xl p-6 h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="text-sm font-medium">QRコード</p>
                <p className="text-xs">LINE公式アカウント</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationDialog;
