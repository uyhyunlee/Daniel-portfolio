import starIcon from '../assets/star-icon.svg';
import friendsImage from '../assets/friends.png';
import speakingImage from '../assets/bp-speaking.png';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-title">
          <img src={starIcon} alt="Star icon" className="about-star-icon" />
          <h1>A little more about me...</h1>
        </div>
        
        <div className="about-content">
          <div className="about-text-section">
            <p>
              I am a <strong>software developer, videographer, and recreational hooper</strong> based in
              Vancouver. I love to build, whether it be with lego, code, or a camera. This
              passion led me to study Business and Computer Science at UBC, where I
              learned that doing is better than thinking (in most contexts).
            </p>
            
            <div className="about-flex-row">
              <div className="about-image-container">
                <img src={friendsImage} alt="Friends at the beach" />
              </div>
              
              <div className="about-paragraph">
                <p>
                  Throughout my university career, I focused on <strong>building
                  with purpose</strong>, always aiming to create genuine value for the
                  communities around me. I've taken on roles as a software
                  engineer at startups, organized tech conferences, and even
                  launched my own ventures
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-image-large">
            <img src={speakingImage} alt="Daniel speaking at a conference" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 