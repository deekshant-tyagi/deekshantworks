
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, Twitter, Code, FileText, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateText = (element: HTMLElement | null, delay: number = 0) => {
      if (!element) return;

      const text = element.textContent || '';
      element.textContent = '';

      const chars = text.split('');

      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.animation = `fadeInUp 0.5s forwards ${delay + index * 0.03}s`;
        element.appendChild(span);
      });
    };

    // Reduced animation time for faster rendering
    setTimeout(() => {
      animateText(headingRef.current, 0.2);
      animateText(subheadingRef.current, 0.5);
      if (socialsRef.current) {
        socialsRef.current.classList.add('animate-fade-in');
        socialsRef.current.style.opacity = '1';
      }
    }, 300);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-4 px-4 sm:pt-24 sm:pb-12 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-deekshant-gray/5 blur-3xl -top-16 -left-16 sm:-top-32 sm:-left-32"></div>
        <div className="absolute w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-[#00ADB5]/10 blur-3xl top-1/2 right-0"></div>
        <div className="absolute w-24 h-24 sm:w-48 sm:h-48 rounded-full bg-[#00ADB5]/5 blur-3xl bottom-10 left-10 sm:bottom-20 sm:left-20"></div>
      </div>
      <div className="container mx-auto text-center relative z-10 px-4 sm:px-6">
        {/* Available for Work Badge */}
        <div className="mb-6 sm:mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500/10 to-deekshant-teal/10 border border-green-500/30 rounded-full backdrop-blur-sm">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium text-xs sm:text-sm">Available for Work</span>
          </div>
        </div>

        {/* <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="inline-block px-4 py-2 bg-deekshant-teal/10 border border-deekshant-teal/30 rounded-full text-deekshant-teal text-sm font-semibold">
            MERN Stack Developer
          </span>
        </div> */}
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-center">
          <div
            ref={headingRef}
            className="animated-text leading-tight"
          >
            <div className="mobile-heading-line bg-gradient-to-r from-white via-deekshant-teal to-white bg-clip-text text-transparent tracking-wider">
              CRAFTING DIGITAL
            </div>
            <div className="mobile-heading-line relative">
              <span className="bg-gradient-to-r from-deekshant-teal via-white to-deekshant-teal bg-clip-text text-transparent tracking-wider">
                EXPERIENCES
              </span>
              <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-deekshant-teal to-transparent rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        <p
          ref={subheadingRef}
          className="text-base sm:text-lg md:text-xl text-deekshant-gray max-w-2xl sm:max-w-3xl mx-auto animated-text mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
        >
          <span className="text-deekshant-teal font-semibold">
            Full-Stack Developer Passionate About<br className="hidden sm:block" />
            Building Scalable Web Applications —<br className="hidden sm:block" />
            Expert In MERN for Modern, Responsive,<br className="hidden sm:block" />
            and User-Centric Digital Solutions.
          </span>
        </p>

        {/* Tech Stack Pills */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 text-sm font-medium hover:border-deekshant-teal/50 transition-colors cursor-hover">MongoDB</span>
          <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 text-sm font-medium hover:border-deekshant-teal/50 transition-colors cursor-hover">Express.js</span>
          <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 text-sm font-medium hover:border-deekshant-teal/50 transition-colors cursor-hover">React.js</span>
          <span className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 text-sm font-medium hover:border-deekshant-teal/50 transition-colors cursor-hover">Node.js</span>
        </div> */}

        <div
          ref={socialsRef}
          className="flex justify-center space-x-4 sm:space-x-6 opacity-0 transition-opacity duration-700"
          style={{ animationDelay: '0.8s' }}
        >
          <a href="https://github.com/deekshant-tyagi" target="_blank" rel="noopener noreferrer" className="cursor-hover group">
            <div className="p-2.5 sm:p-3 rounded-full border border-gray-700/50 hover:border-deekshant-teal/50 transition-all duration-300 hover:bg-deekshant-teal/10">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-deekshant-gray group-hover:text-deekshant-teal transition-colors" />
            </div>
          </a>
          <a href="https://leetcode.com/deekshanttyagi" target="_blank" rel="noopener noreferrer" className="cursor-hover group">
            <div className="p-2.5 sm:p-3 rounded-full border border-gray-700/50 hover:border-deekshant-teal/50 transition-all duration-300 hover:bg-deekshant-teal/10">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-deekshant-gray group-hover:text-deekshant-teal transition-colors" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/deekshanttyagi" target="_blank" rel="noopener noreferrer" className="cursor-hover group">
            <div className="p-2.5 sm:p-3 rounded-full border border-gray-700/50 hover:border-deekshant-teal/50 transition-all duration-300 hover:bg-deekshant-teal/10">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-deekshant-gray group-hover:text-deekshant-teal transition-colors" />
            </div>
          </a>
          <a href="https://instagram.com/_yashtyagiii" target="_blank" rel="noopener noreferrer" className="cursor-hover group">
            <div className="p-2.5 sm:p-3 rounded-full border border-gray-700/50 hover:border-deekshant-teal/50 transition-all duration-300 hover:bg-deekshant-teal/10">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-deekshant-gray group-hover:text-deekshant-teal transition-colors" />
            </div>
          </a>
          <a href="https://twitter.com/_voiddotdev" target="_blank" rel="noopener noreferrer" className="cursor-hover group">
            <div className="p-2.5 sm:p-3 rounded-full border border-gray-700/50 hover:border-deekshant-teal/50 transition-all duration-300 hover:bg-deekshant-teal/10">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-deekshant-gray group-hover:text-deekshant-teal transition-colors" />
            </div>
          </a>
        </div>

        <div className="mt-8 sm:mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
          <a
            href="https://drive.google.com/file/d/1QuI9YRmo71Mh1bWb57r2ZbGafrv2hgYE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-deekshant-teal to-deekshant-teal/80 rounded-full text-deekshant-black font-semibold hover:from-deekshant-teal/90 hover:to-deekshant-teal/70 transition-all duration-300 transform hover:scale-105 cursor-hover shadow-lg hover:shadow-deekshant-teal/25 text-sm sm:text-base"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Download Resume</span>
            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
