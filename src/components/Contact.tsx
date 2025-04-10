
import React, { useRef, useEffect } from 'react';
import { Github, Linkedin, Instagram, Twitter, MessagesSquare, Mail } from 'lucide-react';

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
    <section id="contact" className="py-16 md:py-24 bg-ayush-black" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 opacity-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light mb-4">Get in touch</h2>
          <p className="text-ayush-gray mb-12 text-xl">
            Interested in working with me? feel free to reach out.
          </p>
          
          <div className="flex items-center mb-10">
            <Mail className="w-6 h-6 mr-4" />
            <a 
              href="mailto:ayushsharma.code@outlook.com" 
              className="text-xl hover:text-ayush-white transition-all duration-300 cursor-hover"
            >
              ayushsharma.code@outlook.com
            </a>
          </div>
          
          <div className="flex space-x-6 mb-16">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              <Github className="w-8 h-8 hover:text-ayush-white text-ayush-gray transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              <Linkedin className="w-8 h-8 hover:text-ayush-white text-ayush-gray transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              <Instagram className="w-8 h-8 hover:text-ayush-white text-ayush-gray transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              <Twitter className="w-8 h-8 hover:text-ayush-white text-ayush-gray transition-colors" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              <MessagesSquare className="w-8 h-8 hover:text-ayush-white text-ayush-gray transition-colors" />
            </a>
          </div>
          
          <p className="text-right text-ayush-gray">
            Built with <span className="text-red-500">❤</span> by Ayush
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
