import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <nav>
        <div className="container">
          <a href="#first">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div></a>
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src="menu1.png" alt="Menu Icon" className="menu-icon" />
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#about" data-item="Über mich">
              Über mich
              </a>
            </li>
            <li>
              <a href="#skills" data-item="Fähigkeiten">
              Fähigkeiten              </a>
            </li>
            <li>
              <a href="#resume" data-item="Lebenslauf">
                Lebenslauf              </a>
            </li>
            <li>
              <a href="#projects" data-item="Projekte">
              Projekte
              </a>
            </li>
            <li>
              <a href="#form" data-item="Kontakt">
              Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
