import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-purple-600 text-white'>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-11/12 mx-auto py-8 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <Link to="/" className="text-3xl font-bold"> Event Explorer </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2"> Check Your Fitment </h2>
          <p className="text-sm"> Pricing </p>
          <p className="text-sm"> Refund Policy </p>
          <p className="text-sm"> FAQs </p>
        </div>
        <div className="">
          <h2 className="text-lg font-bold mb-2"> Community </h2>
          <p className="text-sm"> Networking & Events </p>
          <p className="text-sm"> Achievements </p>
          <p className="text-sm"> Counselling Partners </p>
          <p className="text-sm"> Knowledge Sharing </p>
          <p className="text-sm"> Blog </p>
        </div>
        <div className="">
          <h2 className="text-lg font-bold mb-2"> Our Story </h2>
          <p className="text-sm"> About Us </p>
          <p className="text-sm"> Meet The Team </p>
          <p className="text-sm"> Awards & Recognitions </p>
          <p className="text-sm"> Contact Us </p>
    
        </div>
      </div>
      <p className="text-center text-sm p-4"> © Event Explorer 2025 </p>
    </div>
  );
};

export default Footer;