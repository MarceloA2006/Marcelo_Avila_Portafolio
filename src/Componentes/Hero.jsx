import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";
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
            ¡Hola! Soy <span className="accent">Marcelo Ávila</span> y soy un
          </p>
          <h1 className="hero-title">
            Desarrollador Frontend y estudiante de Ingeniería en Tecnologías
            Computacionales con experiencia en desarrollo web utilizando React y
            Nuxt.js.
          </h1>

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
            <a href="/Marcelo_Avila_CV.pdf" download aria-label="Descargar CV">
              <HiDocument />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}