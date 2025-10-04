import React, { useEffect, useRef } from "react";
import "../styles/HomePage.css";
import test from "../assets/test.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const HomePage = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const pRef = useRef(null);

  const paragraphText = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti et, neque asperiores vitae facere beatae reprehenderit eaque consequatur necessitatibus quibusdam cum nisi animi veniam distinctio, totam at labore ad sed.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis odit in. Vitae sint in quod soluta, non, ipsa facere consequuntur dolorum eos quia aspernatur. Repellat ipsam consectetur pariatur sapiente.
  `;

  useEffect(() => {
    // Left side animation
    const leftElements = leftRef.current.children;
    gsap.from(leftElements, {
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      duration: 1,
      x: -50,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out",
    });

    // Right side image animation
    gsap.from(rightRef.current, {
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      duration: 1,
      x: 50,
      opacity: 0,
      ease: "power3.out",
    });

    // Typing effect for paragraph
    gsap.fromTo(
      pRef.current,
      { text: "" },
      {
        text: paragraphText,
        duration: 5, // typing duration in seconds
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        ease: "none",
      }
    );
  }, []);

  return (
    <div className="homepage_container">
      <div className="left_side" ref={leftRef}>
        <div className="tag">
          <h1>The right Person For your Industry!</h1>
        </div>
        <div className="short_desc">
          <p ref={pRef}></p>
        </div>
        <div className="explore_button">
          <button>Explore Me</button>
        </div>
      </div>
      <div className="right_side" ref={rightRef}>
        <div className="img_Container">
          <img src={test} alt="Industry" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
