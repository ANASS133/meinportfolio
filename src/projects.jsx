import React from 'react';
import './Project.css'; // Importiere die CSS-Datei

// Erstelle eine funktionale Komponente, um Projekte anzuzeigen
const Projects = () => {
  // Daten für die Projekte
  const projectData = [
    {
      id: 1,
      title: 'Immomarkt',
      description: 'Eine Plattform zum Kaufen und Mieten von Häusern, mit einer benutzerfreundlichen Oberfläche.',
      technologies: ['React', 'CSS'],
      link: 'https://immogit.vercel.app',
      image: 'immoo.png',
    },
    {
      id: 2,
      title: 'Ghassla',
      description: 'Eine Anwendung zur Buchung von Autowaschdiensten mit Leichtigkeit.',
      technologies: ['React', 'CSS'],
      link: 'https://ghassla.vercel.app',
      image: 'ghassla.png',
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Einige meiner Projekte</h2>
      <div className="projects-list">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image" 
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies"><strong>Technologien:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Projekt ansehen
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
