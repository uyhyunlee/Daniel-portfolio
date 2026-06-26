import navigateIcon from '../assets/navigate-icon.svg';
import spawnFlower from '../assets/figma/spawn-flower.svg';
import storiesCover from '../assets/stories-about-here-cover.webp';
import blueprintCover from '../assets/bp-cover.webp';
import hypersecuLogo from '../assets/hypersecu-logo.webp';
import ProjectCard from './ProjectCard';

type Project = {
  id: string;
  title: string;
  year: string;
  caption: string;
  variant: 'spawn' | 'image' | 'logo';
  image?: string;
  alt?: string;
};

const projects: Project[] = [
  {
    id: 'spawn',
    title: 'Spawn',
    year: '2026',
    caption: 'An app that helps you spontaneously make plans with friends!',
    variant: 'spawn',
  },
  {
    id: 'stories-about-here',
    title: 'Stories About Here',
    year: '2024',
    caption: 'A documentary series exploring local stories and community voices.',
    variant: 'image',
    image: storiesCover,
    alt: 'Stories About Here cover',
  },
  {
    id: 'blueprint',
    title: 'BluePrint',
    year: '2025',
    caption: 'A networking conference where over 200+ students got their start in tech.',
    variant: 'image',
    image: blueprintCover,
    alt: 'BluePrint cover',
  },
  {
    id: 'hypersecu',
    title: 'Hypersecu',
    year: '2023',
    caption: 'Software engineering work on security-focused hardware authentication products.',
    variant: 'logo',
    image: hypersecuLogo,
    alt: 'Hypersecu logo',
  },
];

function Work() {
  return (
    <div className="py-[41px] pb-16 md:pb-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="m-0 text-xl font-normal">all work</h2>
        <a
          href="https://drive.google.com/file/d/1pAIU5P2KMh0gHQCaqQQFyKVTfFH6uklX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[15px] text-muted transition-colors hover:text-black"
        >
          Full Resume
          <img src={navigateIcon} alt="" className="h-auto w-3" aria-hidden="true" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-[15px] md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            to={`/work/${project.id}`}
            variant={project.variant}
            spawnFlower={project.variant === 'spawn' ? spawnFlower : undefined}
            image={project.image}
            imageAlt={project.alt}
            label={project.title}
            year={project.year}
            caption={project.caption}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
