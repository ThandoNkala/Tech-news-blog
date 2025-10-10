// components/BannerSlider.tsx
import Image from 'next/image';
import { useState, useEffect } from 'react';

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      title: "AI Revolution",
      subtitle: "How artificial intelligence is transforming industries worldwide",
      image: "/images/ai-tech.jpg",
      category: "ARTIFICIAL INTELLIGENCE"
    },
    {
      title: "5G Expansion",
      subtitle: "The next generation of wireless technology rolls out globally",
      image: "/images/5g-network.jpg",
      category: "NETWORKING"
    },
    {
      title: "Quantum Computing",
      subtitle: "Breakthroughs in quantum technology could change everything",
      image: "/images/quantum-computing.jpg",
      category: "QUANTUM"
    }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className="relative h-96 md:h-[500px] w-full overflow-hidden rounded-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
            
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-lg">
                <div className="text-sm uppercase tracking-wider text-blue-300 font-semibold mb-3">
                  {slide.category}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-lg mb-6">
                  {slide.subtitle}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;