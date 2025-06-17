import React, { useState, useEffect, useRef } from 'react';
import airConditioner from '../assets/Ac.png';
import banner from '../assets/banner.png';
import refrigerator from '../assets/frig.png';
import led from '../assets/led.png';
import washingMachine from '../assets/machine.png';

const slides = [
  { id: 1, image: airConditioner },
  { id: 2, image: banner },
  { id: 3, image: refrigerator },
  { id: 4, image: led },
  { id: 5, image: washingMachine },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides); // Loop slides
    }, 5000);
    return () => clearInterval(interval);
  }, );

  // Handle end of transition
  const handleTransitionEnd = () => {
    if (currentSlide === totalSlides) {
      setIsTransitioning(false);
      setCurrentSlide(0);
    }
  };

  // Reset transition for seamless loop
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Handle dot click to change slide
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden h-[400px] md:h-[597px] mt-[72px]"> 
      <div
        ref={sliderRef}
        onTransitionEnd={handleTransitionEnd}
        className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          width: `${(totalSlides + 1) * 100}%`,
          transform: `translateX(-${(currentSlide % (totalSlides + 1)) * (100 / (totalSlides + 1))}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-full"
            style={{ width: `${100 / (totalSlides + 1)}%` }}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Clone of first slide */}
        <div
          className="w-full flex-shrink-0 h-full"
          style={{ width: `${100 / (totalSlides + 1)}%` }}
        >
          <img
            src={slides[0].image}
            alt="Slide clone"
            className="w-full h-[597px] object-cover object-center"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => handleDotClick(i)} // Handle click event
            className={`w-16 h-[2px] rounded bg-white cursor-pointer transition-all duration-300 ${
              i === currentSlide % totalSlides ? "opacity-100" : "opacity-30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
