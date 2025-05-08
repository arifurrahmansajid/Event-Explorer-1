import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Dhaka Food Festival 2023",
      snippet: "Experience diverse culinary delights with over 100 food stalls and live cooking demonstrations.",
      image: "https://i.ibb.co.com/zhC01mWb/11-facts-about-food-festival-1693051143.jpg",
    },
    {
      id: 2,
      title: "Bangla Rock Music Festival",
      snippet: "The biggest rock music festival featuring top local bands and international artists.",
      image: "https://i.ibb.co.com/jZDx3XhL/Fossils-1-640.jpg",
    },
    {
      id: 3,
      title: "Traditional Arts Exhibition",
      snippet: "Showcasing Bangladesh's rich cultural heritage through traditional arts and crafts.",
      image: "https://i.ibb.co.com/GvW9yH3V/th-1.jpg",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Events Blogs & Articles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.snippet}</p>
                <button 
                  className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;