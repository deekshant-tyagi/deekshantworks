
import React, { useState, useEffect } from 'react';
import Cursor from '@/components/Cursor';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ToolsSection from '@/components/ToolsSection';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoadingComplete = () => {
    setContentVisible(true);
    // Reduced loading animation time to 0.3 second for faster loading
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    // Preload important images
    const preloadImages = () => {
      const imageUrls = [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1634942537034-a3dffedcd539?q=80&w=2000&auto=format&fit=crop',
        '/lovable-uploads/1b938963-f509-4073-99b1-2edd19749366.png',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=180&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=180&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=180&auto=format&fit=crop'
      ];

      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages();
    
    // Trigger loading complete quickly
    setTimeout(handleLoadingComplete, 300);
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
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
