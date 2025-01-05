import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faGit, 
  faGithub, 
  faFigma, 
  faLaravel, 
  faReact, 
  faPython 
} from "@fortawesome/free-brands-svg-icons"; // Brand icons

import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // Solid icon for SQL
import './skills.css';  // Importing the CSS for the skills section

const Skills = () => {
  const skills = [
    { name: "HTML", icon: faHtml5, color: "#E44D26" },
    { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "React", icon: faReact, color: "#61DBFB" },
    { name: "Laravel", icon: faLaravel, color: "#FF2D20" },
    { name: "Figma", icon: faFigma, color: "#F24E1E" },
    { name: "SQL", icon: faDatabase, color: "#4479A1" },
    { name: "Git", icon: faGit, color: "#F1502F" },
    { name: "GitHub", icon: faGithub, color: "#181717" },
    { name: "Python", icon: faPython, color: "#3776AB" },
  ];

  return (
    <div className="skills-container">
      <h2>Fähigkeiten</h2>
      <div className="skills-cards">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color, fontSize: '40px' }} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
