import React, { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

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
              <a href="#about" data-item={translations.menu.about[language]}>
              {translations.menu.about[language]}
              </a>
            </li>
            <li>
              <a href="#skills" data-item={translations.menu.skills[language]}>
              {translations.menu.skills[language]}              </a>
            </li>
            <li>
              <a href="#resume" data-item={translations.menu.resume[language]}>
                {translations.menu.resume[language]}              </a>
            </li>
            <li>
              <a href="#projects" data-item={translations.menu.projects[language]}>
              {translations.menu.projects[language]}
              </a>
            </li>
            <li>
              <a href="#form" data-item={translations.menu.contact[language]}>
              {translations.menu.contact[language]}
              </a>
            </li>
          </ul>
          <button className="lang-toggle" onClick={toggleLanguage}>
            {language === 'de' ? 'EN' : 'DE'}
          </button>
        </div>
      </nav>
    </section>
  );
}
