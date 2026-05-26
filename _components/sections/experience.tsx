const EXPERIENCE = [
  {
    role: "Ethical Hacking & Penetration Testing Intern",
    company: "CDAC, Noida",
    period: "July 2025 – August 2025",
    description:
      "Built a Python malware emulation tool processing 10,000+ threat indicators in isolated labs, cutting vulnerability mapping time by 40%. Secured key derivation pipelines using Fernet encryption and SHA-256 hashing, achieving 100% cryptographic integrity.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <ol className="timeline">
          {EXPERIENCE.map((item) => (
            <li key={item.role} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-body">
                <div className="timeline-meta">
                  <span className="timeline-role">{item.role}</span>
                  <span className="timeline-company">{item.company}</span>
                  <time className="timeline-period">{item.period}</time>
                </div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
