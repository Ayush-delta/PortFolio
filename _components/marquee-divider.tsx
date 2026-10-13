"use client";

import React from "react";

export default function MarqueeDivider() {
  const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", 
    "Node.js", "Express", "REST APIs", "PostgreSQL", "Redis", 
    "Llama API", "Multi-Agent Systems", "FastAPI", "Python", "AWS", "Docker", "System Design"
  ];

  // Repeat twice for seamless infinite scrolling loop
  const displaySkills = [...skills, ...skills];

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .skills-marquee-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          width: 100vw;
          left: 50%;
          transform: translateX(-50%);
          padding: 2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(8px);
          user-select: none;
        }

        .skills-marquee-track {
          display: inline-flex;
          gap: 4rem;
          animation: marquee-scroll 35s linear infinite;
        }

        .skills-marquee-item {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 700;
          color: rgba(255, 255, 255, 0.25);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
        }

        .skills-marquee-item:hover {
          color: var(--accent);
        }
      `}</style>

      <div className="skills-marquee-container">
        <div className="skills-marquee-track">
          {displaySkills.map((skill, index) => (
            <span key={index} className="skills-marquee-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
