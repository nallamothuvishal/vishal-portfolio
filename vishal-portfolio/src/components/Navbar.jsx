import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import './Navbar.css';

const navItems = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Certifications', 'Contact'];

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <button
          type="button"
          className="logo"
          onClick={() => handleNavClick('home')}
          aria-label="Go to home section"
        >
          <span className="logo-dot" aria-hidden="true"></span>
          <span className="logo-text">
            <strong>NALLAMOTHU</strong>
            <span>VISHAL</span>
          </span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <button
                type="button"
                key={item}
                className={`nav-link ${item === 'Home' ? 'active' : ''}`}
                onClick={() => handleNavClick(id === 'home' ? 'home' : id)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
