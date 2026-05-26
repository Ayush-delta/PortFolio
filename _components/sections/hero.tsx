import StatusCard from "@/_components/sections/status-card";
import Magnetic from "@/_components/magnetic-hover";

export default function HeroSection() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-container">

        {/* Left — giant name */}
        <div className="hero-left">
          <h1 className="hero-name">
            <span className="hero-name-bright">AYUSH</span>
            <span className="hero-name-dim">RATNA</span>
          </h1>
          <p className="hero-tagline">
            <strong>Engineer</strong> who builds end-to-end — AI agents,
            RAG pipelines, secure APIs, and production infrastructure
            that actually scales.
          </p>
          <div className="hero-cta" style={{ display: "flex", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
            <Magnetic>
              <a href="#projects" className="btn-primary">View my work</a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-secondary">Get in touch</a>
            </Magnetic>
          </div>
        </div>

        {/* Right — status card floats here */}
        <div className="hero-right">
          <StatusCard />
        </div>

      </div>
    </section>
  );
}
