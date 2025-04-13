
import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export function useCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverTarget, setHoverTarget] = useState<string | null>(null);

  useEffect(() => {
    // For smoother cursor, use more refined position updates
    let mouseX = 0;
    let mouseY = 0;
    let frameId: number | null = null;

    const updatePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!frameId) {
        frameId = requestAnimationFrame(updateCursorPosition);
      }
    };

    const updateCursorPosition = () => {
      setPosition({ x: mouseX, y: mouseY });
      frameId = null;
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Improved hover detection with target identification
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
        
        // Determine the type of element being hovered
        if (target.closest('.project-item')) {
          setHoverTarget('project');
        } else if (target.closest('a') || target.tagName === 'A') {
          setHoverTarget('link');
        } else if (target.closest('button') || target.tagName === 'BUTTON') {
          setHoverTarget('button');
        } else {
          setHoverTarget('interactive');
        }
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
        setHoverTarget(null);
      }
    };

    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
    };
  }, []);

  return { position, isHovering, isClicking, hoverTarget };
}
