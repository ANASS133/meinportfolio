import React from 'react';
import './resume.css'; // Achten Sie darauf, Ihre Stile zu importieren

const Resume = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>Lebenslauf</h1>
      </header>

      <section className="resume-section">
        <div className="education">
          <h2>Ausbildung</h2>
          <div className="education-item">
            <h3>Licence Excellence in Digitalrecht und Sicherheit</h3>
            <p>2024 - Heute</p>
            <p>Universität Hassan 1 in Settat</p>
          </div>
          <div className="education-item">
            <h3>Digitale Entwicklung mit Schwerpunkt Web Full Stack Entwicklung</h3>
            <p>2022 - 2024</p>
            <p>OFPPT</p>
          </div>
          <div className="education-item">
            <h3>Abitur</h3>
            <p>2022</p>
            <p>AL Amal High School</p>
          </div>
        </div>

        <div className="experience">
          <h2>Berufserfahrung</h2>
          <div className="experience-item">
            <h3>Praktikant als Webentwickler</h3>
            <p>2023 - 2024</p>
            <p>Lemacom</p>
            <ul>
              <li>Entwarf und entwickelte responsive Webseiten für Kunden unter Verwendung von Front-End-Technologien wie HTML, CSS, JavaScript und ReactJS.</li>
              <li>Integrierte Drittanbieter-APIs und -Dienste zur Verbesserung der Funktionalität von Webseiten, wie z.B. Zahlungs-Gateways oder die Integration von sozialen Medien.</li>
              <li>Verwendete Versionskontrollsysteme (z.B. Git) für eine effiziente Zusammenarbeit und Codeverwaltung im Team.</li>
              <li>Führte Tests und Debugging auf verschiedenen Browsern und Geräten durch, um eine optimale Leistung und Kompatibilität sicherzustellen.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
