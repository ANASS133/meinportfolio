import React, { useEffect } from 'react';
import './Project.css'; // Importiere die CSS-Datei

const Projects = () => {
    useEffect(() => {
      const element = document.querySelector('.projects-heading');
      
      const updateTextContent = () => {
        if (window.innerWidth < 473) {
          element.textContent = 'PROJEKTE';
        } else {
          element.textContent = 'Einige meiner Projekte';
        }
      };
  
      // Run initially and on window resize
      updateTextContent();
      window.addEventListener('resize', updateTextContent);
  
      // Cleanup the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', updateTextContent);
      };
    }, []);
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
    <div id='projects'>
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
    </div></div>
  );
};

export default Projects;
