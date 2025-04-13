
import React, { useRef, useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, Twitter, MessagesSquare, Mail, ArrowRight, Bookmark, Star, Coffee, Heart, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    console.log("Contact section mounted");
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("Contact section is now visible");
          setIsVisible(true);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      console.log("Observer attached to Contact section");
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        console.log("Observer detached from Contact section");
      }
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-ayush-black">
      <div className={`container mx-auto px-4 md:px-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-4">Get in <span className="curly-underline">touch</span></h2>
              <p className="text-ayush-gray mb-8 text-lg">
                Interested in working with me? Feel free to reach out.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center group cursor-hover">
                  <Mail className="w-6 h-6 mr-4 text-[#00ADB5]" />
                  <a 
                    href="mailto:ayushsharma.code@outlook.com" 
                    className="text-xl group-hover:text-ayush-white transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">ayushsharma.code@outlook.com</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ADB5] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30">
                  <h3 className="text-lg mb-4 flex items-center">
                    <span className="text-[#00ADB5] mr-2">Follow me</span>
                    <ArrowRight className="w-4 h-4 text-[#00ADB5]" />
                  </h3>
                  <div className="flex space-x-5">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="cursor-hover bg-gray-800/80 p-3 rounded-full hover:bg-[#00ADB5]/20 transition-all duration-300">
                      <Github className="w-5 h-5 hover:text-[#00ADB5] transition-colors" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-hover bg-gray-800/80 p-3 rounded-full hover:bg-[#00ADB5]/20 transition-all duration-300">
                      <Linkedin className="w-5 h-5 hover:text-[#00ADB5] transition-colors" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-hover bg-gray-800/80 p-3 rounded-full hover:bg-[#00ADB5]/20 transition-all duration-300">
                      <Instagram className="w-5 h-5 hover:text-[#00ADB5] transition-colors" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-hover bg-gray-800/80 p-3 rounded-full hover:bg-[#00ADB5]/20 transition-all duration-300">
                      <Twitter className="w-5 h-5 hover:text-[#00ADB5] transition-colors" />
                    </a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="cursor-hover bg-gray-800/80 p-3 rounded-full hover:bg-[#00ADB5]/20 transition-all duration-300">
                      <MessagesSquare className="w-5 h-5 hover:text-[#00ADB5] transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900/40 p-8 rounded-xl backdrop-blur-sm border border-gray-800/50 hover:border-[#00ADB5]/30 transition-all duration-300 cursor-hover group">
                <div className="flex items-start mb-4">
                  <div className="bg-[#00ADB5]/20 p-3 rounded-lg mr-4">
                    <Coffee className="w-6 h-6 text-[#00ADB5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00ADB5] transition-colors">Let's discuss a project</h3>
                    <p className="text-ayush-gray">Have an idea? Let's bring it to life together.</p>
                  </div>
                </div>
                <a href="mailto:ayushsharma.code@outlook.com" className="inline-flex items-center text-sm text-[#00ADB5] hover:text-white transition-colors">
                  <span>Start a conversation</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              
              <div className="bg-gray-900/40 p-8 rounded-xl backdrop-blur-sm border border-gray-800/50 hover:border-[#00ADB5]/30 transition-all duration-300 cursor-hover group">
                <div className="flex items-start mb-4">
                  <div className="bg-[#00ADB5]/20 p-3 rounded-lg mr-4">
                    <Bookmark className="w-6 h-6 text-[#00ADB5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00ADB5] transition-colors">View my resume</h3>
                    <p className="text-ayush-gray">Download my detailed portfolio and credentials.</p>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center text-sm text-[#00ADB5] hover:text-white transition-colors">
                  <span>Download CV</span>
                  <Download className="ml-2 w-4 h-4" />
                </a>
              </div>
              
              <div className="bg-gray-900/40 p-8 rounded-xl backdrop-blur-sm border border-gray-800/50 hover:border-[#00ADB5]/30 transition-all duration-300 cursor-hover group">
                <div className="flex items-start mb-4">
                  <div className="bg-[#00ADB5]/20 p-3 rounded-lg mr-4">
                    <Heart className="w-6 h-6 text-[#00ADB5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00ADB5] transition-colors">Support my work</h3>
                    <p className="text-ayush-gray">If you appreciate my work, consider supporting me.</p>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center text-sm text-[#00ADB5] hover:text-white transition-colors">
                  <span>Buy me a coffee</span>
                  <Star className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-right text-ayush-gray mt-16">
            Built with <span className="text-red-500">❤</span> by Ayush
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
