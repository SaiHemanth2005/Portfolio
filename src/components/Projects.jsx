import { useState } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import projects from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((current + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects-section" id="projects">

      <h2 className="projects-heading">Featured Projects</h2>

      <p className="projects-subtitle">
        A collection of projects that showcase my software development,
        problem-solving and AI skills.
      </p>

      <div className="carousel">

        <button className="arrow left" onClick={prevProject}>
          <FaChevronLeft />
        </button>

        {projects.map((project, index) => {

          let position = "hidden";

          if (index === current) position = "active";
          else if (
            index ===
            (current - 1 + projects.length) % projects.length
          )
            position = "left";
          else if (
            index ===
            (current + 1) % projects.length
          )
            position = "right";

          return (
            <div
              key={project.id}
              className={`project-card ${position}`}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <h3>{project.title}</h3>

              <h4>{project.tech}</h4>

              <p>{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button className="github-btn">
                  <FaGithub />
                  GitHub Repository
                </button>
              </a>

            </div>
          );
        })}

        <button className="arrow right" onClick={nextProject}>
          <FaChevronRight />
        </button>

      </div>

    </section>
  );
}