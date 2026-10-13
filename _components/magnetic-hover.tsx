"use client";

import React from "react";
import gsap from "gsap";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number; // scale factor of the pull (0.1 to 1.0)
}

export default function Magnetic({ children, strength = 0.35 }: MagneticProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions of the bounding box
    const { left, top, width, height } = container.getBoundingClientRect();
    
    // Position of the cursor relative to the center of the bounding box
    const mouseX = e.clientX - (left + width / 2);
    const mouseY = e.clientY - (top + height / 2);

    // Apply the scaling factor strength
    const x = mouseX * strength;
    const y = mouseY * strength;

    // Smooth movement with GSAP
    gsap.to(container, {
      x: x,
      y: y,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;

    // Snap back with dynamic springy elastic ease as requested!
    gsap.to(container, {
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 0.7,
      overwrite: "auto",
    });
  };

  const child = React.Children.only(children);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="magnetic-wrapper"
      style={{ display: "inline-block" }}
    >
      {React.cloneElement(child as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
        className: `${(child.props as React.HTMLAttributes<HTMLElement>).className || ""} magnetic-target`.trim(),
      })}
    </div>
  );
}

