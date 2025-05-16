import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f2e44] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">LOCATE US</h3>
          <p className="text-gray-300">
            Sector Gamma 1, Greater Noida<br />
            Dist. Gautam Budh Nagar,<br />
            U.P. 201308, India
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
          <p className="text-gray-300">
            Call us: +91-120-4296701<br />
            Email: info@pragyanschool.com
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">INTERACT WITH US</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Pragyan School. C.B.S.E Affiliation No: 2131261, School Code: 60567. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Developed by Euro Infotech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;