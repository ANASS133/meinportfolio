import React, { useEffect, useContext } from 'react';
import './Project.css'; // Importiere die CSS-Datei
import { LanguageContext } from './LanguageContext';
import translations from './translations';

const Projects = () => {
    const { language } = useContext(LanguageContext);
    useEffect(() => {
      const element = document.querySelector('.projects-heading');
      
      const updateTextContent = () => {
        if (window.innerWidth < 473) {
          element.textContent = language === 'de' ? 'PROJEKTE' : 'PROJECTS';
        } else {
          element.textContent = translations.projects.heading[language];
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
      title: translations.projects.title1[language],
      description: translations.projects.description1[language],
      technologies: ['React', 'CSS'],
      link: 'https://immogit.vercel.app',
      image: 'immoo.png',
    },
    {
      id: 2,
      title: translations.projects.title2[language],
      description: translations.projects.description2[language],
      technologies: ['React', 'CSS'],
      link: 'https://ghassla.vercel.app',
      image: 'ghassla.png',
    },
  ];

  return (
    <div id='projects'>
    <div className="projects-container">
      <h2 className="projects-heading">{translations.projects.heading[language]}</h2>
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
              {translations.projects.viewProject[language]}
            </a>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Projects;
