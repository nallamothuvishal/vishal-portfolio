import { FiBarChart2, FiCode, FiDatabase, FiCpu, FiGitBranch, FiLayers, FiServer } from 'react-icons/fi';
import './Skills.css';

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: FiCode,
    items: ['Java', 'Python', 'SQL'],
  },
  {
    title: 'Web Technologies',
    icon: FiLayers,
    items: ['React.js', 'HTML', 'CSS', 'TypeScript'],
  },
  {
    title: 'Databases',
    icon: FiDatabase,
    items: ['PostgreSQL', 'Supabase'],
  },
  {
    title: 'CS Fundamentals',
    icon: FiCpu,
    items: ['Data Structures and Algorithms', 'Object-Oriented Programming'],
  },
  {
    title: 'Frameworks / Libraries',
    icon: FiServer,
    items: ['Node.js'],
  },
  {
    title: 'AI / ML / Data',
    icon: FiBarChart2,
    items: ['Machine Learning', 'NLP', 'Data Analysis'],
  },
  {
    title: 'Tools',
    icon: FiGitBranch,
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Other',
    icon: FiLayers,
    items: ['REST APIs', 'Authentication', 'CRUD Operations'],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="section-heading reveal">
        <span className="eyebrow">Expertise</span>
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div className="skills-grid reveal">
        {skillGroups.map(({ title, icon: Icon, items }) => (
          <article key={title} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon"><Icon /></span>
              <h3>{title}</h3>
            </div>
            <ul className="skill-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
