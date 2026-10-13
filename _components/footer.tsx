import Link from "next/link";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Ayush-delta" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayush-ratna27/" },
  { label: "Twitter", href: "https://x.com/ayush_code23" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <p className="footer-copy">
          © {year} Ayush Ratna. Built with Next.js
        </p>
        <div className="footer-socials">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
