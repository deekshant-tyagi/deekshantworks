
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prevProgress => {
          const nextProgress = prevProgress + 2; // Slower progress increase for 0.8s total
          return nextProgress > 100 ? 100 : nextProgress;
        });
      } else {
        onLoadingComplete();
      }
    }, 16); // Approx 0.8 seconds total (50 steps * 16ms = 800ms)

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-ayush-black flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-md px-4 flex flex-col items-center">
        <h1 className="text-3xl font-light mb-8 animate-pulse">
          <span className="text-[#00ADB5]">AYUSH</span>WORKS
        </h1>
        <div className="w-full h-[2px] bg-ayush-gray/30 relative mb-4 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00ADB5]/70 to-[#00ADB5] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div 
            className="absolute top-0 left-0 h-full w-20 bg-white/20 blur-sm"
            style={{ 
              transform: `translateX(${progress}%)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </div>
        <div className="w-full flex justify-between text-sm">
          <span className="text-ayush-gray tracking-wider">LOADING</span>
          <span className="text-[#00ADB5]">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
