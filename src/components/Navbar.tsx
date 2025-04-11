
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'py-4 bg-ayush-black/90 backdrop-blur-sm' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="/" className="text-xl font-light">AYUSHWORKS</a>
          
          {isMobile ? (
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="cursor-hover"
            >
              <Menu size={24} />
            </button>
          ) : (
            <ul className="flex space-x-8">
              <li><a href="#work" className="nav-item text-white hover:text-[#00ADB5] transition-colors duration-300">Work</a></li>
              <li><a href="#about" className="nav-item text-white hover:text-[#00ADB5] transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="nav-item text-white hover:text-[#00ADB5] transition-colors duration-300">Contact</a></li>
            </ul>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-ayush-black z-50 flex flex-col">
          <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <a href="/" className="text-xl font-light">AYUSHWORKS</a>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <ul className="flex flex-col space-y-8 text-center text-2xl">
              <li>
                <a 
                  href="#work" 
                  className="nav-item text-white hover:text-[#00ADB5] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="nav-item text-white hover:text-[#00ADB5] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="nav-item text-white hover:text-[#00ADB5] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
