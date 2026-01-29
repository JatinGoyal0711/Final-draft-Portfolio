import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hideOnIframe, setHideOnIframe] = useState(false);
  const interactiveElementsRef = useRef([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over iframe or video container
      const target = e.target;
      const isOverIframe = target.tagName === 'IFRAME' || 
                          target.closest('.youtube-iframe-wrapper') || 
                          target.closest('.showreel-video');
      setHideOnIframe(isOverIframe);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements, excluding video containers
    const interactiveElements = document.querySelectorAll(
      'a:not(.youtube-thumbnail-container a), button, .project-card:not(:has(.youtube-iframe-wrapper)), .capability-item, [role="button"], .youtube-thumbnail-container'
    );

    interactiveElementsRef.current = Array.from(interactiveElements);

    window.addEventListener('mousemove', updatePosition);
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElementsRef.current.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isVisible]);

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isVisible && !hideOnIframe ? 'visible' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-dot ${isVisible && !hideOnIframe ? 'visible' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;