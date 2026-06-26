import { Link } from 'react-router-dom';

type ProjectCardProps = {
  to: string;
  image?: string;
  imageAlt?: string;
  variant?: 'spawn' | 'image' | 'logo';
  label: string;
  year: string;
  caption: string;
  spawnFlower?: string;
};

function ProjectCard({
  to,
  image,
  imageAlt,
  variant = 'image',
  label,
  year,
  caption,
  spawnFlower,
}: ProjectCardProps) {
  const mediaClasses =
    variant === 'spawn'
      ? 'flex items-center justify-center bg-spawn'
      : variant === 'logo'
        ? 'flex items-center justify-center border border-[#b9b9b9] bg-white'
        : '';

  const imageClasses =
    variant === 'logo'
      ? 'h-auto w-auto max-h-[55%] max-w-[55%] object-contain'
      : 'h-full w-full object-cover';

  return (
    <article className="flex min-w-0 flex-col gap-[18px]">
      <Link to={to} className="block">
        <div className={`relative aspect-[699/300] overflow-hidden rounded-[5px] ${mediaClasses}`}>
          {variant === 'spawn' ? (
            <div className="flex items-center gap-2.5">
              {spawnFlower && (
                <img src={spawnFlower} alt="" className="h-[46px] w-[50px]" aria-hidden="true" />
              )}
              <span className="font-fredoka text-[32px] leading-none font-medium text-white md:text-[39px]">
                spawn
              </span>
            </div>
          ) : (
            image && <img src={image} alt={imageAlt ?? ''} className={imageClasses} />
          )}
          <span className="absolute bottom-[17px] left-[17px] inline-flex min-h-7 items-center justify-center rounded-[5px] bg-white px-6 py-1.5 text-xs text-tab shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15)]">
            <strong className="font-bold">{label}</strong>
            {' . '}
            {year}
          </span>
        </div>
      </Link>
      <p className="m-0 text-[15px] leading-normal text-muted">{caption}</p>
    </article>
  );
}

export default ProjectCard;
