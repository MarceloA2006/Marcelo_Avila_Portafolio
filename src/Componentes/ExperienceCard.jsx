export default function ExperienceCard({ company, role, period, bullets }) {
  return (
    <div className="exp-card">
      <h3 className="exp-company">{company}</h3>
      <p className="exp-role accent">{role}</p>
      <p className="exp-period">{period}</p>
      <ul className="exp-bullets">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}