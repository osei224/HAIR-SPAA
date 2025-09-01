import React from 'react';

const Menu: React.FC = () => {
  const menuItems = [
    {
      name: '髪質改善トリートメント',
      description: '髪の内部から補修し、艶やかで健康な髪へ導く特別なトリートメント',
      features: ['ダメージ補修', '艶・ツヤ向上', '持続効果3ヶ月']
    },
    {
      name: 'ヘッドスパ',
      description: '頭皮の血行を促進し、リラクゼーション効果も高い癒しのメニュー',
      features: ['頭皮ケア', 'リラクゼーション', '血行促進']
    },
    {
      name: 'カット & スタイリング',
      description: 'お客様の骨格と髪質に合わせたオーダーメイドカット',
      features: ['骨格診断', 'スタイル提案', 'ホームケア指導']
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 mb-4">
            施術メニュー
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            あなたの美しさを引き出す特別なメニュー
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="rounded-2xl shadow-sm border border-gray-100 p-6 bg-white hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.name}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {item.description}
              </p>
              
              <div className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-[#b08968] rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
