import React from 'react';
import Navbar from '../components/Navber';
import Slider from '../components/Slider';
//import ImpectCounseling from '../components/ImpectCounseling';
import Footer from '../components/Footer';
//import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <Header></Header>
      
      <Services></Services>
      <Slider></Slider>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;