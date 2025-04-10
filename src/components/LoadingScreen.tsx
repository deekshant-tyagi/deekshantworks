
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
          const nextProgress = prevProgress + 4; // Increased from 1 to 4 for faster loading
          return nextProgress > 100 ? 100 : nextProgress;
        });
      } else {
        onLoadingComplete();
      }
    }, 12); // Decreased from 30 to 12 for faster loading (approx 0.5-1 second)

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-ayush-black flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-md px-4 flex flex-col items-center">
        <h1 className="text-3xl font-light mb-8 animate-pulse">AYUSHWORKS</h1>
        <div className="w-full h-[1px] bg-ayush-gray/30 relative mb-2">
          <div 
            className="absolute top-0 left-0 h-full bg-ayush-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="w-full flex justify-between text-sm text-ayush-gray">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
