import { Link } from 'react-router-dom';
import starIcon from '../assets/star-icon.svg';
import navigateIcon from '../assets/navigate-icon.svg';
import spawnCoverPhoto from '../assets/spawn-cover-photo.png';
import spawnHome from '../assets/spawn-home.png';
import spawnMap from '../assets/spawn-map.png';
import spawnIconSkeleton from '../assets/spawn-icon-skeleton.png';
import spawnApp from '../assets/spawn-app.png';
import './ProjectDetail.css';

function SpawnDetail() {
  return (
    <div className="project-detail-container">
      {/* Title and Role Combined */}
      <div className="project-header-section">
        <h1 className="project-main-title">Spawn Mobile App</h1>
        <div className="project-role-section">
          <img src={starIcon} alt="Star icon" className="project-star-icon" />
          <h2 className="project-role">Co-founder</h2>
        </div>
      </div>
      
      {/* Cover Photo */}
      <div className="project-cover-section">
        <img src={spawnCoverPhoto} alt="Spawn cover" className="project-cover-image" />
      </div>
      
      {/* Project Overview with Links */}
      <div className="project-overview-section">
        <h3 className="section-title">Project Overview</h3>
        <p className="section-text">
          Spawn is a mobile app that lets you discover and join your friends' activities in real time while effortlessly sharing your own impromptu plans. Spawn integrates an activity feed, smart notifications, customizable filters, and an interactive activity map to make coordinating casual hangouts with friends effortless.
        </p>
        <div className="project-links-section">
          <a href="https://getspawn.com/" target="_blank" rel="noopener noreferrer" className="project-link">
            Website
          </a>
          <a href="https://github.com/Daggerpov/Spawn-App-iOS-SwiftUI" target="_blank" rel="noopener noreferrer" className="project-link">
            Github
          </a>
          <a href="https://www.instagram.com/spawnapp/" target="_blank" rel="noopener noreferrer" className="project-link">
            Instagram
          </a>
        </div>
      </div>
      
      {/* Role Description */}
      <div className="project-role-description-section">
        <h3 className="section-title">My Role</h3>
        <p className="section-text">
          As a co-founder of Spawn, I wore many hats. I coded in Swift to build out our mobile interfaces, crafted marketing videos that captured the spirit of spontaneity and living fully in your 20s, and managed product roadmaps and user stories to keep our team aligned. But above all, my greatest role was being a leader: bringing clarity, motivation, and steady decision-making to the table. Spawn pushed me to grow as a communicator, a critical thinker, and a builder with vision.
        </p>
      </div>
      
      {/* More Photos */}
      <div className="project-photos-section">
        <div className="photos-container">
          <div className="photo-column">
            <img src={spawnHome} alt="Spawn home screen" className="project-photo" />
          </div>
          <div className="photo-column">
            <img src={spawnMap} alt="Spawn map screen" className="project-photo" />
          </div>
          <div className="photo-column photo-column-stack">
            <img src={spawnIconSkeleton} alt="Spawn icon skeleton" className="project-photo" />
            <img src={spawnApp} alt="Spawn app icon" className="project-photo" />
          </div>
        </div>
      </div>
      
      {/* View More Work Button */}
      <div className="view-more-work-section">
        <Link to="/work" className="view-more-work-link">
          View more work
          <img src={navigateIcon} alt="Navigate icon" className="navigate-icon" />
        </Link>
      </div>
    </div>
  );
}

export default SpawnDetail; 