import React, { useState } from 'react';
import "../styles/projectpage.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Using react-icons for navigation arrows

// Dummy project data for structure and demonstration
const projects = [
    { id: 1, title: "Project Alpha", description: "A sophisticated e-commerce platform built with MERN stack.", imageUrl: "placeholder_alpha.jpg" },
    { id: 2, title: "Project Beta", description: "A data visualization tool for real-time stock market analysis.", imageUrl: "placeholder_beta.jpg" },
    { id: 3, title: "Project Gamma", description: "A personal blog with custom CMS and serverless deployment.", imageUrl: "placeholder_gamma.jpg" },
    { id: 4, title: "Project Delta", description: "A mobile game prototype developed with Unity and C#.", imageUrl: "placeholder_delta.jpg" },
];

const ProjectsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalProjects = projects.length;

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects);
    };

    return (
        <section className="project_section">
            <h2 className="section_heading">Creative Works</h2>
            <div className="carousel_wrapper">
                
                {/* Previous Button */}
                <button className="carousel_button prev_button" onClick={prevProject} aria-label="Previous Project">
                    <FaChevronLeft />
                </button>

                {/* Carousel Track & Items */}
                <div className="carousel_track_container">
                    <div 
                        className="carousel_track" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projects.map((project, index) => (
                            <div 
                                className={`project_card ${index === currentIndex ? 'active' : ''}`}
                                key={project.id}
                            >
                                <div className="card_inner">
                                    {/* Front Side: Image & Title */}
                                    <div className="card_front">
                                        <div className="project_image_space">
                                            {/* Your Project Image Goes Here */}
                                            {/* <img src={project.imageUrl} alt={project.title} /> */}
                                            <span className="image_placeholder">
                                                Image Space {index + 1}
                                            </span>
                                        </div>
                                        <h3 className="project_title">{project.title}</h3>
                                    </div>

                                    {/* Back Side: Description & Details */}
                                    <div className="card_back">
                                        <h3 className="project_title_back">{project.title}</h3>
                                        <p className="project_description">{project.description}</p>
                                        <a href="#" className="project_link">View Project →</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button className="carousel_button next_button" onClick={nextProject} aria-label="Next Project">
                    <FaChevronRight />
                </button>
            </div>
            
            {/* Navigation Dots (optional, but good for UX) */}
            <div className="carousel_dots">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active_dot' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;