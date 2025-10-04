import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import "../styles/SkillsPage.css"

// Skill data with icons (you can replace with actual icons)
const skillsData = [
  { name: "HTML", level: "Advanced", icon: "🟥" },
  { name: "CSS", level: "Advanced", icon: "🟦" },
  { name: "JavaScript", level: "Advanced", icon: "🟨" },
  { name: "React", level: "Intermediate", icon: "⚛️" },
  { name: "Node.js", level: "Intermediate", icon: "🟢" },
  { name: "Python", level: "Intermediate", icon: "🐍" },
  { name: "GSAP", level: "Intermediate", icon: "🎬" },
  { name: "Git", level: "Intermediate", icon: "📚" },
  { name: "MongoDB", level: "Beginner", icon: "🍃" },
  { name: "TypeScript", level: "Beginner", icon: "🔷" },
  { name: "Firebase", level: "Beginner", icon: "🔥" },
  { name: "Figma", level: "Beginner", icon: "🎨" }
];

const SkillsPage = () => {
  const skillBoardRef = useRef(null);
  const skillItemsRef = useRef([]);

  useEffect(() => {
    // Board entrance animation
    gsap.fromTo(skillBoardRef.current, 
      { 
        opacity: 0,
        scale: 0.8,
        rotation: -5
      },
      { 
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      }
    );

    // Skills staggered animation
    gsap.fromTo(skillItemsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: {
          amount: 1.5,
          grid: [3, 4],
          from: "center"
        },
        ease: "back.out(1.7)",
        delay: 0.5
      }
    );

    // Continuous floating animation for skills
    skillItemsRef.current.forEach((skill, index) => {
      gsap.to(skill, {
        y: -10,
        duration: 1 + (index * 0.1),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !skillItemsRef.current.includes(el)) {
      skillItemsRef.current.push(el);
    }
  };

  return (
    <div className="skillsContainer">
      <h1>My All Skill Sets</h1>
      <div className="skill_board_container">
        <div className="skill_board" ref={skillBoardRef}>
          {/* Snake and Ladder Grid */}
          <div className="snake_ladder_grid">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className={`skill_cell ${
                  index % 2 === 0 ? 'ladder_cell' : 'snake_cell'
                }`}
                ref={addToRefs}
              >
                <div className="skill_icon">{skill.icon}</div>
                <div className="skill_name">{skill.name}</div>
                <div className="skill_level">{skill.level}</div>
              </div>
            ))}
          </div>

          {/* Snakes */}
          <div className="snakes_container">
            <div className="snake snake-1"></div>
            <div className="snake snake-2"></div>
            <div className="snake snake-3"></div>
          </div>

          {/* Ladders */}
          <div className="ladders_container">
            <div className="ladder ladder-1"></div>
            <div className="ladder ladder-2"></div>
            <div className="ladder ladder-3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage