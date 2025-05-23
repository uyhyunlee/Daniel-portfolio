import { Link } from 'react-router-dom';
import starIcon from '../assets/star-icon.svg';
import navigateIcon from '../assets/navigate-icon.svg';
import spawnLogo from '../assets/spawn-logo.png';
import storiesCover from '../assets/stories-about-here-cover.png';
import blueprintCover from '../assets/bp-cover.png';
import hypersecuLogo from '../assets/hypersecu-logo.png';
import './Work.css';

type Project = {
  id: string;
  title: string;
  project: string;
  image: string;
  alt: string;
  className: string;
};

function Work() {
  // Project data
  const projects: Project[] = [
    {
      id: 'spawn',
      title: 'Co-founder',
      project: 'Spawn App',
      image: spawnLogo,
      alt: 'Spawn App logo',
      className: 'spawn-project'
    },
    {
      id: 'stories-about-here',
      title: 'Video Producer',
      project: 'Stories About Here',
      image: storiesCover,
      alt: 'Stories About Here cover',
      className: 'stories-project'
    },
    {
      id: 'blueprint',
      title: 'Project Manager',
      project: 'BluePrint',
      image: blueprintCover,
      alt: 'BluePrint cover',
      className: 'blueprint-project'
    },
    {
      id: 'hypersecu',
      title: 'Software Engineer',
      project: 'Hypersecu',
      image: hypersecuLogo,
      alt: 'Hypersecu logo',
      className: 'hypersecu-project'
    }
  ];

  // Split projects into two columns for staggered layout
  const leftColumn = [projects[0], projects[2]]; // Spawn, BluePrint
  const rightColumn = [projects[1], projects[3]]; // Stories About Here, Hypersecu

  const renderProject = (project: Project) => (
    <div key={project.id} className="gallery-item">
      <Link to={`/work/${project.id}`}>
        <div className={`project-image-container ${project.className}`}>
          <img src={project.image} alt={project.alt} className={`${project.className}-logo`} />
        </div>
        <div className="project-title">
          <img src={starIcon} alt="Star icon" className="work-star-icon" />
          <p><strong>{project.title}</strong> | {project.project}</p>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="work-container">
      <div className="work-gallery">
        <div className="gallery-column">
          {leftColumn.map(renderProject)}
        </div>
        <div className="gallery-column">
          {rightColumn.map(renderProject)}
        </div>
      </div>
      
      <div className="resume-link-container">
        <a 
          href="https://drive.google.com/file/d/1pAIU5P2KMh0gHQCaqQQFyKVTfFH6uklX/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-link"
        >
          Full Resume
          <img src={navigateIcon} alt="Navigate icon" className="navigate-icon" />
        </a>
      </div>
    </div>
  );
}

export default Work; 