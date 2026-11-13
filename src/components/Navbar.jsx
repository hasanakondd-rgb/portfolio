import { useState } from "react";
import { navLinks, personalInfo } from "../data/portfolioData";

function Navbar({ activeSection, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={handleLinkClick}>
          {personalInfo.nickname}<span>.</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? "is-active" : ""}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            type="button"
            className="icon-button navbar__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
