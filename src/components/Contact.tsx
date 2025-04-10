
import React, { useRef, useEffect } from 'react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 opacity-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Let's work together</h2>
          <p className="text-ayush-gray mb-10">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
          
          <a 
            href="mailto:hello@ayushworks.com" 
            className="inline-block border border-ayush-white px-8 py-3 hover:bg-ayush-white hover:text-ayush-black transition-all duration-300 cursor-hover"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
