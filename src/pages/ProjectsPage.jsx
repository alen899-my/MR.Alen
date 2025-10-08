import React, { useState, useEffect } from 'react';
import "../styles/projectpage.css";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import figma from "../assets/design/blender.png";

// Enhanced project data with more details
const projects = [
  { 
    id: 1, 
    title: "Project Alpha", 
    description: "A sophisticated e-commerce platform built with MERN stack featuring real-time inventory management, payment processing, and admin dashboard.", 
    imageUrl: figma, // Fixed: removed the curly braces
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack"
  },
  { 
    id: 2, 
    title: "Project Beta", 
    description: "A data visualization tool for real-time stock market analysis with interactive charts, portfolio tracking, and predictive analytics.", 
    imageUrl: "placeholder_beta.jpg",
    technologies: ["Python", "D3.js", "FastAPI", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Data Visualization"
  },
  { 
    id: 3, 
    title: "Project Gamma", 
    description: "A personal blog with custom CMS, serverless deployment, markdown support, and SEO optimization.", 
    imageUrl: "placeholder_gamma.jpg",
    technologies: ["Next.js", "AWS Lambda", "Contentful", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development"
  },
  { 
    id: 4, 
    title: "Project Delta", 
    description: "A mobile game prototype developed with Unity and C# featuring multiplayer functionality and procedurally generated levels.", 
    imageUrl: "placeholder_delta.jpg",
    technologies: ["Unity", "C#", "Photon", "Blender"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Game Development"
  },
];

const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalProjects = projects.length;

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalProjects]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="project_section" id="projects">
      <div className="section_header">
        <h2 className="section_heading">Creative Works</h2>
        <p className="section_subtitle">A showcase of my latest projects and innovations</p>
      </div>
      
      <div className="carousel_wrapper">
        {/* Previous Button */}
        <button 
          className="carousel_button prev_button" 
          onClick={prevProject} 
          aria-label="Previous Project"
          onMouseEnter={() => setIsAutoPlaying(false)}
        >
          <FaChevronLeft />
        </button>

        {/* Carousel Track & Items */}
        <div 
          className="carousel_track_container"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
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
  {/* Always try to render image if imageUrl exists */}
  {project.imageUrl && (
    <img 
      src={project.imageUrl} 
      alt={project.title}
      className="project_image"
      onError={(e) => {
        // If image fails to load, show placeholder
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
  )}
  <div className="image_placeholder" style={{ 
    display: project.imageUrl ? 'none' : 'flex' 
  }}>
    <span className="project_number">0{index + 1}</span>
    <span className="project_category">{project.category}</span>
  </div>
</div>
                    <div className="card_front_content">
                      <h3 className="project_title">{project.title}</h3>
                      <div className="technologies">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="tech_tag">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="tech_tag">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back Side: Description & Details */}
                  <div className="card_back">
                    <div className="card_back_content">
                      <span className="project_category_badge">{project.category}</span>
                      <h3 className="project_title_back">{project.title}</h3>
                      <p className="project_description">{project.description}</p>
                      
                      <div className="technologies_full">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="tech_tag">{tech}</span>
                        ))}
                      </div>
                      
                      <div className="project_links">
                        <a href={project.liveUrl} className="project_link live_demo">
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                        <a href={project.githubUrl} className="project_link source_code">
                          <FaGithub /> Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button 
          className="carousel_button next_button" 
          onClick={nextProject} 
          aria-label="Next Project"
          onMouseEnter={() => setIsAutoPlaying(false)}
        >
          <FaChevronRight />
        </button>
      </div>
      
      {/* Navigation Dots */}
      <div className="carousel_dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active_dot' : ''}`}
            onClick={() => goToProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="project_counter">
        <span className="current_number">0{currentIndex + 1}</span>
        <span className="total_projects">/0{totalProjects}</span>
      </div>
    </section>
  );
};

export default ProjectsPage;