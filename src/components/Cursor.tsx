
import React, { useRef, useEffect, useState } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLDivElement>(null);
  const hoverImageRef = useRef<HTMLDivElement>(null);
  const { position, isHovering, isClicking, hoverTarget } = useCursor();
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    // Function to check if user has scrolled enough to show cursor
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // For ultra-smooth cursor, use refined animation technique
    const smoothValues = {
      dot: { x: position.x, y: position.y },
      outline: { x: position.x, y: position.y },
      magnetic: { x: position.x, y: position.y },
      hoverImage: { x: position.x, y: position.y }
    };

    let lastTimestamp = 0;
    const fps = 60;
    const interval = 1000 / fps;

    const animateCursor = (timestamp: number) => {
      if (!dotRef.current || !outlineRef.current || !magneticRef.current || !hoverImageRef.current) {
        requestAnimationFrame(animateCursor);
        return;
      }
      
      // Throttle updates for smoother performance
      if (timestamp - lastTimestamp < interval) {
        requestAnimationFrame(animateCursor);
        return;
      }
      
      lastTimestamp = timestamp;
      
      // Get current position
      const targetX = position.x;
      const targetY = position.y;
      
      // Update dot position with minimal lag (very responsive)
      smoothValues.dot.x += (targetX - smoothValues.dot.x) * 0.6;
      smoothValues.dot.y += (targetY - smoothValues.dot.y) * 0.6;
      
      // Update outline with more lag for smoother feel
      smoothValues.outline.x += (targetX - smoothValues.outline.x) * 0.2;
      smoothValues.outline.y += (targetY - smoothValues.outline.y) * 0.2;
      
      // Update magnetic with even more lag
      smoothValues.magnetic.x += (targetX - smoothValues.magnetic.x) * 0.1;
      smoothValues.magnetic.y += (targetY - smoothValues.magnetic.y) * 0.1;
      
      // Update hover image to follow cursor precisely
      smoothValues.hoverImage.x += (targetX - smoothValues.hoverImage.x) * 0.3;
      smoothValues.hoverImage.y += (targetY - smoothValues.hoverImage.y) * 0.3;
      
      // Apply the new positions with transform3d for hardware acceleration
      dotRef.current.style.transform = `translate3d(${smoothValues.dot.x}px, ${smoothValues.dot.y}px, 0)`;
      outlineRef.current.style.transform = `translate3d(${smoothValues.outline.x}px, ${smoothValues.outline.y}px, 0)`;
      magneticRef.current.style.transform = `translate3d(${smoothValues.magnetic.x}px, ${smoothValues.magnetic.y}px, 0)`;
      hoverImageRef.current.style.transform = `translate3d(${smoothValues.hoverImage.x}px, ${smoothValues.hoverImage.y}px, 0)`;
      
      // Request next frame
      requestAnimationFrame(animateCursor);
    };
    
    const requestId = requestAnimationFrame(animateCursor);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, [position, isMobile]);

  // Determine which hover image to show based on the target type
  const getHoverImageClass = () => {
    if (!hoverTarget) return '';
    
    switch(hoverTarget) {
      case 'project':
        return 'hover-image-project';
      case 'link':
        return 'hover-image-link';
      case 'button':
        return 'hover-image-button';
      default:
        return 'hover-image-default';
    }
  };

  if (isMobile) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`cursor-dot ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'cursor-visible' : ''}`}
      />
      <div 
        ref={outlineRef} 
        className={`cursor-outline ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'cursor-visible' : ''}`}
      />
      <div 
        ref={magneticRef}
        className={`cursor-magnetic ${isVisible ? 'cursor-visible' : ''}`}
      />
      <div 
        ref={hoverImageRef}
        className={`cursor-hover-image ${isHovering ? 'active' : ''} ${getHoverImageClass()} ${isVisible ? 'cursor-visible' : ''}`}
      />
    </>
  );
};

export default Cursor;
