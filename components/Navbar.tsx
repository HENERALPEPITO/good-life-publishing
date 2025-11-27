import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const handleRedirect = () => {
    window.location.href = "https://goodlifetesting.netlify.app/";
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center cursor-pointer">
          <img
            src="/logo.png"
            alt="Good Life Publishing"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Login Button */}
       <div className="hidden md:flex items-center gap-8">
          <button 
              onClick={handleRedirect} 
              className="bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-800 transition-colors shadow-md hover:shadow-lg"
          >
              Log in
          </button>
      </div>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-6 gap-4">
              <button className="w-full bg-green-700 text-white py-3 rounded-full font-semibold shadow-md hover:bg-green-800">
                Log in
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
