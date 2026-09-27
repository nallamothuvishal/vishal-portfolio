import { FiAward } from 'react-icons/fi';
import './Certifications.css';

const certifications = [
  {
    name: 'Python Programming & Application Development',
    href: 'https://drive.google.com/file/d/1NMC9svQWkjJtD32rlqLFLN5NX8IM-71p/view',
  },
  {
    name: 'Comprehensive Java Programming & Development',
    href: 'https://drive.google.com/file/d/1tradr8i5Aw6ssxBJO3ynjIJ-Z2G-HmF7/view',
  },
  {
    name: 'Data Analytics & Data Interpretation',
    href: 'https://drive.google.com/file/d/1nJU4BmusqicQRBYYPSKuwPlqedtX7mLM/view',
  },
];

function Certifications() {
  return (
    <section id="certifications">
      <div className="section-heading reveal">
        <span className="eyebrow">Credentials</span>
        <h2 className="section-title">Certifications</h2>
      </div>

      <div className="certifications-grid reveal">
        {certifications.map(({ name, href }) => (
          <article key={name} className="cert-card">
            <span className="cert-icon" aria-hidden="true"><FiAward /></span>
            <h3>{href ? <a href={href}>{name}</a> : name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
