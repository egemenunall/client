import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: "FOR ALL YOUR PLASMA CUTTER NEEDS",
    description: "Custom Designed Machine Bed. Working Width/Length Range are Subject to Change upon request. Standard Bed Sizes are BPL-C 1530, 2060, 3060 Types.",
    image:"/slider-img.png"
  },
  {
    title: "ADVANCED LASER CUTTING SOLUTIONS",
    description: "High-precision laser cutting machines for various materials. Customizable bed sizes and power options available.",
    image: "/slider-img1.png"
  },
  {
    title: "WATERJET CUTTING TECHNOLOGY",
    description: "Versatile waterjet cutting systems for tough materials. Adjustable cutting area and pressure settings to suit your needs.",
    image: "/slider-img2.png"
  }
];

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden ss:mt-40 xs:mt-20 mb-10 ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row h-full xs:mx-16 ss:mx-32">
            <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{slide.title}</h2>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{slide.description}</p>
              <div className="flex space-x-2 md:space-x-4">
                <Link to={"/products"}><button className="bg-orange-400 text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base">
                  Tüm Ürünler
                </button></Link>
                <Link to={"/about"}><button className="bg-teal-400 text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base">
                  Hakkımızda
                </button></Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-48 md:h-auto">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-2 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-teal-400 scale-125' 
                : 'bg-gray-300 hover:bg-teal-200'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;