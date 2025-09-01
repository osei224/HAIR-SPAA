import React from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLineBooking = () => {
    window.open('https://line.me/R/ti/p/@lumiere-salon', '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:03-1234-5678';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        <div className="text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ご予約はこちら
            </h3>
            <p className="text-gray-600">
              お気軽にお問い合わせください
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleLineBooking}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              💬 LINE公式で予約
            </button>

            <button
              onClick={handlePhoneCall}
              className="w-full border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              📞 電話で予約
            </button>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-800 font-medium">
              🎉 初回限定50%OFF実施中！
            </p>
            <p className="text-xs text-yellow-700 mt-1">
              ※キャンペーンは予告なく終了する場合があります
            </p>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <p>営業時間: 10:00 - 20:00</p>
            <p>定休日: 月曜日</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
