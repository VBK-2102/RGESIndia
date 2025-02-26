import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import gifImage from "../assets/image/short.gif";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full overflow-visible">
      {/* GIF Positioned Properly at the Tip with Red Background */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-15 z-15">
        <div className="w-28 h-28 flex items-center justify-center rounded-full bg-[#EE4B2B] shadow-lg">
          <img 
            src={gifImage} 
            alt="RGESIndia Logo" 
            className="w-30 h-30 rounded-full object-contain"
          />
        </div>
      </div>

      {/* Footer Shape Matching the Image */}
      <footer 
        className="relative w-full bg-[#EE4B2B] text-white pt-24 pb-8"
        style={{
          clipPath: "polygon(50% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)"
        }}
      >
        <div className="w-[83.33%] mx-auto text-center">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-6">RGESIndia</h2>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-2xl transition-transform transform hover:scale-110 hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-2xl transition-transform transform hover:scale-110 hover:text-yellow-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl transition-transform transform hover:scale-110 hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl transition-transform transform hover:scale-110 hover:text-yellow-300">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm opacity-90">
            &copy; {new Date().getFullYear()} RGESIndia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
