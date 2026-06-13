export default function EducationCard({ institution, degree, period, bullets }) {
  return (
    <div className="exp-card">
      <h3 className="exp-company">{institution}</h3>
      <p className="exp-role accent">{degree}</p>
      <p className="exp-period">{period}</p>
      <ul className="exp-bullets">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}