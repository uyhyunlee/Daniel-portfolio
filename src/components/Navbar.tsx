import { Link, useLocation } from 'react-router-dom';
import { useDrawer } from '../contexts/DrawerContext';
import linkedinIcon from '../assets/linkedin-icon.svg';
import githubIcon from '../assets/github-icon.svg';
import mailIcon from '../assets/mail-icon.svg';
import phoneIcon from '../assets/phone-icon.svg';
import './Navbar.css';

function Navbar() {
  const { isContactDrawerOpen, toggleContactDrawer } = useDrawer();
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>about</Link></li>
          <li><Link to="/work" className={location.pathname === '/work' ? 'active' : ''}>work</Link></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); toggleContactDrawer(); }}>contact</a></li>
        </ul>
      </nav>

      {/* Contact Drawer */}
      <div className={`contact-drawer ${isContactDrawerOpen ? 'open' : ''}`}>
        <button className="close-drawer" onClick={toggleContactDrawer}>×</button>
        <div className="contact-content">
          <h2 className="contact-title">lets build!</h2>
          <p className="contact-subtitle">
            If you'd like to connect or have any questions, don't hesitate to reach out through the links below.
          </p>
          
          <div className="contact-links">
            <a 
              href="https://www.linkedin.com/in/uhdlee/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
              <span>/uhdlee</span>
            </a>
            
            <a 
              href="https://github.com/uyhyunlee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <img src={githubIcon} alt="GitHub" className="contact-icon" />
              <span>/uyhyunlee</span>
            </a>
            
            <a 
              href="mailto:danieluhlee@gmail.com"
              className="contact-link"
            >
              <img src={mailIcon} alt="Email" className="contact-icon" />
              <span>danieluhlee@gmail.com</span>
            </a>
            
            <div className="contact-link contact-link-inactive">
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <span>(778) 779-0341</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for when drawer is open */}
      {isContactDrawerOpen && <div className="overlay" onClick={toggleContactDrawer}></div>}
    </>
  );
}

export default Navbar; 