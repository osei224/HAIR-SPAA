import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: '田中 美咲さん',
      age: '28歳',
      comment: '髪質改善トリートメントを受けてから、毎朝のスタイリングが本当に楽になりました。髪にツヤが出て、周りからも褒められるようになりました！',
      rating: 5
    },
    {
      name: '佐藤 愛子さん',
      age: '32歳',
      comment: 'プライベート空間でゆっくりできるのが最高です。スタッフの方も親切で、いつも安心してお任せできます。',
      rating: 5
    },
    {
      name: '山田 麻衣さん',
      age: '25歳',
      comment: 'ヘッドスパが本当に気持ちよくて、日頃の疲れが吹き飛びます。髪もサラサラになって一石二鳥です！',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            お客様の声
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            実際にご利用いただいたお客様からの嬉しいお声
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.age}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
