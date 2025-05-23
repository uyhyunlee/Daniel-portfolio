import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Project details would be loaded based on projectId
  // This is a placeholder until project details are provided
  
  return (
    <div className="project-detail-container">
      <h1>Project: {projectId}</h1>
      <p>This is a placeholder for the {projectId} project details page.</p>
      <p>More information will be added in a future update.</p>
    </div>
  );
}

export default ProjectDetail; 