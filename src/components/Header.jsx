import React from "react";

const Header = () => {
  // In a real implementation with react-router, you would use Link components
  // For this demonstration, we'll use regular anchor tags
  return (
    <header className="relative bg-black text-white py-6 shadow-lg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/pvKdJBtK/about-card-3-1.jpg')`, // Replace with your corrected image URL
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 relative z-20">
        <div className="text-center w-10/12 mx-auto py-32 flex flex-col gap-4">
          <h1 className="text-6xl font-sans uppercase font-extrabold text-white drop-shadow-lg">
            Discover Your City's <br /> Vibrant Events
          </h1>
          <p className="mt-2 text-white text-lg drop-shadow-md max-w-3xl mx-auto">
            Find and experience local events tailored to your interests. Where local meets extraordinary, uncover hidden gems in your area and embark on a journey of experiences.
          </p>
          <div className="mt-6">
            <a 
              href="/services" 
              className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Explore Events
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;