
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, Twitter, MessagesSquare } from 'lucide-react';

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
        span.style.animationDelay = `${delay + index * 0.03}s`;
        element.appendChild(span);
      });
    };
    
    // Reduced animation time to 0.5-1 second for faster loading
    setTimeout(() => {
      animateText(headingRef.current, 0.2);
      animateText(subheadingRef.current, 0.5);
      if (socialsRef.current) {
        socialsRef.current.classList.add('animate-fade-in');
      }
    }, 300);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-64 h-64 rounded-full bg-ayush-gray/5 blur-3xl -top-32 -left-32"></div>
        <div className="absolute w-80 h-80 rounded-full bg-[#00ADB5]/10 blur-3xl top-1/2 right-0"></div>
        <div className="absolute w-48 h-48 rounded-full bg-[#00ADB5]/5 blur-3xl bottom-20 left-20"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 
          ref={headingRef}
          className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 animated-text"
        >
          DIGITAL & <span className="zigzag-underline">VISUAL</span> DESIGNER
        </h1>
        <p 
          ref={subheadingRef}
          className="text-lg md:text-xl text-ayush-gray max-w-3xl mx-auto animated-text mb-12"
        >
          Independent designer crafting thoughtful digital experiences — focusing on visual design, branding, and creative direction.
        </p>
        
        <div 
          ref={socialsRef} 
          className="flex justify-center space-x-8 opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
            <Github className="w-6 h-6 text-ayush-gray hover:text-ayush-white transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
            <Linkedin className="w-6 h-6 text-ayush-gray hover:text-ayush-white transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
            <Instagram className="w-6 h-6 text-ayush-gray hover:text-ayush-white transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
            <Twitter className="w-6 h-6 text-ayush-gray hover:text-ayush-white transition-colors" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
            <MessagesSquare className="w-6 h-6 text-ayush-gray hover:text-ayush-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
