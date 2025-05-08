import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="text-3xl font-bold flex items-center">
            <img
              className="w-10 h-10"
              src="https://i.ibb.co.com/RTZDh9y/CC.png"
              alt="Event Explorer Logo"
            />
              <span className="ml-3">EventExplorer</span>
            </Link>
            <p className="text-purple-200">
              Your gateway to unforgettable experiences. Discover, book, and enjoy events near you.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/arifurrahmansajid" className="text-white hover:text-purple-300 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://x.com/ArifurSaji18609" className="text-white hover:text-purple-300 transition-colors">
                <FaTwitter size={20} />
              </a>
             
              <a href="https://www.linkedin.com/in/arifursajid3456/" className="text-white hover:text-purple-300 transition-colors">
                <FaLinkedin size={20} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-purple-500 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-purple-200 hover:text-white transition-colors">Browse Events</Link></li>
              <li><Link to="/create-event" className="text-purple-200 hover:text-white transition-colors">Host an Event</Link></li>
              <li><Link to="/pricing" className="text-purple-200 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="text-purple-200 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/blog" className="text-purple-200 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-purple-500 pb-2">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-purple-200 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-purple-200 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="text-purple-200 hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-purple-200 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="text-purple-200 hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-purple-500 pb-2">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p className="text-purple-200">123 Event Street, Suite 100</p>
              <p className="text-purple-200">San Francisco, CA 94107</p>
              <p className="text-purple-200">Email: <a href="mailto:info@eventexplorer.com" className="hover:text-white transition-colors">info@eventexplorer.com</a></p>
              <p className="text-purple-200">Phone: <a href="tel:+18005551234" className="hover:text-white transition-colors">(800) 555-1234</a></p>
            </address>
            <div className="mt-4">
              <button className="bg-white text-purple-700 px-4 py-2 rounded-md font-medium hover:bg-purple-100 transition-colors">
                Subscribe to Event Explorer
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 text-sm">
            © {new Date().getFullYear()} EventExplorer. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/sitemap" className="text-purple-300 hover:text-white text-sm transition-colors">Sitemap</Link>
            <Link to="/careers" className="text-purple-300 hover:text-white text-sm transition-colors">Careers</Link>
            <Link to="/press" className="text-purple-300 hover:text-white text-sm transition-colors">Press</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;