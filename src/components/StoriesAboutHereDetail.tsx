import { Link } from 'react-router-dom';
import starIcon from '../assets/star-icon.svg';
import navigateIcon from '../assets/navigate-icon.svg';
import cbcGemCover from '../assets/cbc-gem-cover.png';
import './ProjectDetail.css';

function StoriesAboutHereDetail() {
  return (
    <div className="project-detail-container">
      {/* Title and Role Combined */}
      <div className="project-header-section">
        <h1 className="project-main-title">Stories About Here</h1>
        <div className="project-role-section">
          <img src={starIcon} alt="Star icon" className="project-star-icon" />
          <h2 className="project-role">Video Producer</h2>
        </div>
      </div>
      
      {/* Cover Photo */}
      <div className="project-cover-section">
        <img src={cbcGemCover} alt="Stories About Here cover" className="project-cover-image" />
      </div>
      
      {/* Project Overview with Links */}
      <div className="project-overview-section">
        <h3 className="section-title">Project Overview</h3>
        <p className="section-text">
          Stories About Here is an eight-episode docuseries that dives deep into a wide range of urban planning and civic issues across Metro Vancouver. From everyday concerns like "Why Public Washrooms Suck in North America" to more deep-rooted challenges such as the "Industrial Land Crisis", the series explores how the design and governance of our cities impact our daily lives. Through storytelling and thoughtful analysis, Stories About Here aims to make urban planning feel relevant, and help viewers better understand their city.
        </p>
        <div className="project-links-section">
          <a href="https://www.youtube.com/c/AboutHere" target="_blank" rel="noopener noreferrer" className="project-link">
            Youtube
          </a>
          <a href="https://gem.cbc.ca/uytae-lees-stories-about-here/s01" target="_blank" rel="noopener noreferrer" className="project-link">
            CBC Gem
          </a>
          <a href="https://www.instagram.com/aboutherevideos/" target="_blank" rel="noopener noreferrer" className="project-link">
            Instagram
          </a>
        </div>
      </div>
      
      {/* Role Description */}
      <div className="project-role-description-section">
        <h3 className="section-title">My Role</h3>
        <p className="section-text">
          As a Video Producer at About Here, I developed industry-standard camera and editing skills, created visually engaging media, and learned how to navigate the ever-changing demands of digital marketing. But most importantly, I learned how to tell a compelling story. While it may sound simple, strong storytelling is what truly elevates content, it's the difference between being seen and being remembered. Practicing fundamentals like crafting a strong hook and delivering a clear call to action has not only improved my content but has also made me a more effective communicator and a more confident, social person.
        </p>
      </div>
      
      {/* YouTube Video */}
      <div className="project-video-section">
        <div className="video-container">
          <iframe
            width="100%"
            height="540"
            src="https://www.youtube.com/embed/d_ZhkZ4hDkI?si=1234567890&start=5"
            title="Stories About Here - My Work"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
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

export default StoriesAboutHereDetail; 