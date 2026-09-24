import { FiAward } from 'react-icons/fi';
import './Certifications.css';

const certifications = [
  'Python Programming & Application Development',
  'Comprehensive Java Programming & Development',
  'Data Analytics & Data Interpretation',
];

function Certifications() {
  return (
    <section id="certifications">
      <div className="section-heading reveal">
        <span className="eyebrow">Credentials</span>
        <h2 className="section-title">Certifications</h2>
      </div>

      <div className="certifications-grid reveal">
        {certifications.map((item) => (
          <article key={item} className="cert-card">
            <span className="cert-icon" aria-hidden="true"><FiAward /></span>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
