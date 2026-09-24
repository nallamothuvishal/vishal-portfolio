import './Education.css';

const educationData = [
  {
    institution: 'DRK College of Engineering and Technology - JNTUH',
    period: '2023 - 2027',
    degree: 'B.Tech in Computer Science and Engineering',
    details: 'CGPA: 7.25/10',
    location: 'Hyderabad, Telangana',
  },
  {
    institution: 'Sri Chaitanya Junior College',
    period: '2021 - 2023',
    degree: 'Intermediate',
    details: 'Percentage: 91.2%',
    location: 'Khammam, Telangana',
  },
  {
    institution: 'Regina Carmeli Convent High School',
    period: '2011 - 2021',
    degree: 'SSC',
    details: 'CGPA: 10.0/10',
    location: 'Palwancha, Telangana',
  },
];

function Education() {
  return (
    <section id="education">
      <div className="section-heading reveal">
        <span className="eyebrow">Education</span>
        <h2 className="section-title">Education</h2>
      </div>

      <div className="timeline reveal">
        {educationData.map(({ institution, period, degree, details, location }) => (
          <div key={institution} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"></div>
            <div className="timeline-card">
              <span className="timeline-period">{period}</span>
              <h3>{institution}</h3>
              <p className="timeline-degree">{degree}</p>
              <p>{details}</p>
              <p>{location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
