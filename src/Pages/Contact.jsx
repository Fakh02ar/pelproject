import React, { useState } from 'react';

const slides = [
  {
    icon: '💬',
    title: 'Customer Care',
    description: 'Support team is available from Monday to Saturday, 10:00 am to 06:00 pm.',
    button: '0311 1735111',
  },
  {
    icon: '✉️',
    title: 'Online Complaint Registration',
    description: 'Register your complaint online',
    button: 'Click Here',
  },
  {
    icon: '📄',
    title: 'User Manuals',
    description: 'Search, download, or view user manuals for your products',
    button: 'Click Here',
  },
  {
    icon: '📞',
    title: 'Call Support',
    description: 'Talk directly to our support team.',
    button: 'Call Now',
  },
  {
    icon: '🛠️',
    title: 'Service Centers',
    description: 'Find nearby authorized service centers.',
    button: 'Locate',
  },
];




// 👇 Main Slider Page Component
const Slider = () => {
  const slidesPerPage = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = slides.length - slidesPerPage;

  return (
    <div className="max-w-[1200px] mx-auto py-10 mt-15">
      <a href="/home" className="text-[13px] text-[#282828]">Home /</a>
      <span className="text-[13px] text-[#282828]">Contact us</span>
      <h1 className="text-[#282828] text-[48px] font-bold mt-3 mb-20 text-center">Contact Us</h1>

      {/* Slide Container */}
      <div className="overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(100 / slidesPerPage) * currentIndex}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-3 box-border">
              <div className="bg-[#fbfbfb] p-8 text-center h-full">
                <div className="text-4xl mb-4">{slide.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                <p className="text-gray-600 mb-4">{slide.description}</p>
                <button className="bg-gray-800 text-white px-6 py-2 rounded-full">
                  {slide.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => index <= maxIndex && setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

     

        
    </div>
  );
};

export default Slider;
