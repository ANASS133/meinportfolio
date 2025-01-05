import React from 'react';

const Header = () => (
  <>
    <section>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="menuItems">
          <li>
            <a href="#" data-item="Startseite">
              Startseite
            </a>
          </li>
          <li>
            <a href="#" data-item="Über uns">
              Über uns
            </a>
          </li>
          <li>
            <a href="#" data-item="Projekte">
              Projekte
            </a>
          </li>
          <li>
            <a href="#" data-item="Blog">
              Blog
            </a>
          </li>
          <li>
            <a href="#" data-item="Kontakt">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </>
);

export default Header;
