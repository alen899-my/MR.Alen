import React, { useEffect, useRef } from "react";
import "../styles/AboutPage.css";
import school from "../assets/school.webp";
import graduate from "../assets/graduate.jpg"; 

import college from "../assets/college.png"; 
import plustwo from "../assets/plustwo.webp"
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugins
gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

const roadmapData = [
  {
    title: "Fathima Central School",
    desc: "Completed my primary education from Fathima Central School, actively participated in extracurricular activities, and excelled in academics.",
    img: school,
  },
  {
    title: "Mkm Higher Secondary School ",
    desc: "Completed higher secondary education with focus on Computer Science subjects, participated in competitions and developed leadership skills.",
    img: plustwo, 
  },
  {
    title: "MGM college of Engineering ",
    desc: "Pursued Btech Computer Science, gained Core Engineering knowledge, and engaged in projects and activities that shaped my career path.",
    img: college,
  },
  {
    title: "Graduation",
    desc: "Achieved my  Btec Graduation degree, marking the successful completion of my academic journey.",
    img: graduate, 
  },
];

const AboutPage = () => {
  const pathRef = useRef(null);
  const roadmapWrapperRef = useRef(null);

  useEffect(() => {
  
    gsap.fromTo(
      pathRef.current,
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: roadmapWrapperRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="abt_page_container">
      <h1>My Career Path Way</h1>
      <div className="road_map">
        <div className="road_map_intro">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            asperiores beatae pariatur quae fugiat non, repudiandae eum, magnam
            doloremque vitae iste provident impedit alias velit veritatis.
          </p>
        </div>

        <div className="roadmap_wrapper" ref={roadmapWrapperRef}>
          <svg
            className="roadmap_line"
            viewBox="0 0 100 800"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M20 50 
                 L80 50
                 L80 350
                 L20 350
                 L20 550
                 L80 550
                 L80 700
                 "
              stroke="#f50909ff"
              strokeWidth="0.5"
              fill="none"
              
              strokeLinecap="round"
            />
          </svg>

          {roadmapData.map((item, index) => (
            <div
              key={index}
              className={`roadmap_item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="content">
                
                <img src={item.img} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;