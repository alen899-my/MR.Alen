import React, { useEffect, useRef } from "react";
import "../styles/HomePage.css";
import test from "../assets/test.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type"; // For heading animation

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const pRef = useRef(null);
  const headlineRef = useRef(null); // Ref for the heading

  useEffect(() => {
    // SplitType for heading animation
    const splitHeadline = new SplitType(headlineRef.current, {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from(splitHeadline.lines, {
      y: "100%",
      opacity: 0,
      duration: .2,
      ease: "power1.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: headlineRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Left side animation (other elements except heading and paragraph)
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
      duration: 1.2,
      x: 100,      // slide in from right
      scale: 0.8,  // start smaller
      opacity: 0,
      rotation: 5, // slight rotation for effect
      ease: "power3.out",
    });

    // Smooth fade/slide animation for paragraph
    gsap.from(pRef.current, {
      scrollTrigger: {
        trigger: pRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 20,       // small slide from bottom
      opacity: 0,  // fade in
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="homepage_container">
      <div className="left_side" ref={leftRef}>
        <div className="tag">
          <h1 ref={headlineRef}>The Right Person For your Industry!</h1>
        </div>
        <div className="short_desc">
          <p ref={pRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Deleniti et, neque asperiores vitae facere beatae reprehenderit
            eaque consequatur necessitatibus quibusdam cum nisi animi veniam
            distinctio, totam at labore ad sed. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugit perferendis odit in. Vitae sint
            in quod soluta, non, ipsa facere consequuntur dolorum eos quia
            aspernatur. Repellat ipsam consectetur pariatur sapiente.
          </p>
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
