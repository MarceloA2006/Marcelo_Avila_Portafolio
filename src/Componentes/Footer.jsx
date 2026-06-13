import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-name">Marcelo Ávila Garza</p>
          <p>+52 8121074621</p>
          <a href="mailto:marcelo.avg06@gmail.com">marcelo.avg06@gmail.com</a>
          <p className="footer-copy">© 2026 Marcelo Ávila Garza.</p>
        </div>
        <div className="footer-right">
          <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:marcelo.avg06@gmail.com"><FaEnvelope /></a>
          <a href="/cv.pdf" download><HiDocument /></a>
        </div>
      </div>
    </footer>
  );
}