
import React, { useRef, useEffect } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { position, isHovering, isClicking, isVisible } = useCursor();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    // Function to update cursor position with smooth animation
    const updatePosition = () => {
      if (!cursorRef.current) return;
      
      // Apply the transform to position the cursor
      cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    };
    
    // Use requestAnimationFrame for smooth animation
    const animationId = requestAnimationFrame(updatePosition);
    
    return () => cancelAnimationFrame(animationId);
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <div 
      ref={cursorRef} 
      className={`cursor-container ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="cursor-outline"></div>
      <div className="cursor-dot"></div>
    </div>
  );
};

export default Cursor;
