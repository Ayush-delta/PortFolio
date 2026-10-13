const SKILLS = {
  "Languages":        ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "Bash"],
  "Frontend":         ["React.js", "Next.js 16", "Tailwind CSS"],
  "Backend":          ["Node.js", "Express.js", "FastAPI"],
  "Databases":        ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"],
  "Security":         ["JWT", "RBAC", "WAF Design", "Rate Limiting", "Cryptography"],
  "DevOps & Tools":   ["Docker", "Git", "Linux", "Vercel", "Render", "GitHub Actions"],
  "Testing":          ["Jest", "Supertest", "Postman", "Zod"],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category}</h3>
              <ul className="skill-list">
                {items.map((skill) => (
                  <li key={skill} className="skill-tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
