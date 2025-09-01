import React from 'react';

interface PricingProps {
  onOpen: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpen }) => {
  const pricingPlans = [
    {
      name: 'ライトプラン',
      description: 'カット + シャンプー + ブロー',
      price: '¥8,000',
      originalPrice: '¥16,000',
      duration: '約90分',
      features: [
        'カウンセリング',
        'カット',
        'シャンプー',
        'ブロー',
        'スタイリング'
      ],
      popular: false
    },
    {
      name: 'スタンダードプラン',
      description: '髪質改善トリートメント + カット',
      price: '¥15,000',
      originalPrice: '¥30,000',
      duration: '約120分',
      features: [
        'カウンセリング',
        'カット',
        '髪質改善トリートメント',
        'ヘッドマッサージ',
        'スタイリング',
        'ホームケア指導'
      ],
      popular: true
    },
    {
      name: 'プレミアムプラン',
      description: 'フルコース + ヘッドスパ',
      price: '¥25,000',
      originalPrice: '¥50,000',
      duration: '約180分',
      features: [
        'カウンセリング',
        'カット',
        '髪質改善トリートメント',
        'ヘッドスパ（60分）',
        'フェイシャルマッサージ',
        'スタイリング',
        'ホームケア指導',
        'アフターフォロー'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            初回限定50%OFFでお試しいただけます
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-[0_10px_30px_rgba(15,61,62,0.06)] p-6 hover:shadow-lg transition-all duration-300 flex flex-col ${
                plan.popular ? 'ring-2 ring-[#b08968]/30' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#b08968] text-white px-4 py-2 rounded-full text-sm font-medium">
                    人気No.1
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {plan.description}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  {plan.duration}
                </p>
                
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-[#0f3d3e]">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {plan.originalPrice}
                  </span>
                </div>
                <p className="text-sm text-red-600 font-medium">
                  初回限定50%OFF
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <span className="text-[#b08968] mr-3">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button
                onClick={onOpen}
                className="inline-flex items-center justify-center w-full rounded-full px-6 py-3 mt-6 font-medium text-base md:text-lg text-white bg-[#0f3d3e] hover:opacity-90 hover:translate-y-[1px] transition shadow-md"
              >
                このプランで予約
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
