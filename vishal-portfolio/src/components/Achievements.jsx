import './Achievements.css';

const achievements = [
  'Built 3 data-driven projects covering academic analytics, AI-based resume matching, and sales/business analytics.',
  'Developed practical data analytics workflows using Python, SQL, Pandas and NumPy.',
  'Built an interactive Power BI Sales Performance Dashboard.',
  'Developed an AI-powered academic analytics system.',
  'Applied NLP and machine learning concepts to build a Resume ATS and Job Matching System.',
];

function Achievements() {
  return (
    <section id="achievements">
      <div className="section-heading reveal">
        <span className="eyebrow">Highlights</span>
        <h2 className="section-title">Achievements &amp; Highlights</h2>
      </div>

      <div className="achievement-grid reveal">
        {achievements.map((item) => (
          <article key={item} className="achievement-card">
            <span className="achievement-bullet" aria-hidden="true"></span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
