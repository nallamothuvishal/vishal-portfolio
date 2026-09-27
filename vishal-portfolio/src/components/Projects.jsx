import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'AI-Powered College Management & Student Performance Analysis System',
    description:
      'Developed a data-driven college management platform for centralized management of student and academic data.',
    tech: ['PostgreSQL', 'Supabase', 'AI', 'Analytics'],
    features: [
      'Attendance insights',
      'Academic performance analysis',
      'Academic risk analysis',
      'Minimum-credit tracking',
      'Personalized recommendations',
      'PostgreSQL',
      'Supabase',
    ],
    github: 'https://github.com/nallamothuvishal/drk-cet',
    demo: '#',
  },
  {
    id: '02',
    title: 'AI-Powered Resume Analysis and Job Recommendation System',
    description:
      'Developed an AI-based system to analyze resumes against job descriptions and identify relevant and missing skills.',
    tech: ['NLP', 'Machine Learning', 'Python', 'AI'],
    features: [
      'NLP resume parsing',
      'Skill extraction',
      'Resume-to-job matching',
      'Skill-gap analysis',
      'Candidate profile analysis',
      'Recommendation module',
    ],
    github: 'https://github.com/nallamothuvishal/atsbasedresume',
    demo: '#',
  },
  {
    id: '03',
    title: 'Sales Performance & Business Analytics Dashboard',
    description:
      'Built a data analytics solution for analyzing sales performance, revenue, product performance, customer segments, and regional trends.',
    tech: ['Python', 'Pandas', 'SQL', 'Power BI'],
    features: [
      'Python',
      'Pandas',
      'SQL',
      'Exploratory Data Analysis',
      'KPI analysis',
      'Power BI',
      'Revenue analysis',
      'Profit analysis',
    ],
    github: '#',
    demo: '#',
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="section-heading reveal">
        <span className="eyebrow">Projects</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-grid reveal">
        {projects.map(({ id, title, description, tech, features, github, demo }) => (
          <article key={id} className="project-card">
            <div className="project-topline">
              <span className="project-number">{id}</span>
              <span className="project-tag">Featured</span>
            </div>

            <h3>{title}</h3>
            <p className="project-description">{description}</p>

            <div className="project-tech">
              {tech.map((item) => (
                <span key={`${title}-${item}`}>{item}</span>
              ))}
            </div>

            <ul className="project-features">
              {features.map((feature) => (
                <li key={`${title}-${feature}`}>{feature}</li>
              ))}
            </ul>

            <div className="project-actions">
              <a href={github} className="project-button secondary-btn" aria-label={`View GitHub for ${title}`}>
                GitHub
              </a>
              <a href={demo} className="project-button primary-btn" aria-label={`View live demo for ${title}`}>
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
