import { useParams } from 'react-router-dom';
import ProjectCaseStudy from './ProjectCaseStudy';
import { projects } from '../data/projects';

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projects[projectId] : undefined;

  if (!project) {
    return (
      <div className="py-[41px] pb-16 md:pb-20">
        <h1 className="m-0 text-[28px] font-semibold md:text-[36px]">Project not found</h1>
        <p className="mt-4 text-base text-muted">
          This project page doesn&apos;t exist yet.
        </p>
      </div>
    );
  }

  return <ProjectCaseStudy project={project} />;
}

export default ProjectDetail;
