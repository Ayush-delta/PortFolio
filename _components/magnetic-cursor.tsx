"use client";

import React, { useEffect, useRef, useState } from "react";

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false);
      
      // Update solid dot instantly
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    // Interpolation loop for trailing ring
    let animationFrameId: number;
    const render = () => {
      const ease = 0.16; // Easing trail factor
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      animationFrameId = requestAnimationFrame(render);
    };

    // Detect hovers over buttons, links, and magnetic elements, as well as typography for the magnifying effect
    const addHoverEvents = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input[type='submit'], .magnetic-target, h1, h2, h3, h4, h5, p, span, strong, li, label, .logo"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    
    render();
    addHoverEvents();
    
    // Bind periodically for dynamically rendering content
    const intervalId = setInterval(addHoverEvents, 1000);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`magnetic-cursor-ring ${isHovered ? "active" : ""} ${isHidden ? "hidden" : ""}`}
      />
      <div
        ref={dotRef}
        className={`magnetic-cursor-dot ${isHovered ? "active" : ""} ${isHidden ? "hidden" : ""}`}
      />
    </>
  );
}
