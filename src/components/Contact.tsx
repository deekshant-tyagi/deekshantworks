
import React, { useRef, useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, Twitter, MessagesSquare, Mail, ArrowRight, ExternalLink, MapPin, PhoneCall } from 'lucide-react';

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

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-[#00ADB5]" />,
      title: "Email",
      value: "ayushsharma.code@outlook.com",
      link: "mailto:ayushsharma.code@outlook.com"
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-[#00ADB5]" />,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#00ADB5]" />,
      title: "Location",
      value: "Bengaluru, India",
      link: "https://maps.google.com/?q=Bengaluru,India"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-ayush-black">
      <div className={`container mx-auto px-4 md:px-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">Get in <span className="zigzag-underline">touch</span></h2>
            <p className="text-ayush-gray text-lg max-w-2xl mx-auto">
              Interested in working with me or have a project in mind? Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined} 
                rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 flex flex-col items-center transition-all hover:bg-gray-800/50 hover:border-ayush-teal/30 cursor-hover"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-ayush-black/60 rounded-full mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{method.title}</h3>
                <p className="text-ayush-gray text-center">{method.value}</p>
                <div className="mt-3 text-ayush-teal flex items-center text-sm">
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </div>
              </a>
            ))}
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30">
            <h3 className="text-xl mb-6 flex items-center">
              <span className="text-[#00ADB5] mr-2">Follow me on social media</span>
              <ArrowRight className="w-4 h-4 text-[#00ADB5]" />
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="cursor-hover bg-gray-800/80 p-4 rounded-xl hover:bg-[#00ADB5]/20 transition-all duration-300 flex flex-col items-center">
                <Github className="w-8 h-8 mb-2 hover:text-[#00ADB5] transition-colors" />
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-hover bg-gray-800/80 p-4 rounded-xl hover:bg-[#00ADB5]/20 transition-all duration-300 flex flex-col items-center">
                <Linkedin className="w-8 h-8 mb-2 hover:text-[#00ADB5] transition-colors" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-hover bg-gray-800/80 p-4 rounded-xl hover:bg-[#00ADB5]/20 transition-all duration-300 flex flex-col items-center">
                <Instagram className="w-8 h-8 mb-2 hover:text-[#00ADB5] transition-colors" />
                <span className="text-sm">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-hover bg-gray-800/80 p-4 rounded-xl hover:bg-[#00ADB5]/20 transition-all duration-300 flex flex-col items-center">
                <Twitter className="w-8 h-8 mb-2 hover:text-[#00ADB5] transition-colors" />
                <span className="text-sm">Twitter</span>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="cursor-hover bg-gray-800/80 p-4 rounded-xl hover:bg-[#00ADB5]/20 transition-all duration-300 flex flex-col items-center">
                <MessagesSquare className="w-8 h-8 mb-2 hover:text-[#00ADB5] transition-colors" />
                <span className="text-sm">Discord</span>
              </a>
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
