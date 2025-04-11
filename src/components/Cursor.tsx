
import React, { useRef, useEffect } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLDivElement>(null);
  const { position, isHovering, isClicking } = useCursor();
  const isMobile = useIsMobile();

  useEffect(() => {
    const smoothMove = (element: HTMLElement | null, x: number, y: number, lagFactor: number) => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const targetX = x;
      const targetY = y;
      
      const dx = targetX - (rect.left + rect.width / 2);
      const dy = targetY - (rect.top + rect.height / 2);
      
      const newX = (rect.left + rect.width / 2) + dx / lagFactor;
      const newY = (rect.top + rect.height / 2) + dy / lagFactor;
      
      element.style.transform = `translate(${newX}px, ${newY}px)`;
    };

    let animationFrameId: number;
    
    const animateCursor = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      }
      
      if (outlineRef.current) {
        smoothMove(outlineRef.current, position.x, position.y, 5);
      }
      
      if (magneticRef.current) {
        smoothMove(magneticRef.current, position.x, position.y, 8);
      }
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    
    animationFrameId = requestAnimationFrame(animateCursor);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  if (isMobile) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`cursor-dot ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      <div 
        ref={outlineRef} 
        className={`cursor-outline ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      <div 
        ref={magneticRef}
        className="cursor-magnetic"
      />
    </>
  );
};

export default Cursor;
