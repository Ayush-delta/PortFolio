"use client";

import React from "react";
import Magnetic from "@/_components/magnetic-hover";

const PROJECTS = [
  {
    title: "NyayaSetuAI",
    category: "LegalTech • AI RAG System",
    description:
      "Judicial Intelligence & Compliance Platform that converts unstructured court judgments into structured compliance workflows and department-wise action plans. Features a secure RAG pipeline for semantic retrieval and directive extraction from scanned/digital PDFs.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Llama 3", "Supabase pgvector", "PyMuPDF", "Tesseract OCR", "JWT", "RBAC"],
    live: "https://nyaya-setu-ai.vercel.app/",
    github: "https://github.com/Ayush-delta/NyayaSetuAI",
    cover: "/projects/nyayasetu.png"
  },
  {
    title: "Sniply",
    category: "Security • Analytics Pipeline",
    description:
      "Secure Link Management Platform with custom short codes, branded CTA overlays, auto-generated QR codes, and a geo/device analytics pipeline. Achieves sub-10ms redirects under high concurrency via integrated Redis caching.",
    stack: ["Next.js 16", "Express.js", "PostgreSQL", "Redis", "JWT", "Vercel", "Render"],
    live: "https://sniply-mu.vercel.app/",
    github: "https://github.com/Ayush-delta/snip.ly",
    cover: "/projects/sniply.png"
  },
  {
    title: "PayWatch",
    category: "Serverless SaaS • Event-Driven",
    description:
      "Secure Subscription Monitoring Platform featuring subscription automation using event-driven serverless workflows via Upstash. Includes integrated WAF, IP-based threat detection, distributed rate limiting, and MongoDB aggregation pipelines for real-time analytics under high concurrency.",
    stack: ["Node.js", "MongoDB", "Upstash", "WAF", "Rate Limiting", "Docker"],
    live: "https://paywatch-backend.vercel.app/",
    github: "https://github.com/Ayush-delta/Paywatch-backend",
    cover: "/projects/paywatch.png"
  },
  {
    title: "CineMetrics",
    category: "Entertainment • Client Application",
    description:
      "Next-generation movie discovery platform powered by the TMDB API. Integrates debounced searches with AbortController, advanced filters, dynamic detail pages with cast carousels, embedded trailers, and custom skeleton states.",
    stack: ["React 19", "Vite", "React Router v6", "Tailwind CSS v4", "TMDB API"],
    live: "https://cinemetrics-r5gp-ayushs-projects-3f2f45db.vercel.app/",
    github: "https://github.com/Ayush-delta/cinemetrics",
    cover: "/projects/cinemetrics.png"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects section" style={{ position: "relative", zIndex: 10 }}>
      {/* Background Radial Glow */}
      <div 
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(232, 255, 107, 0.015) 0%, rgba(0, 0, 0, 0) 70%)",
          pointerEvents: "none",
          zIndex: -1
        }}
      />

      <div className="container">
        <h2 className="section-title">Selected Works ({PROJECTS.length})</h2>
        
        <div className="projects-container">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.title} 
              className="project-row"
              style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
            >
              {/* Left Column — Project Screenshot Cover */}
              <div className="project-cover-container">
                {/* Subtle glassmorphic grid background lines */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  opacity: 0.4
                }} />
                
                {/* Image element with responsive zoom and glassmorphic frame */}
                <img 
                  src={project.cover} 
                  alt={project.title} 
                  className="project-cover-img"
                />
              </div>

              {/* Right Column — Info Card */}
              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h3 className="project-heading">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-list">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.live && (
                    <Magnetic>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn-link project-btn-link--primary"
                      >
                        Live View ↗
                      </a>
                    </Magnetic>
                  )}
                  
                  <Magnetic>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-link"
                    >
                      Source Code ↗
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
