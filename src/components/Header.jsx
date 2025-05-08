import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Header = () => {
  // Slide data
  const slides = [
    {
      id: 1,
      title: "Discover Your City's Vibrant Events",
      description: "Find and experience local events tailored to your interests. Where local meets extraordinary, uncover hidden gems in your area and embark on a journey of experiences.",
      image: "https://i.ibb.co/pvKdJBtK/about-card-3-1.jpg",
      buttonText: "Explore Events",
      buttonLink: "/events"
    },
    {
      id: 2,
      title: "Live Concerts & Performances",
      description: "Experience the energy of live music and performances from local and international artists in your city.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      buttonText: "View Concerts",
      buttonLink: "/concerts"
    },
    {
      id: 3,
      title: "Food Festivals & Culinary Events",
      description: "Taste your way through the city's best culinary offerings at our curated food festivals and tasting events.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      buttonText: "Discover Food Events",
      buttonLink: "/food-events"
    }
  ];

  return (
    <header className="relative bg-black text-white shadow-lg h-screen max-h-[800px]">
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              aria-hidden="true"
            ></div>
            
            {/* Slide Content */}
            <div className="container mx-auto flex flex-col justify-center items-center relative z-20 h-full px-4 text-center">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold uppercase text-white drop-shadow-lg mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white drop-shadow-md mb-8">
                  {slide.description}
                </p>
                <a 
                  href={slide.buttonLink}
                  className="inline-block bg-purple-700 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-2xl"></div>
        <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-2xl"></div>
      </Swiper>

      
      
    </header>
  );
};

export default Header;