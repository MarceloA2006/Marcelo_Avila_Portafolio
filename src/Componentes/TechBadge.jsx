export default function TechBadge({ name, icon }) {
  return (
    <div className="tech-badge">
      <img src={icon} alt={name} className="tech-icon" />
      <span>{name}</span>
    </div>
  );
}