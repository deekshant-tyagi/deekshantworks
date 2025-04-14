
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
          const nextProgress = prevProgress + 1.5; // Decreased increment for 0.7 second total
          return nextProgress > 100 ? 100 : nextProgress;
        });
      } else {
        onLoadingComplete();
      }
    }, 10); // Keep at 10ms for smooth animation (approx 0.7 seconds total with 1.5 increment)

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-ayush-black flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-md px-4 flex flex-col items-center">
        <h1 className="text-3xl font-light mb-8 animate-pulse">AYUSHWORKS</h1>
        <div className="w-full h-[2px] bg-ayush-gray/30 relative mb-3 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-ayush-teal via-ayush-white to-ayush-teal transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="w-full flex justify-between text-sm text-ayush-gray">
          <span className="animate-pulse">LOADING</span>
          <span>{progress.toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
