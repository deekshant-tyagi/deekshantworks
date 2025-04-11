
import React, { useRef, useEffect } from 'react';
import { Github, Linkedin, Instagram, Twitter, MessagesSquare, Mail, ArrowRight } from 'lucide-react';

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
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-4">Get in <span className="curly-underline">touch</span></h2>
              <div className="mb-6 w-32">
                <svg viewBox="0 0 120 6" className="w-full">
                  <path d="M0,3 Q15,0 30,3 T60,3 T90,3 T120,3" fill="none" stroke="#00ADB5" strokeWidth="1.5" />
                </svg>
              </div>
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
            
            <div className="bg-gray-900/40 p-8 rounded-xl backdrop-blur-sm border border-gray-800/50">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-ayush-gray mb-2" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ayush-gray mb-2" htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ayush-gray mb-2" htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/50 transition-all"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="w-full bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/50"
                >
                  Send Message
                </button>
              </form>
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
