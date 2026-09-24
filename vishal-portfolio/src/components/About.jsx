import './About.css';

const stats = [
  { value: '3+', label: 'Data-Driven Projects' },
  { value: '2023–2027', label: 'B.Tech CSE' },
  { value: '7.25/10', label: 'Current CGPA' },
  { value: '91.2%', label: 'Intermediate' },
];

function About() {
  return (
    <section id="about">
      <div className="section-heading reveal">
        <span className="eyebrow">About</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-grid reveal">
        <div className="about-copy">
          <p>
            Computer Science and Engineering undergraduate and aspiring software developer with a
            foundation in Full-Stack Development, AI/ML, databases, and problem-solving.
          </p>
          <p>
            I enjoy building practical solutions that combine clean engineering, data-driven problem
            solving, and user-focused experiences. My interests include Full-Stack Development,
            AI/ML, Databases, Java, Python, SQL, and React.js.
          </p>
          <ul className="about-highlights">
            <li>Full-Stack Development</li>
            <li>AI/ML</li>
            <li>Databases</li>
            <li>Problem Solving</li>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="about-stats" aria-label="Quick profile stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-card">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
