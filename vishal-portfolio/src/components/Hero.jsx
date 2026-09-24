import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import profileImage from '../assets/images/viss.png';
import './Hero.css';

const socials = [
  { label: 'GitHub', href: 'https://github.com/nallamothuvishal', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nallamothu-vishal-374032438/', icon: FiLinkedin },
  { label: 'Email', href: 'mailto:nallamothuvishal@gmail.com', icon: FiMail },
];

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content reveal">
        <span className="eyebrow">Portfolio</span>
        <h1>
          Hi, I&apos;m Vishal.
          <span className="accent-line">Software Developer</span>
          <span className="secondary-line">&amp; AI/ML Enthusiast</span>
        </h1>

        <p className="hero-description">
          Computer Science and Engineering undergraduate with a foundation in Full-Stack
          Development, AI/ML, databases, and problem-solving.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            View My Projects
            <FiArrowRight />
          </a>
          <a href="/resume.pdf" className="secondary-btn" download="Nallamothu-Vishal-Resume.pdf" aria-label="Download resume as PDF">
            <FiDownload />
            Download Resume
          </a>
        </div>

        <div className="hero-meta">
          <span className="location">
            <FiMapPin />
            Based in Hyderabad, Telangana
          </span>
        </div>

        <div className="social-row" aria-label="Social media links">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} aria-label={label} className="social-link">
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual reveal" aria-label="Developer portrait section">
        <div className="visual-glow"></div>

        <div className="portrait-card">
          <img src={profileImage} alt="Nallamothu Vishal portrait" className="profile-image" />
        </div>

        <div className="floating-card card-one">
          <span>Java</span>
        </div>
        <div className="floating-card card-two">
          <span>Python</span>
        </div>
        <div className="floating-card card-three">
          <span>React</span>
        </div>
        <div className="floating-card card-four">
          <span>SQL</span>
        </div>
        <div className="floating-card card-five">
          <span>AI/ML</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
