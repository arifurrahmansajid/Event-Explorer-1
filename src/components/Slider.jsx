import React, { useState, useEffect } from "react";

const EventsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Classical Music Concerts",
      description: "Experience the timeless beauty of orchestral performances featuring world-renowned symphonies and soloists. Our concert series showcases masterpieces from Bach to Beethoven and contemporary composers, performed by leading orchestras in stunning acoustic venues.",
      color: "bg-indigo-700",
      icon: "🎻"
    },
    {
      id: 2,
      title: "Contemporary Dance Showcases",
      description: "Witness the beauty of movement with cutting-edge choreography that pushes artistic boundaries. Our dance events feature both established companies and emerging talent, presenting pieces that blend traditional techniques with innovative artistic expression.",
      color: "bg-purple-700",
      icon: "💃"
    },
    {
      id: 3,
      title: "Theater & Drama Productions",
      description: "Immerse yourself in the world of storytelling through our curated selection of plays, musicals, and dramatic performances. From Shakespeare classics to groundbreaking modern works, experience the power of live theater with exceptional casts and production values.",
      color: "bg-amber-600",
      icon: "🎭"
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className={`absolute inset-0 ${slide.color} text-white flex flex-col items-center justify-center p-4`}>
            <div className="w-2/3 md:w-2/4 text-center">
              <div className="text-6xl mb-6">{slide.icon}</div>
              <h2 className="text-4xl md:text-5xl mb-5 font-bold"> {slide.title} </h2>
              <p className="mt-4 text-sm md:text-base"> {slide.description} </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-all"
      >
        ←
      </button>
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-all"
      >
        →
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsSlider;