import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Image/Video Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="/public/cnc-1.jpg" // Replace with your image or video source
              alt="Lazer Optik"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h2 className="text-2xl font-semibold mb-4">Lorem, ipsum.</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut exercitationem veniam perferendis veritatis quidem expedita reprehenderit praesentium commodi, ab atque!
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm text-black">
            <li>Gelişmiş Ekipmanlar</li>
            <li>10+ yıllık tecrübe</li>
            <li>Profesyonel Yaklaşım</li>
            <li>100% Müşteri Memnuniyeti</li>
            <li>Hızlı ve Etkili Çözüm</li>
            <li>Yerinde Sorun Tespiti</li>
            <li>Uygun Fiyatlar</li>
            <li>Online Destek</li>
            <li>Online Destek</li>
            <li>Yerinde Sorun Tespiti</li>
            <li>Uygun Fiyatlar</li>
            <li>Online Destek</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
