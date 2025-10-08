// File: SkillsPage.jsx

import Tabs from './Tabs'; // import your Tabs component
import '../styles/SkillsPage.css';

// =========================================================
// 1. REACT ICONS IMPORTS (for the new, advanced Data Science skills)
// =========================================================
// Fa: Font Awesome, Md: Material Design, Bs: Bootstrap Icons
import { FaBrain, FaRegChartBar, FaCloud,FaBlender } from 'react-icons/fa';
import { MdOutlinePrecisionManufacturing } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';

// =========================================================
// 2. IMAGE IMPORTS (for existing skills)
// =========================================================
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
import qu from "../assets/frontend/qu.png"
import React from "../assets/frontend/React.png"
import Tailwindcss from "../assets/frontend/Tailwindcss.png"
import wordpress from "../assets/frontend/wordpress.png"


import asp from "../assets/backend/asp.png"
import django from "../assets/backend/django.png"
import nodejs from "../assets/backend/nodejs.png"


import MongoDb from "../assets/Database/MongoDb.png"
import mysql from "../assets/Database/mysql.png"
import sql from "../assets/Database/sql.png"

import bi from "../assets/ds/bi.png"
import exl from "../assets/ds/exl.png"
import ml from "../assets/ds/ml.png" // Keeping this for the general ML title


import blender from "../assets/design/blender.png"
import figma from "../assets/design/figma.png"
import illu from "../assets/design/illu.png"
import photoshop from "../assets/design/photoshop.png"
// =========================================================
// 3. HELPER COMPONENT for React Icons
// =========================================================
// This component replaces the <img> tag for the new data science skills
const SkillIcon = ({ IconComponent, altText }) => (
  <div className="skill_item">
    {/* Setting a size and consistent color for the icon */}
    <IconComponent size={50} style={{ color: '#007ACC' }} /> 
    <span>{altText}</span>
  </div>
);


const SkillsPage = () => {
  const skillTabs = [
    {
      id: 'tab-programming',
      title: 'Programming Languages',
      content: (
        <div className="skill-icons">
          <div className="skill_item"><img src={C} alt="C" /><span>C program</span></div>
          <div className="skill_item"><img src={Cpp} alt="C++" /><span>C++</span></div>
          <div className="skill_item"><img src={Csharp} alt="C#" /><span>C#</span></div>
          <div className="skill_item"><img src={Php} alt="PHP" /><span>PHP</span></div>
          <div className="skill_item"><img src={js} alt="JavaScript" /><span>Javascript</span></div>
          <div className="skill_item"><img src={Python} alt="Python" /><span>Python</span></div>
          <div className="skill_item"><img src={Rpro} alt="R" /><span>R (Rpro)</span></div>
        </div>
      ),
    },
    {
    id: 'tab-stack',
    title: 'Front End',
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
            <img src={qu} alt="jQuery Logo" />
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
          <div className="skill_item">
            <img src={wordpress} alt="Wordpress Logo" />
            <span>Wordpress</span>
          </div>
        </div>
    ),
},
    {
      id: 'tab-design',
      title: 'Backend end',
      content: (
        <div className="skill-icons">
          <div className="skill_item"><img src={asp} alt="ASP.NET" /><span>ASP.NET</span></div>
          <div className="skill_item"><img src={django} alt="Django" /><span>Django</span></div>
          <div className="skill_item"><img src={nodejs} alt="Node.js" /><span>Node.js</span></div>
        </div>
      ),
    },
    {
      id: 'tab-ai',
      title: 'Databases',
      content: (
        <div className="skill-icons">
          <div className="skill_item"><img src={MongoDb} alt="MongoDb" /><span>Mongo Db</span></div>
          <div className="skill_item"><img src={mysql} alt="MySQL" /><span>MySQL</span></div>
          <div className="skill_item"><img src={sql} alt="SQL Server" /><span>SQL Server</span></div>
        </div>
      ),
    },
    {
      id: 'tab-data',
      title: 'Data Science',
      content: (
        <div className="skill-icons">
          {/* Existing Skills using images */}
          <div className="skill_item"><img src={bi} alt="Power BI" /><span>Power BI</span></div>
          <div className="skill_item"><img src={exl} alt="Excel" /><span>Excel</span></div>
          <div className="skill_item"><img src={ml} alt="Machine Learning" /><span>Machine Learning</span></div>

          {/* 🚀 NEW JOB-READY SKILLS using REACT ICONS 🚀 */}
          
          {/* Prediction Models (Classification/Regression) */}
          <SkillIcon 
            IconComponent={MdOutlinePrecisionManufacturing} 
            altText="Prediction Models (Clsf/Reg)" 
          /> 

          {/* Deep Learning (NN/CNN/NLP) */}
          <SkillIcon 
            IconComponent={FaBrain} 
            altText="Deep Learning (NN/CNN/NLP)" 
          /> 
          
          {/* Statistical Analysis / A/B Testing */}
          <SkillIcon 
            IconComponent={FaRegChartBar} 
            altText="Statistical Analysis / A/B Test" 
          /> 
          
          
          
    
          
        </div>
      ),
    },
    {
      id: 'tab-tools',
      title: 'Design Tools',
      content: (
        <div className="skill-icons">
          <div className="skill_item"><img src={blender} alt="ASP.NET" /><span>Blender 3d</span></div>
          <div className="skill_item"><img src={figma} alt="Django" /><span>FIgma</span></div>
          <div className="skill_item"><img src={illu} alt="Node.js" /><span>Illustrator</span></div>
          <div className="skill_item"><img src={photoshop} alt="Node.js" /><span>Photoshop</span></div>
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