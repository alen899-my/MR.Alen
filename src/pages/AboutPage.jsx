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
    year: "2017-2018"
  },
  {
    title: "MKM Higher Secondary School",
    desc: "Completed higher secondary education with focus on Computer Science subjects, participated in competitions and developed leadership skills.",
    img: plustwo,
    year: "2018-2020"
  },
  {
    title: "MGM College of Engineering",
    desc: "Pursued Btech Computer Science, gained Core Engineering knowledge, and engaged in projects and activities that shaped my career path.",
    img: college,
    year: "2020-2024"
  },
  {
    title: "Graduation",
    desc: "Achieved my Btech Graduation degree, marking the successful completion of my academic journey.",
    img: graduate,
    year: "2024"
  },
];

const AboutPage = () => {
  const pathRef = useRef(null);
  const roadmapWrapperRef = useRef(null);
  const roadmapItemsRef = useRef([]);

  useEffect(() => {
    // Animate the path line
    gsap.fromTo(
      pathRef.current,
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: roadmapWrapperRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate roadmap items with stagger
    gsap.fromTo(roadmapItemsRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: roadmapWrapperRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );

    // Add continuous floating animation to items
   
  }, []);

  const addToRefs = (el) => {
    if (el && !roadmapItemsRef.current.includes(el)) {
      roadmapItemsRef.current.push(el);
    }
  };

  return (
    <div className="abt_page_container">
      <h1 className="page_title">My Career Journey</h1>
      <div className="road_map">
        <div className="road_map_intro">
          <p>
            From the foundational years of primary education to achieving my engineering degree, 
            this timeline showcases my academic progression and the milestones that shaped my 
            professional journey in technology and innovation.
          </p>
        </div>

        <div className="roadmap_wrapper" ref={roadmapWrapperRef}>
          <svg
            className="roadmap_line"
            viewBox="0 0 100 1200"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M20 100 
                 L80 100
                 L80 400
                 L20 400
                 L20 700
                 L80 700
                 L80 1000
                 "
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d30c48" />
                <stop offset="50%" stopColor="#ff6b6b" />
                <stop offset="100%" stopColor="#d30c48" />
              </linearGradient>
            </defs>
          </svg>

          {roadmapData.map((item, index) => (
            <div
              key={index}
              className={`roadmap_item ${index % 2 === 0 ? "left" : "right"}`}
              ref={addToRefs}
            >
              <div className=""></div>
              <div className="content">
                <div className="year_badge">{item.year}</div>
                <div className="image_container">
                  <img src={item.img} alt={item.title} />
                  <div className="image_overlay"></div>
                </div>
                <div className="text_content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;