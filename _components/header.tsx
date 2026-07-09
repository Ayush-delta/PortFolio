"use client";

import Link from "next/link";
import { useState } from "react";
import Magnetic from "@/_components/magnetic-hover";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner container">
        <Link href="/" className="logo">
          Ayush Ratna<span className="logo-dot">.</span>
        </Link>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Magnetic key={link.href} strength={0.25}>
              <Link
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </Magnetic>
          ))}
          <Magnetic strength={0.25}>
            <a
              href="https://drive.google.com/file/d/1VwyMb-NOnPVuqjQMyBs0O6sNSJOlYVvO/view?usp=sharing"
              className="btn-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </Magnetic>
        </nav>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`burger ${menuOpen ? "burger--open" : ""}`} />
        </button>
      </div>
    </header>
  );
}
