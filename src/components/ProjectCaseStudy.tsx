import { Link } from 'react-router-dom';
import danielLogo from '../assets/figma/daniel-logo.svg';
import spawnFlower from '../assets/figma/spawn-flower.svg';
import {
  heroLogos,
  linkIcons,
  type Project,
} from '../data/projects';

type ProjectCaseStudyProps = {
  project: Project;
};

function asParagraphs(value: string | string[]) {
  return Array.isArray(value) ? value : [value];
}

function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const heroLogo = heroLogos[project.hero.variant];

  return (
    <article className="pb-16 md:pb-20">
      <div className="flex items-center gap-3.5 pt-8 md:pt-[52px]">
        <Link to="/" aria-label="Home">
          <img src={danielLogo} alt="" className="h-[31px] w-8" />
        </Link>
        <p className="m-0 text-[15px] text-muted">
          <Link to="/work" className="transition-colors hover:text-black">
            Work
          </Link>
          {'  >  '}
          {project.title}
        </p>
      </div>

      <div
        className="mt-10 flex aspect-[1391/434] w-full items-center justify-center rounded-[5px] md:mt-[60px]"
        style={{ backgroundColor: project.hero.bgColor }}
      >
        {project.hero.variant === 'spawn' ? (
          <div className="flex items-center gap-3 md:gap-5">
            <img
              src={spawnFlower}
              alt=""
              className="h-[72px] w-[79px] md:h-[92px] md:w-[101px]"
              aria-hidden="true"
            />
            <span className="font-fredoka text-[48px] leading-none font-medium text-white md:text-[78px]">
              spawn
            </span>
          </div>
        ) : (
          <img src={heroLogo.src} alt={heroLogo.alt} className={heroLogo.className} />
        )}
      </div>

      {project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 md:mt-[17px]">
          <span className="text-base text-[#878787]">{project.linksLabel}</span>
          {project.links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base text-black transition-opacity hover:opacity-70"
            >
              {link.icon && (
                <img src={linkIcons[link.icon]} alt="" className="size-4" aria-hidden="true" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      )}

      <h1 className="mt-10 text-[28px] leading-none font-semibold md:mt-[55px] md:text-[36px]">
        {project.title}
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-9 md:grid-cols-[minmax(0,443px)_minmax(0,734px)] md:gap-x-[147px]">
        <div className="flex flex-col gap-[69px]">
          <div>
            <p className="m-0 text-base text-[#878787]">role</p>
            <p className="m-0 mt-1.5 text-base text-black">{project.meta.role}</p>
          </div>
          <div>
            <p className="m-0 text-base text-[#878787]">timeline</p>
            <p className="m-0 mt-1.5 text-base text-black">{project.meta.timeline}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[69px]">
          <div>
            <p className="m-0 text-base text-[#878787]">skills</p>
            <p className="m-0 mt-1.5 text-base text-black">{project.meta.skills}</p>
          </div>
          <div>
            <p className="m-0 text-base text-[#878787]">location</p>
            <p className="m-0 mt-1.5 text-base text-black">{project.meta.location}</p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-12 md:mt-[76px] md:gap-16">
        {project.sections.map((section) => {
          const summaries = section.summary ? asParagraphs(section.summary) : [];
          const bodies = asParagraphs(section.body);

          if (section.fullWidth) {
            return (
              <section key={section.label}>
                <p className="m-0 text-base text-[#878787]">{section.label}</p>
                <div className="mt-1.5 flex flex-col gap-4">
                  {bodies.map((paragraph, index) => (
                    <p key={index} className="m-0 max-w-[1324px] text-base leading-normal text-black">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            );
          }

          return (
            <section
              key={section.label}
              className="grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,443px)_minmax(0,734px)] md:gap-x-[147px]"
            >
              <div>
                <p className="m-0 text-base text-[#878787]">{section.label}</p>
                <div className="mt-1.5 flex flex-col gap-4">
                  {summaries.map((line, index) => (
                    <p key={index} className="m-0 text-xl leading-normal text-black">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 md:pt-7">
                {bodies.map((paragraph, index) => (
                  <p key={index} className="m-0 text-base leading-normal text-black">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}

export default ProjectCaseStudy;
