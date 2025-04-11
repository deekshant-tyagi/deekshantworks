
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
    if (isMobile) return;

    const smoothMove = (element: HTMLElement | null, x: number, y: number, lagFactor: number) => {
      if (!element) return;
      
      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    const animateCursor = () => {
      if (dotRef.current) {
        smoothMove(dotRef.current, position.x, position.y, 1);
      }
      
      if (outlineRef.current) {
        const rect = outlineRef.current.getBoundingClientRect();
        const targetX = position.x;
        const targetY = position.y;
        
        const dx = targetX - (rect.left + rect.width / 2);
        const dy = targetY - (rect.top + rect.height / 2);
        
        const newX = (rect.left + rect.width / 2) + dx / 5;
        const newY = (rect.top + rect.height / 2) + dy / 5;
        
        smoothMove(outlineRef.current, newX, newY, 5);
      }
      
      if (magneticRef.current) {
        const rect = magneticRef.current.getBoundingClientRect();
        const targetX = position.x;
        const targetY = position.y;
        
        const dx = targetX - (rect.left + rect.width / 2);
        const dy = targetY - (rect.top + rect.height / 2);
        
        const newX = (rect.left + rect.width / 2) + dx / 8;
        const newY = (rect.top + rect.height / 2) + dy / 8;
        
        smoothMove(magneticRef.current, newX, newY, 8);
      }
      
      requestAnimationFrame(animateCursor);
    };
    
    const requestId = requestAnimationFrame(animateCursor);
    
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [position, isMobile]);

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
