import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";
import { dataTech } from "../data/dataTech";
import TechBadge from "./TechBadge";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function Hero({ onToggleTheme, isDark }) {
  return (
    <section className="hero">
      <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
        <img
          src={isDark ? "/icons/Moon.svg" : "/icons/Sun.svg"}
          alt={isDark ? "Dark mode" : "Light mode"}
          className="theme-icon"
        />
      </button>

      <div className="hero-content">
        <img src="/Retrato.jpeg" alt="Marcelo Ávila" className="hero-photo" />


        <div className="hero-text">
          <p className="hero-greeting">
            Hello! I'm <span className="accent">Marcelo Ávila</span> and I am a
          </p>
          <h1 className="hero-title">
            Data Science & Software Engineering Student.
            
          </h1>

          <div className="tech-grid-data">
                      {dataTech.map((t) => (
                        <TechBadge key={t.name} {...t} />
                      ))}
                    </div>
          
      

          <div className="hero-links">
            <a href="https://github.com/MarceloA2006" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/marcelo-ávila-garza-694490368" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:marcelo.avg06@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="/Marcelo_Avila_CVAct.pdf" download aria-label="Download CV">
              <HiDocument />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}