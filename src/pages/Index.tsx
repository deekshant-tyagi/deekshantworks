
import React, { useState, useEffect } from 'react';
import Cursor from '@/components/Cursor';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ToolsSection from '@/components/ToolsSection';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoadingComplete = () => {
    setContentVisible(true);
    // Set to 0.8 seconds for more catchy loading experience
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    // Preload important images
    const preloadImages = () => {
      const imageUrls = [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1634942537034-a3dffedcd539?q=80&w=2000&auto=format&fit=crop'
      ];

      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages();
    
    // Set loading timing to 0.8 seconds
    setTimeout(handleLoadingComplete, 800);
  }, []);

  console.log("Rendering Index component - All sections should be visible");

  return (
    <div className="min-h-screen bg-ayush-black text-ayush-white">
      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <div className={`transition-opacity duration-500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <ToolsSection />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
