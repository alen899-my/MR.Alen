// File: SkillsPage.jsx
import React from 'react';
import Tabs from './Tabs'; // import your Tabs component
import '../styles/SkillsPage.css';

// Import your skill images (place them in src/assets/skills/)
import C from "../assets/proglang/C.png"
import Cpp from "../assets/proglang/Cpp.png"
import Csharp from "../assets/proglang/Csharp.png"
import Php from "../assets/proglang/Php.png"
import js from "../assets/proglang/js.png"
import Python from "../assets/proglang/Python.png"
import Rpro from "../assets/proglang/Rpro.png"


const SkillsPage = () => {
  const skillTabs = [
    {
      id: 'tab-programming',
      title: 'Programming Languages',
      content: (
        <div className="skill-icons">
          <div className="skill_item"><img src={C} alt="JavaScript" /><span>C program</span></div>
          <div className="skill_item"><img src={Cpp} alt="TypeScript" /><span>C++</span></div>
          <div className="skill_item"><img src={Csharp} alt="Python" /><span>C#</span></div>
          <div className="skill_item"><img src={Php} alt="Java" /><span>PHP</span></div>
          <div className="skill_item"><img src={js} alt="SQL" /><span>Javascript</span></div>
          <div className="skill_item"><img src={Python} alt="SQL" /><span>Python</span></div>
          <div className="skill_item"><img src={Rpro} alt="SQL" /><span>Rpro</span></div>
        </div>
      ),
    },
    {
      id: 'tab-stack',
      title: 'Tech Stack',
      content: (
        <div className="skill-icons">
          
        </div>
      ),
    },
    {
      id: 'tab-design',
      title: 'Designing',
      content: (
        <div className="skill-icons">
          
        </div>
      ),
    },
    {
      id: 'tab-ai',
      title: 'AI & Machine Learning',
      content: (
        <div className="skill-icons">
          
        </div>
      ),
    },
    {
      id: 'tab-data',
      title: 'Data Analysis',
      content: (
        <div className="skill-icons">
         
        </div>
      ),
    },
    {
      id: 'tab-tools',
      title: 'Other Tools',
      content: (
        <div className="skill-icons">
         
        </div>
      ),
    },
  ];

  return (
    <div className="skills_container">
      <div className="full_tab">
        <h2 className="skills_title">My Skills</h2>
        <Tabs tabs={skillTabs} />
      </div>
    </div>
  );
};

export default SkillsPage;
