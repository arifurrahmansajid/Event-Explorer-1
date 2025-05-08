import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";

const Program = () => {
  const programs = [
    { title: "Music Production", duration: "8 Weeks" },
    { title: "Sports Training", duration: "12 Weeks" },
    { title: "Tech Talks", duration: "Weekly" },
    { title: "Live Performances", duration: "Monthly" },
    { title: "Artist Development", duration: "Ongoing" },
    { title: "Sports Analytics", duration: "6 Weeks" },
    { title: "Coding Workshops", duration: "Bi-weekly" },
    { title: "Creative Jam Sessions", duration: "Weekly" },
  ];

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Our Programs | Music, Sports & Tech</title>
      </Helmet>
      
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between py-20 px-4">
        <img 
          className="w-80 rounded-lg shadow-xl" 
          src="https://i.ibb.co.com/jZDx3XhL/Fossils-1-640.jpg" 
          alt="Music, Sports & Tech Collage" 
        />
        <div className="flex flex-col items-center md:items-end gap-5 md:gap-10">
          <div className="text-center md:text-right space-y-3">
            <h2 className="text-5xl font-extrabold text-purple-800">
              Music, Sports & Tech Programs
            </h2>
            <p className="text-lg text-gray-600">
              Elevate your skills with our expert-led programs
            </p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Join Now
          </button>
        </div>
      </div>

      {/* Programs Marquee */}
      <div className="py-10 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-purple-800">
            Our Signature Programs
          </h2>
          <p className="text-gray-600 mt-2">
            Discover what we offer across music, sports and technology
          </p>
        </div>
        
        <Marquee pauseOnHover={true} gradient={false} className="py-5">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col items-center mx-8">
              <div className="w-40 h-40 p-5 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white text-center font-semibold shadow-lg hover:scale-105 transition-transform">
                {program.title}
              </div>
              {program.duration && (
                <p className="mt-3 text-sm text-gray-700 font-medium">
                  Duration: <span className="font-bold">{program.duration}</span>
                </p>
              )}
            </div>
          ))}  
        </Marquee>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-16 gap-10 bg-gray-100 rounded-xl my-10">
        <div className="flex w-full lg:w-1/2 flex-col items-center lg:items-start justify-start text-center lg:text-left gap-5">
          <h1 className="text-2xl font-semibold text-purple-800">
            Ready to take your skills to the next level?
          </h1>
          <p className="text-gray-600">
            Whether you're an aspiring musician, athlete, or tech enthusiast, 
            we have the perfect program to help you grow.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Explore All Programs
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img 
            src="https://i.ibb.co.com/mhYg9XQ/DD.jpg" 
            alt="Performance image" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Instructors Section */}
      <div className="space-y-16 my-16 container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-purple-800">
            Meet Our Experts
          </h2>
          <p className="text-gray-600 mt-2">
            Learn from industry professionals and accomplished athletes
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          <img 
            className="w-64 h-64 object-cover rounded-full border-4 border-purple-500 shadow-lg" 
            src="https://i.ibb.co.com/zFMQR1x/rakhi-toshniwal.jpg" 
            alt="Music Producer" 
          />
          <div className="text-center lg:text-left max-w-2xl">
            <div className="pb-3">
              <h2 className="text-2xl font-bold text-purple-800">Alex Johnson</h2>
              <p className="text-purple-600">Music Producer & Sound Engineer</p>
            </div>
            <p className="text-gray-700">
              With over 15 years in the music industry, Alex has worked with Grammy-winning artists 
              and specializes in electronic music production. His teaching approach combines technical 
              expertise with creative expression to help students find their unique sound.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          <img 
            className="w-64 h-64 object-cover rounded-full border-4 border-purple-500 shadow-lg order-last lg:order-first" 
            src="https://i.ibb.co.com/qm8gY0x/imgpsh-fullsize-anim.jpg" 
            alt="Sports Coach" 
          />
          <div className="text-center lg:text-right max-w-2xl">
            <div className="pb-3">
              <h2 className="text-2xl font-bold text-purple-800">Sarah Williams</h2>
              <p className="text-purple-600">Professional Sports Coach</p>
            </div>
            <p className="text-gray-700">
              Former Olympic athlete with 20+ years of coaching experience. Sarah specializes in 
              performance training and sports psychology, helping athletes of all levels achieve 
              their personal best while maintaining mental and physical well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;