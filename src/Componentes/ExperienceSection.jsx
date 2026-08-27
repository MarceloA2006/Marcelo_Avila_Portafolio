import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { experiences } from "../data/experience";
import { education } from "../data/education";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="exp-section">
      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "experience"
          ? experiences.map((exp) => <ExperienceCard key={exp.id} {...exp} />)
          : education.map((edu) => <EducationCard key={edu.id} {...edu} />)}
      </div>
    </section>
  );
}