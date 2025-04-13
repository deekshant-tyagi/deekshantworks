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
  return <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'py-4 bg-ayush-black/90 backdrop-blur-sm' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto md:px-8 flex justify-between items-center px-[64px]">
          <a href="/" className="text-xl font-bold text-white hover:text-white transition-colors">D</a>
          
          {isMobile ? <button onClick={() => setMobileMenuOpen(true)} className="cursor-hover text-white" aria-label="Open mobile menu">
              <Menu size={24} />
            </button> : <ul className="flex space-x-8">
              <li><a href="#work" className="nav-link text-white hover:text-[#00ADB5] transition-colors duration-300">Work</a></li>
              <li><a href="#about" className="nav-link text-white hover:text-[#00ADB5] transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="nav-link text-white hover:text-[#00ADB5] transition-colors duration-300">Contact</a></li>
            </ul>}
        </div>
      </nav>

      {/* Mobile Menu with slide from right effect */}
      {mobileMenuOpen && <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="bg-black/50 absolute inset-0" onClick={() => setMobileMenuOpen(false)} />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-ayush-black transform transition-transform duration-300 ease-in-out animate-slide-in-right">
            <div className="p-6 flex justify-between items-center border-b border-gray-800">
              <a href="/" className="text-xl font-bold">D</a>
              <button onClick={() => setMobileMenuOpen(false)} className="text-ayush-teal hover:text-white transition-colors" aria-label="Close mobile menu">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 p-6">
              <ul className="flex flex-col space-y-6">
                <li>
                  <a href="#" className="block py-3 px-4 text-lg font-medium bg-ayush-teal text-white rounded-md" onClick={e => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.location.href = "#";
              }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#work" className="block py-3 px-4 text-lg text-white hover:text-ayush-teal transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="block py-3 px-4 text-lg text-white hover:text-ayush-teal transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block py-3 px-4 text-lg text-white hover:text-ayush-teal transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>}
    </>;
};
export default Navbar;