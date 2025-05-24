import { useParams } from 'react-router-dom';
import SpawnDetail from './SpawnDetail';
import StoriesAboutHereDetail from './StoriesAboutHereDetail';
import './ProjectDetail.css';

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Route to specific project components
  if (projectId === 'spawn') {
    return <SpawnDetail />;
  }
  
  if (projectId === 'stories-about-here') {
    return <StoriesAboutHereDetail />;
  }
  
  // Default case for other projects
  return (
    <div className="project-detail-container">
      <h1>Project: {projectId}</h1>
      <p>This is a placeholder for the {projectId} project details page.</p>
      <p>More information will be added in a future update.</p>
    </div>
  );
}

export default ProjectDetail; 