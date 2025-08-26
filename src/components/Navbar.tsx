
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'work', 'about', 'skills', 'tools', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = section === 'home' ? document.body : document.getElementById(section);
        if (element) {
          const offsetTop = section === 'home' ? 0 : element.offsetTop;
          const offsetBottom = offsetTop + (section === 'home' ? window.innerHeight : element.offsetHeight);

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for navbar height
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  return <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'py-3 sm:py-4 bg-deekshant-black/90 backdrop-blur-sm' : 'py-4 sm:py-6 bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16">
          <a href="/" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-white transition-colors cursor-hover">ᗪ</a>

          {isMobile ? <button onClick={() => setMobileMenuOpen(true)} className="cursor-hover text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Open mobile menu">
              <Menu size={20} />
            </button> : <ul className="flex space-x-6 lg:space-x-8">
              <li>
                <button
                  onClick={() => handleNavClick('work')}
                  className={`nav-link transition-colors duration-300 cursor-hover text-sm lg:text-base ${activeSection === 'work' ? 'text-[#00ADB5]' : 'text-white hover:text-[#00ADB5]'}`}
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`nav-link transition-colors duration-300 cursor-hover text-sm lg:text-base ${activeSection === 'about' ? 'text-[#00ADB5]' : 'text-white hover:text-[#00ADB5]'}`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`nav-link transition-colors duration-300 cursor-hover text-sm lg:text-base ${activeSection === 'contact' ? 'text-[#00ADB5]' : 'text-white hover:text-[#00ADB5]'}`}
                >
                  Contact
                </button>
              </li>
            </ul>}
        </div>
      </nav>

      {/* Mobile Menu with slide from left effect */}
      {mobileMenuOpen && <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="bg-black/60 absolute inset-0" onClick={() => setMobileMenuOpen(false)} />

          {/* Menu Panel */}
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-xs bg-deekshant-black/95 backdrop-blur-md border-r border-gray-800/50 transform transition-transform duration-500 ease-in-out animate-slide-in-left">
            <div className="p-4 sm:p-6 flex justify-between items-center border-b border-gray-800/50">
              <a href="/" className="text-lg sm:text-xl font-bold cursor-hover text-deekshant-teal">ᗪ</a>
              <button onClick={() => setMobileMenuOpen(false)} className="text-deekshant-teal hover:text-white transition-colors cursor-hover p-2 hover:bg-white/10 rounded-lg" aria-label="Close mobile menu">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 sm:p-6">
              <ul className="flex flex-col space-y-4">
                <li>
                  <button
                    onClick={() => handleNavClick('home')}
                    className={`block w-full text-left py-3 px-4 text-base font-medium rounded-lg cursor-hover transition-all ${activeSection === 'home' ? 'bg-deekshant-teal text-deekshant-black' : 'text-white hover:text-deekshant-teal hover:bg-white/5'}`}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('work')}
                    className={`block w-full text-left py-3 px-4 text-base rounded-lg cursor-hover transition-all ${activeSection === 'work' ? 'bg-deekshant-teal text-deekshant-black' : 'text-white hover:text-deekshant-teal hover:bg-white/5'}`}
                  >
                    Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('about')}
                    className={`block w-full text-left py-3 px-4 text-base rounded-lg cursor-hover transition-all ${activeSection === 'about' ? 'bg-deekshant-teal text-deekshant-black' : 'text-white hover:text-deekshant-teal hover:bg-white/5'}`}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className={`block w-full text-left py-3 px-4 text-base rounded-lg cursor-hover transition-all ${activeSection === 'contact' ? 'bg-deekshant-teal text-deekshant-black' : 'text-white hover:text-deekshant-teal hover:bg-white/5'}`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>}
    </>;
};

export default Navbar;
