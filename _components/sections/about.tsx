export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Full Stack Developer building secure, production-ready web apps with Node.js, Next.js, PostgreSQL, MongoDB, and Redis REST APIs, JWT auth, RBAC, real-time dashboards, prompt engineering, and agentic workflows.
            </p>
            <p>
              Experienced in RAG pipelines, GenAI integration, and shipping full-stack SaaS products. Active open-source contributor seeking a team that values clean architecture and scalable systems.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">BIT Sindri</span>
              <span className="stat-label">Dhanbad (2023 – Ongoing)</span>
            </div>
            <div className="stat">
              <span className="stat-number">B.Tech CSE</span>
              <span className="stat-label">Computer Science & Engineering</span>
            </div>
            <div className="stat">
              <span className="stat-number">6.88 / 10</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
