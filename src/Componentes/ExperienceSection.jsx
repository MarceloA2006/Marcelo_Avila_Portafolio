import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { experiences } from "../data/experience";
import { education } from "../data/education";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("experiencia");

  return (
    <section className="exp-section">
      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === "experiencia" ? "active" : ""}`}
          onClick={() => setActiveTab("experiencia")}
        >
          Experiencia
        </button>
        <button
          className={`tab-btn ${activeTab === "educacion" ? "active" : ""}`}
          onClick={() => setActiveTab("educacion")}
        >
          Educación
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "experiencia"
          ? experiences.map((exp) => <ExperienceCard key={exp.id} {...exp} />)
          : education.map((edu) => <EducationCard key={edu.id} {...edu} />)}
      </div>
    </section>
  );
}