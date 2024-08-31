import React from 'react';
import { FaStore, FaHeadset, FaSearchLocation, FaTools, FaCogs, FaEye, FaFlask } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { GiWaterDrop } from 'react-icons/gi';
import { Element } from 'react-scroll';

const ServicesSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* First Row */}
          <div className="space-y-2">
            <div className="flex justify-center items-center bg-white shadow-md hover:bg-teal-400 hover:w-24 rounded-full w-16 h-16 mx-auto">
              <FaStore className="text-2xl text-gray-700 " />
            </div>
            <h3 className="text-lg font-semibold">SARF MALZEME SATIŞI</h3>
            <p className="text-gray-500">Endüstriyel sarf malzemeleri tedariki</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center items-center bg-white shadow-md hover:bg-teal-400 hover:w-24 rounded-full w-16 h-16 mx-auto">
              <FaHeadset className="text-2xl text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold">UZAKTAN DESTEK</h3>
            <p className="text-gray-500">Online teknik yardım</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center items-center bg-white shadow-md hover:bg-teal-400 hover:w-24 rounded-full w-16 h-16 mx-auto">
              <FaSearchLocation className="text-2xl text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold">YERİNDE İNCELEME</h3>
            <p className="text-gray-500">Sorunları yerinde çözümleme</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center items-center bg-white shadow-md hover:bg-teal-400 hover:w-24 rounded-full w-16 h-16 mx-auto">
              <FaTools className="text-2xl text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold">PROFESYONEL EKİPMANLAR</h3>
            <p className="text-gray-500">İleri düzey teknik ekipman ile inceleme</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-32 text-left">
          <div className="flex items-start space-x-4">
            <FaCogs className="text-6xl text-teal-500" />
            <div>
              <h4 className="text-lg font-semibold">TEKNİK BAKIM</h4>
              <p className="text-gray-500">Makina teknik bakımlarınızı uzun yıllar deneyime sahip profesyonel kadromuzla gerçekleştiriyoruz.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FiMonitor className="text-6xl text-teal-500" />
            <div>
              <h4 className="text-lg font-semibold">OPTİK KONTROL VE DEĞİŞİMİ</h4>
              <p className="text-gray-500">Lazer endüstrisinde kullanılan optik, lens, lazer koruma camı parçalarının değişimi ve satışını yapıyoruz.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaEye className="text-6xl text-teal-500" />
            <div>
              <h4 className="text-lg font-semibold">DESTEK</h4>
              <p className="text-gray-500">Bakım sonrası profesyonel ekibimiz ile kesintisiz olarak destek veriyoruz.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <GiWaterDrop className="text-6xl text-teal-500" />
            <div>
              <h4 className="text-lg font-semibold">NOZZLE DEĞİŞİMİ</h4>
              <p className="text-gray-500">Lazer endüstrisinde kullanılan Nozzle parçalarının değişimi ve satışını yapıyoruz.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServicesSection;
