
import React, { useRef, useEffect, useState } from 'react';
import { Mail, ArrowRight, ExternalLink } from 'lucide-react';

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
          <h2 className="text-4xl font-light mb-12 text-center">Get in <span className="curly-underline">touch</span></h2>
          
          <div className="bg-gradient-to-br from-[#00ADB5]/5 to-[#00ADB5]/10 backdrop-blur-sm border border-[#00ADB5]/10 p-8 md:p-10 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column */}
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-[#00ADB5]/10 p-3 mb-2">
                  <Mail className="w-6 h-6 text-[#00ADB5]" />
                </div>
                <h3 className="text-2xl font-medium">Let's work together</h3>
                <p className="text-ayush-gray">Have a project in mind? I'd love to hear about it. Let's discuss how we can work together to bring your ideas to life.</p>
                
                <a href="mailto:ayushsharma.code@outlook.com" 
                  className="inline-flex items-center bg-[#00ADB5] text-white px-5 py-2.5 rounded-full mt-4 hover:bg-[#00ADB5]/90 transition-colors cursor-hover group">
                  <span>Email me</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              {/* Right column */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium border-b border-white/10 pb-2 mb-4">Connect elsewhere</h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: "LinkedIn", url: "https://linkedin.com", desc: "Career updates & networking" },
                    { name: "GitHub", url: "https://github.com", desc: "Code & projects" },
                    { name: "Twitter", url: "https://twitter.com", desc: "Thoughts & news" },
                    { name: "Instagram", url: "https://instagram.com", desc: "Visual inspirations" }
                  ].map((platform, index) => (
                    <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" 
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-[#00ADB5]/10 transition-colors border border-white/5 hover:border-[#00ADB5]/20 group">
                      <div>
                        <p className="font-medium">{platform.name}</p>
                        <p className="text-xs text-ayush-gray">{platform.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-ayush-gray group-hover:text-[#00ADB5] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-ayush-gray inline-flex items-center">
              <span className="w-6 h-px bg-ayush-gray/30 mr-2"></span>
              Available for freelance projects starting June 2025
              <span className="w-6 h-px bg-ayush-gray/30 ml-2"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
