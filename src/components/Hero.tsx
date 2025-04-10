
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

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
    
    setTimeout(() => {
      animateText(headingRef.current, 0.2);
      animateText(subheadingRef.current, 0.8);
    }, 300);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="container mx-auto text-center">
        <h1 
          ref={headingRef}
          className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 animated-text"
        >
          DIGITAL & VISUAL DESIGNER
        </h1>
        <p 
          ref={subheadingRef}
          className="text-lg md:text-xl text-ayush-gray max-w-3xl mx-auto animated-text"
        >
          Independent designer crafting thoughtful digital experiences — focusing on visual design, branding, and creative direction.
        </p>
      </div>
    </section>
  );
};

export default Hero;
