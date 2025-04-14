
import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export function useCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const updatePosition = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      // Make cursor visible as soon as mouse moves
      setIsVisible(true);
    };

    const render = () => {
      // Smooth interpolation for cursor position
      const easingFactor = 0.2; // Increased for smoother movement
      currentX += (targetX - currentX) * easingFactor;
      currentY += (targetY - currentY) * easingFactor;
      
      setPosition({ 
        x: currentX, 
        y: currentY 
      });
      
      rafId = requestAnimationFrame(render);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Improved hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverElements = [
        'A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'
      ];
      
      const isHoverable = 
        hoverElements.includes(target.tagName) || 
        target.classList.contains('cursor-hover') ||
        target.closest('.project-item') || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-hover');
      
      if (isHoverable) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverElements = [
        'A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'
      ];
      
      const isHoverable = 
        hoverElements.includes(target.tagName) || 
        target.classList.contains('cursor-hover') ||
        target.closest('.project-item') || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-hover');
      
      if (isHoverable) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    
    // Start animation immediately
    rafId = requestAnimationFrame(render);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { position, isHovering, isClicking, isVisible };
}
