import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const footerLinks = [
  { label: 'GitHub', href: 'GITHUB_URL_HERE', icon: FiGithub },
  { label: 'LinkedIn', href: 'LINKEDIN_URL_HERE', icon: FiLinkedin },
  { label: 'Email', href: 'mailto:nallamothuvishal@gmail.com', icon: FiMail },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© 2026 Nallamothu Vishal. All rights reserved.</p>
        <div className="footer-links" aria-label="Footer social links">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} aria-label={label}>
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
