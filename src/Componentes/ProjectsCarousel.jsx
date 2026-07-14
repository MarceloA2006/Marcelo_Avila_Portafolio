import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <section className="projects-section">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="carousel">
        <button className="carousel-btn" onClick={prev}>‹</button>

        <ProjectCard {...projects[current]} />

        <button className="carousel-btn" onClick={next}>›</button>

        <div className="carousel-dots">
          {projects.map((_, i) => (
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