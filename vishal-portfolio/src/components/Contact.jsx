import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import './Contact.css';

const contactLinks = [
  { label: 'Email Me', href: 'mailto:nallamothuvishal@gmail.com', icon: FiMail },
  { label: 'Call Me', href: 'tel:+917569325554', icon: FiPhone },
  { label: 'GitHub', href: 'GITHUB_URL_HERE', icon: FiGithub },
  { label: 'LinkedIn', href: 'LINKEDIN_URL_HERE', icon: FiLinkedin },
];

function Contact() {
  return (
    <section id="contact">
      <div className="contact-card reveal">
        <div className="section-heading reveal contact-copy">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let&apos;s Build Something Together.</h2>
          <p className="section-intro">I&apos;m open to opportunities, collaborations, and interesting software projects.</p>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <a href="tel:+917569325554">+91 7569325554</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:nallamothuvishal@gmail.com">nallamothuvishal@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Location:</span>
            <span>
              <FiMapPin /> Hyderabad, Telangana
            </span>
          </div>
        </div>

        <div className="contact-actions">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className={label === 'Email Me' ? 'primary-btn contact-btn' : 'secondary-btn contact-btn'}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
