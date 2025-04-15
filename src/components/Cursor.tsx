
import React, { useRef, useEffect } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const { position, isHovering, isClicking, isVisible } = useCursor();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    // Function to update dot and outline positions with smooth animation
    const updatePositions = () => {
      if (!dotRef.current || !outlineRef.current) return;
      
      // Update dot position immediately (follows cursor exactly)
      dotRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      
      // Get current outline position
      const outlineRect = outlineRef.current.getBoundingClientRect();
      const currentX = outlineRect.left + outlineRect.width / 2;
      const currentY = outlineRect.top + outlineRect.height / 2;
      
      // Calculate the distance to move (with smooth following effect)
      const dx = position.x - currentX;
      const dy = position.y - currentY;
      
      // Apply smooth movement to outline (follows dot with delay)
      outlineRef.current.style.transform = `translate(${currentX + dx * 0.15}px, ${currentY + dy * 0.15}px)`;
    };
    
    // Use requestAnimationFrame for smooth animation
    const animate = () => {
      updatePositions();
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div 
        ref={outlineRef} 
        className={`cursor-outline ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div 
        ref={dotRef} 
        className={`cursor-dot ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
};

export default Cursor;
