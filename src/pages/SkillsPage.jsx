// File: SkillsPage.jsx

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

import Bootstrap from "../assets/frontend/Bootstrap.png"
import css from "../assets/frontend/css.png"
import html from "../assets/frontend/html.png"
import jquery from "../assets/frontend/jquery.png"
import React from "../assets/frontend/React.png"
import Tailwindcss from "../assets/frontend/Tailwindcss.png"


import asp from "../assets/backend/asp.png"
import django from "../assets/backend/django.png"
import nodejs from "../assets/backend/nodejs.png"

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
          {/* Item 1: Bootstrap */}
          <div className="skill_item">
            <img src={Bootstrap} alt="Bootstrap Logo" />
            <span>Bootstrap</span>
          </div>

          {/* Item 2: CSS */}
          <div className="skill_item">
            <img src={css} alt="CSS Logo" />
            <span>CSS3</span>
          </div>

          {/* Item 3: HTML */}
          <div className="skill_item">
            <img src={html} alt="HTML Logo" />
            <span>HTML5</span>
          </div>

          {/* Item 4: JQuery */}
          <div className="skill_item">
            <img src={jquery} alt="jQuery Logo" />
            <span>jQuery</span>
          </div>

          {/* Item 5: React */}
          <div className="skill_item">
            <img src={React} alt="React Logo" />
            <span>React</span>
          </div>

          {/* Item 6: Tailwind CSS */}
          <div className="skill_item">
            <img src={Tailwindcss} alt="Tailwind CSS Logo" />
            <span>Tailwind CSS</span>
          </div>
        </div>
    ),
},
    {
      id: 'tab-design',
      title: 'Backend',
      content: (
        <div className="skill-icons">
          <div className="skill_item"><img src={asp} alt="JavaScript" /><span>asp dot net</span></div>
          <div className="skill_item"><img src={django} alt="TypeScript" /><span>Django</span></div>
          <div className="skill_item"><img src={nodejs} alt="Python" /><span>Node Js</span></div>
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
