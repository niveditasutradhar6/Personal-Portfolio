import React from 'react';

import uiDesignIcon from '../CSS - My Site Images/UxDESIGN.png';
import responsiveDesignIcon from '../CSS - My Site Images/RES.jpg';
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>My Skills</h2>
   
      
      <div className="skill-row">
        <img src={uiDesignIcon} className="skill-icon1" alt="Design & Development Icon" />
        <h4>Front-End Web Development</h4>
        <p>Utilize clean, modern design principles to create visually appealing and user-friendly interfaces.</p>
      </div>
      
      
      <div className="skill-row">
        <img src={responsiveDesignIcon} className="skill-icon4" alt="Responsive Design Icon" />
        <h4>Machine Learning</h4>
        <p>Training and creating machine learning models.</p>
      </div>
    
    <div className="skill-row">
    <img src={responsiveDesignIcon} className="skill-icon4" alt="Responsive Design Icon" />
    <h4>Data Analytics</h4>
    <p>Proficient in data wrangling, statistical analysis, and data visualization techniques. Skilled in using Python for data manipulation and analysis. Proficient in SQL for data querying and database management.</p>
  </div>
</div>
);
  
}


export default Skills;
