
import React, { useRef, useEffect, useState } from 'react';
import { Mail, ExternalLink, Github, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-ayush-black">
      <div className={`container mx-auto px-4 md:px-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-8 text-center">Get in <span className="curly-underline">touch</span></h2>
          
          <div className="glass-card p-8 rounded-2xl mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl font-medium">Let's connect</h3>
                <p className="text-ayush-gray">Have a project in mind or just want to chat? Feel free to reach out.</p>
                
                <div className="flex items-center group cursor-hover mt-4">
                  <Mail className="w-5 h-5 mr-3 text-[#00ADB5]" />
                  <a 
                    href="mailto:ayushsharma.code@outlook.com" 
                    className="text-lg group-hover:text-[#00ADB5] transition-all duration-300"
                  >
                    ayushsharma.code@outlook.com
                  </a>
                </div>
              </div>
              
              <Separator orientation="vertical" className="h-40 hidden md:block" />
              
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl font-medium">On the web</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center p-3 glass-card rounded-xl hover:bg-[#00ADB5]/10 transition-all duration-300 group">
                    <Github className="w-5 h-5 mr-2 group-hover:text-[#00ADB5]" />
                    <span>Github</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center p-3 glass-card rounded-xl hover:bg-[#00ADB5]/10 transition-all duration-300 group">
                    <Linkedin className="w-5 h-5 mr-2 group-hover:text-[#00ADB5]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center p-3 glass-card rounded-xl hover:bg-[#00ADB5]/10 transition-all duration-300 group">
                    <Twitter className="w-5 h-5 mr-2 group-hover:text-[#00ADB5]" />
                    <span>Twitter</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center p-3 glass-card rounded-xl hover:bg-[#00ADB5]/10 transition-all duration-300 group">
                    <Instagram className="w-5 h-5 mr-2 group-hover:text-[#00ADB5]" />
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-medium mb-1">Ready to start a project?</h3>
              <p className="text-ayush-gray">Let's discuss your ideas and make them reality</p>
            </div>
            <a href="mailto:ayushsharma.code@outlook.com" 
              className="mt-4 md:mt-0 px-6 py-3 bg-[#00ADB5] text-white rounded-full flex items-center hover:bg-[#00ADB5]/90 transition-colors cursor-hover">
              <span>Start a conversation</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
