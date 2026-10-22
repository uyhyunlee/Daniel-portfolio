import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import spawnFlower from '../assets/figma/spawn-flower.svg';
import blueprintBrand from '../assets/figma/blueprint-brand.png';
import scotiabankLogo from '../assets/figma/scotiabank-logo.png';
import hypersecuWhite from '../assets/figma/hypersecu-white.png';
import aboutHereLogo from '../assets/figma/about-here-logo.png';

type ProjectCardVariant =
  | 'spawn'
  | 'image'
  | 'blueprint'
  | 'scotia'
  | 'hypersecu'
  | 'about-here';

type ProjectCardProps = {
  to: string;
  image?: string;
  imageAlt?: string;
  variant?: ProjectCardVariant;
  label: string;
  year: string;
  caption: string;
  captionOnHover?: boolean;
  cardHeight?: 'tall' | 'short';
  bgColor?: string;
};

function ProjectCard({
  to,
  image,
  imageAlt,
  variant = 'image',
  label,
  year,
  caption,
  captionOnHover = false,
  cardHeight = 'tall',
  bgColor,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  const heightClass = cardHeight === 'tall' ? 'aspect-[699/291]' : 'aspect-[699/278]';

  const backgroundStyle =
    bgColor ??
    (variant === 'spawn'
      ? '#6b81fb'
      : variant === 'blueprint'
        ? '#0e1531'
        : variant === 'scotia'
          ? '#fd3b3b'
          : variant === 'hypersecu'
            ? '#00a3cf'
            : variant === 'about-here'
              ? '#000000'
              : undefined);

  const renderMedia = () => {
    switch (variant) {
      case 'spawn':
        return (
          <div className="flex items-center gap-2.5">
            <img src={spawnFlower} alt="" className="h-[46px] w-[50px]" aria-hidden="true" />
            <span className="font-fredoka text-[32px] leading-none font-medium text-white md:text-[39px]">
              spawn
            </span>
          </div>
        );
      case 'blueprint':
        return (
          <img
            src={blueprintBrand}
            alt="BluePrint logo"
            className="h-[58px] w-auto max-w-none"
          />
        );
      case 'scotia':
        return (
          <img
            src={scotiabankLogo}
            alt="Scotiabank logo"
            className="h-[57px] w-auto max-w-none"
          />
        );
      case 'hypersecu':
        return (
          <img
            src={hypersecuWhite}
            alt="Hypersecu logo"
            className="h-[37px] w-auto max-w-none"
          />
        );
      case 'about-here':
        return (
          <img
            src={aboutHereLogo}
            alt="About Here logo"
            className="h-[113px] w-[98px] max-w-none"
          />
        );
      default:
        return image ? (
          <img src={image} alt={imageAlt ?? ''} className="h-full w-full object-cover" />
        ) : null;
    }
  };

  const isBrandCard = variant !== 'image';

  return (
    <article
      className="min-w-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={to} className="block">
        <div
          className={`relative overflow-hidden rounded-[5px] ${heightClass} ${
            isBrandCard ? 'flex items-center justify-center' : ''
          }`}
          style={{ backgroundColor: backgroundStyle }}
        >
          {renderMedia()}
          <span className="absolute bottom-[17px] left-[17px] inline-flex min-h-7 items-center justify-center rounded-[5px] bg-white px-6 py-1.5 text-xs text-tab shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15)]">
            <strong className="font-bold">{label}</strong>
            {' . '}
            {year}
          </span>
        </div>
      </Link>

      {captionOnHover ? (
        <motion.p
          aria-hidden={!hovered}
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={`m-0 mt-[18px] min-h-[2.5em] text-[15px] leading-normal text-muted ${
            hovered ? '' : 'pointer-events-none'
          }`}
        >
          {caption}
        </motion.p>
      ) : (
        <p className="m-0 mt-[18px] text-[15px] leading-normal text-muted">{caption}</p>
      )}
    </article>
  );
}

export default ProjectCard;
