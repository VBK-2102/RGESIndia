import React, { useState } from "react";
import logo from "../assets/image/RGESIndialogo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-yellow-100 via-orange-400 to-orange-600 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="logo" 
              className="h-14 w-auto transition-transform transform hover:scale-110" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="!text-black font-semibold hover:text-yellow-400 transition px-4 py-2 text-lg">
              Home
            </a>
            <a href="/services" className="!text-black font-semibold hover:text-yellow-300 transition px-4 py-2 text-lg">
              Services
            </a>
            <a href="/about" className="!text-black font-semibold hover:text-yellow-300 transition px-4 py-2 text-lg">
              About Us
            </a>
            <a href="/contact" className="!text-black font-semibold hover:text-yellow-300 transition px-4 py-2 text-lg">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-yellow-300 hover:bg-orange-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="!text-black font-semibold hover:text-yellow-300 block px-4 py-2 text-lg">
              Home
            </a>
            <a href="/services" className="!text-black font-semibold hover:text-yellow-300 block px-4 py-2 text-lg">
              Services
            </a>
            <a href="/about" className="!text-black font-semibold hover:text-yellow-300 block px-4 py-2 text-lg">
              About Us
            </a>
            <a href="/contact" className="!text-black font-semibold hover:text-yellow-300 block px-4 py-2 text-lg">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
