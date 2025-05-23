import './App.css'
import starIcon from './assets/star-icon.svg'
import portraitImage from './assets/bp-portrait.png'
import { useDrawer } from './contexts/DrawerContext'

function App() {
  const { openContactDrawer } = useDrawer();

  return (
    <div className="app-container">
      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-intro">
              <h2>Hi I'm Daniel <img src={starIcon} alt="Star icon" className="star-icon" /></h2>
            </div>
            <div className="hero-tagline">
              <h1>I love</h1>
              <h1>to <span className="highlight">build</span></h1>
            </div>
          </div>
          <div className="hero-image">
            <img src={portraitImage} alt="Daniel's portrait" />
          </div>
        </div>
        <div className="cta-container">
          <button className="cta-button" onClick={openContactDrawer}>
            build together?
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
