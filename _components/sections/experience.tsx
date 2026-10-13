import { ReactNode } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: ReactNode[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Product Development Intern",
    company: "DigiHut Global",
    period: "June 2026 – Present",
    description: [
      <span key="1">
        Built <strong>SecureDIGI</strong>, a cross-platform <strong>SIEM</strong> platform supporting <strong>Windows</strong> and <strong>Linux</strong> security log ingestion from <strong>10+ native log sources</strong>, with event normalization and secure data transmission.
      </span>,
      <span key="2">
        Designed a security event processing pipeline for <strong>log parsing</strong>, <strong>normalization</strong>, and <strong>severity classification</strong> to support centralized security monitoring and threat analysis.
      </span>,
      <span key="3">
        Integrated <strong>Gemini 2.5</strong> for AI-assisted security event summarization, threat assessment, and remediation recommendations for <strong>SOC analysts</strong>.
      </span>,
      <span key="4">
        Developed an <strong>Active Directory Identity Intelligence</strong> ingestion service using <strong>Python</strong> and <strong>LDAP/LDAPS</strong> to synchronize users, groups, organizational units, devices, and group memberships for identity inventory and privileged access risk analysis.
      </span>,
    ],
  },
  {
    role: "Ethical Hacking & Penetration Testing Intern",
    company: "CDAC, Noida",
    period: "July 2025 – August 2025",
    description: [
      <span key="1">
        Built a Python malware emulation tool processing 10,000+ threat indicators in isolated labs, cutting vulnerability mapping time by 40%.
      </span>,
      <span key="2">
        Secured key derivation pipelines using Fernet encryption and SHA-256 hashing, achieving 100% cryptographic integrity.
      </span>,
    ],
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
                <ul className="timeline-points">
                  {item.description.map((point, index) => (
                    <li key={index} className="timeline-point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
