import { useParams } from 'react-router-dom';
import SpawnDetail from './SpawnDetail';
import StoriesAboutHereDetail from './StoriesAboutHereDetail';

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();

  if (projectId === 'spawn') {
    return <SpawnDetail />;
  }

  if (projectId === 'stories-about-here') {
    return <StoriesAboutHereDetail />;
  }

  return (
    <div className="py-[41px] pb-16 md:pb-20">
      <h1>Project: {projectId}</h1>
      <p className="text-muted">This is a placeholder for the {projectId} project details page.</p>
      <p className="text-muted">More information will be added in a future update.</p>
    </div>
  );
}

export default ProjectDetail;
