import { Link, useLocation } from 'react-router-dom';
import { useDrawer } from '../contexts/DrawerContext';
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
          <h2>Let's Connect</h2>
          <p>Send me a message and I'll get back to you soon.</p>
          {/* Contact form or info would go here */}
        </div>
      </div>

      {/* Overlay for when drawer is open */}
      {isContactDrawerOpen && <div className="overlay" onClick={toggleContactDrawer}></div>}
    </>
  );
}

export default Navbar; 