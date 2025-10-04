import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import "../styles/SkillsPage.css"

const skillsData = [
  // Frontend Skills
  { 
    name: "HTML", 
    level: "Advanced", 
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
  },
  { 
    name: "CSS", 
    level: "Advanced", 
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
  },
  { 
    name: "JavaScript", 
    level: "Advanced", 
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
  },
  { 
    name: "React", 
    level: "Intermediate", 
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
  },
  { 
    name: "TypeScript", 
    level: "Intermediate", 
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
  },
  { 
    name: "Tailwind", 
    level: "Intermediate", 
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
  },

  // Backend Skills
  { 
    name: "Node.js", 
    level: "Intermediate", 
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
  },
  { 
    name: "Python", 
    level: "Intermediate", 
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
  },
  { 
    name: "MongoDB", 
    level: "Intermediate", 
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
  },
  { 
    name: "Firebase", 
    level: "Intermediate", 
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
  },
  { 
    name: "MySQL", 
    level: "Beginner", 
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
  },
  { 
    name: "Express", 
    level: "Intermediate", 
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
  },

  // Tools & Others
  { 
    name: "Git", 
    level: "Advanced", 
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
  },
  { 
    name: "GSAP", 
    level: "Intermediate", 
    category: "Tools",
    icon: "https://gsap.com/_img/code.svg" 
  },
  { 
    name: "Figma", 
    level: "Intermediate", 
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
  },
  { 
    name: "Docker", 
    level: "Beginner", 
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
  },
  { 
    name: "AWS", 
    level: "Beginner", 
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" 
  },
  { 
    name: "Linux", 
    level: "Intermediate", 
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" 
  }
];

const SkillsPage = () => {
  const carouselRef = useRef(null);
  const skillsRef = useRef([]);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [rotation, setRotation] = useState(0);

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];
  const skillsPerView = 8;

  const filteredSkills = currentCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === currentCategory);

  useEffect(() => {
    // Initial carousel animation
    gsap.fromTo(carouselRef.current,
      {
        rotationY: -180,
        opacity: 0,
        scale: 0.5
      },
      {
        rotationY: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)",
        transformOrigin: "center center"
      }
    );

    // Animate skills entrance
    gsap.fromTo(skillsRef.current,
      {
        opacity: 0,
        scale: 0,
        rotationY: -90
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5
      }
    );
  }, [currentCategory]);

  const rotateCarousel = (direction) => {
    const newRotation = rotation + (direction * 45);
    setRotation(newRotation);
    
    gsap.to(carouselRef.current, {
      rotationY: newRotation,
      duration: 1,
      ease: "power3.inOut",
      transformOrigin: "center center"
    });
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Advanced': return '#4CAF50';
      case 'Intermediate': return '#FF9800';
      case 'Beginner': return '#f44336';
      default: return '#666';
    }
  };

  const getLevelWidth = (level) => {
    switch(level) {
      case 'Advanced': return '100%';
      case 'Intermediate': return '70%';
      case 'Beginner': return '40%';
      default: return '20%';
    }
  };

  const addToRefs = (el) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  return (
    <div className="skillsContainer">
      <h1>My Technical Skills</h1>
      
      {/* Category Filter */}
      <div className="category_filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter_btn ${currentCategory === category ? 'active' : ''}`}
            onClick={() => setCurrentCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 3D Carousel Container */}
      <div className="carousel_container">
        <button className="nav_btn prev_btn" onClick={() => rotateCarousel(-1)}>
          ‹
        </button>
        
        <div className="carousel_wrapper">
          <div className="carousel" ref={carouselRef}>
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="skill_card"
                ref={addToRefs}
                style={{
                  transform: `rotateY(${index * (360 / filteredSkills.length)}deg) translateZ(300px)`
                }}
              >
                <div className="skill_icon">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="skill_fallback" style={{display: 'none'}}>
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <div className="skill_name">{skill.name}</div>
                <div className="skill_category">{skill.category}</div>
                <div className="skill_level_container">
                  <div 
                    className="skill_level_bar"
                    style={{ 
                      backgroundColor: getLevelColor(skill.level),
                      width: getLevelWidth(skill.level)
                    }}
                  ></div>
                </div>
                <div 
                  className="skill_level_text"
                  style={{ color: getLevelColor(skill.level) }}
                >
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav_btn next_btn" onClick={() => rotateCarousel(1)}>
          ›
        </button>
      </div>

      {/* Skills Grid Fallback */}
      <div className="skills_grid_fallback">
        <h3>All Skills Overview</h3>
        <div className="skills_grid">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill_item"
              style={{ borderLeftColor: getLevelColor(skill.level) }}
            >
              <div className="skill_header">
                <img src={skill.icon} alt={skill.name} className="skill_img" />
                <span className="skill_title">{skill.name}</span>
              </div>
              <div className="skill_category_badge">{skill.category}</div>
              <div 
                className="skill_level_badge"
                style={{ backgroundColor: getLevelColor(skill.level) }}
              >
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Stats */}
      <div className="skills_stats">
        <div className="stat_item">
          <div className="stat_number">{skillsData.length}+</div>
          <div className="stat_label">Total Skills</div>
        </div>
        <div className="stat_item">
          <div className="stat_number">
            {skillsData.filter(s => s.level === 'Advanced').length}
          </div>
          <div className="stat_label">Advanced</div>
        </div>
        <div className="stat_item">
          <div className="stat_number">
            {skillsData.filter(s => s.level === 'Intermediate').length}
          </div>
          <div className="stat_label">Intermediate</div>
        </div>
        <div className="stat_item">
          <div className="stat_number">
            {skillsData.filter(s => s.level === 'Beginner').length}
          </div>
          <div className="stat_label">Beginner</div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage