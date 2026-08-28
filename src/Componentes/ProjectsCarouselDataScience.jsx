import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsDataScience } from "../data/projectsDataScience";

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projectsDataScience.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projectsDataScience.length - 1 ? 0 : c + 1));

  return (
    <section className="projects-section">
      <h2 className="section-title">My data related projects</h2>
      <div className="carousel">
        <button className="carousel-btn" onClick={prev}>‹</button>

        <ProjectCard {...projectsDataScience[current]} />

        <button className="carousel-btn" onClick={next}>›</button>

        <div className="carousel-dots">
          {projectsDataScience.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}