import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 'spawn',
    label: 'Spawn',
    year: '2026',
    caption: 'An app that helps you spontaneously make plans with friends!',
    variant: 'spawn' as const,
    cardHeight: 'tall' as const,
  },
  {
    id: 'blueprint',
    label: 'BluePrint',
    year: '2025',
    caption: 'A networking conference where over 200+ students got their start in tech.',
    variant: 'blueprint' as const,
    cardHeight: 'tall' as const,
  },
  {
    id: 'scotia',
    label: 'Scotia',
    year: '2025',
    caption: 'Building products to make business banking easier.',
    variant: 'scotia' as const,
    cardHeight: 'short' as const,
  },
  {
    id: 'hypersecu',
    label: 'Hypersecu',
    year: '2025',
    caption: 'Developing software to prevent people from hacking your devices.',
    variant: 'hypersecu' as const,
    cardHeight: 'short' as const,
  },
  {
    id: 'stories-about-here',
    label: 'About Here',
    year: '2024',
    caption: 'Educating the public on civic & urban planning issues through cool videos.',
    variant: 'about-here' as const,
    cardHeight: 'short' as const,
  },
];

function Work() {
  return (
    <div className="pt-[25px] pb-16 md:pb-20">
      <div className="grid grid-cols-1 gap-x-[15px] md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            to={`/work/${project.id}`}
            variant={project.variant}
            label={project.label}
            year={project.year}
            caption={project.caption}
            cardHeight={project.cardHeight}
            captionOnHover
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
