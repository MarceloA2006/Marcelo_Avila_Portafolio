export default function ProjectCard({ title, description, image, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="project-card-link">
      <div className="project-card">
        <div
          className="project-image"
          style={{ backgroundImage: image ? `url(${image})` : "none" }}
        >
          <div className="project-overlay">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}