import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '✨',
      title: '高級トリートメント',
      description: '厳選された最高品質の成分を使用した、髪質改善トリートメントで理想の髪へ導きます'
    },
    {
      icon: '🏠',
      title: 'プライベート空間',
      description: '完全個室でリラックスできる上質な空間で、他のお客様を気にせずお過ごしいただけます'
    },
    {
      icon: '👩‍💼',
      title: '専門スタイリスト',
      description: '経験豊富な専門スタイリストが、お客様一人ひとりに最適なスタイルをご提案いたします'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 mb-4">
            選ばれる理由
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Lumièreが多くのお客様に愛される3つの特徴
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl shadow-sm border border-gray-100 bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
