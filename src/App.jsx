import { useState } from "react";
import AboutMe from "./Componentes/AboutMe";
import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import ExperienceSection from "./Componentes/ExperienceSection";
import ProjectsCarousel from "./Componentes/ProjectsCarousel";
import TechBadge from "./Componentes/TechBadge";
import Footer from "./Componentes/Footer";
import { technologies } from "./data/technologies";
import "./App.css";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Navbar />
      <div className="main-wrapper">
      <main className="main-content">
        <Hero onToggleTheme={() => setIsDark(!isDark)} isDark={isDark} />
        <AboutMe />
        <ExperienceSection />
        <ProjectsCarousel />

        <section className="tech-section">
          <h2 className="section-title">Tecnologías</h2>
          <div className="tech-grid">
            {technologies.map((t) => (
              <TechBadge key={t.name} {...t} />
            ))}
          </div>
        </section>
      </main>
      </div>
      <Footer />
    </div>
  );
}
