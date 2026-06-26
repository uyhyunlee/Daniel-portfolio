import { Link } from 'react-router-dom';
import danielLogo from '../assets/figma/daniel-logo.svg';
import moonIcon from '../assets/figma/moon-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import githubIcon from '../assets/github-icon.svg';
import mailIcon from '../assets/mail-icon.svg';
import phoneIcon from '../assets/phone-icon.svg';

function getVancouverTime() {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Vancouver',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date());
}

function Footer() {
  const time = getVancouverTime();

  return (
    <footer className="mt-auto pb-8 md:pb-12">
      <hr className="mb-12 border-0 border-t border-border" />

      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.5fr_1fr] lg:gap-8">
        <div>
          <div className="mb-4 flex items-center gap-[18px]">
            <img src={danielLogo} alt="Daniel Lee logo" className="h-[31px] w-8" />
            <span className="text-[28px] leading-none md:text-4xl">daniel lee</span>
          </div>
          <div className="flex items-center gap-2 text-[15px] text-muted">
            <img src={moonIcon} alt="" className="h-4 w-4 rotate-[142deg]" aria-hidden="true" />
            <span>{time}, Vancouver</span>
          </div>
        </div>

        <p className="mt-2 max-w-[180px] text-[15px] leading-snug text-muted">
          this is a react app last updated on Jun. 4th 2026
        </p>

        <nav className="flex flex-col gap-2.5 pt-2" aria-label="Footer">
          <Link to="/" className="text-[15px] text-muted transition-colors hover:text-black">
            Intro
          </Link>
          <Link to="/work" className="text-[15px] text-muted transition-colors hover:text-black">
            Work
          </Link>
          <Link to="/about" className="text-[15px] text-muted transition-colors hover:text-black">
            About
          </Link>
        </nav>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <p className="m-0 text-[15px] text-black">Lets connect!</p>
          <div className="flex items-center gap-[11px]">
            <a
              href="https://www.linkedin.com/in/uhdlee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-6 w-6 items-center justify-center"
            >
              <img src={linkedinIcon} alt="" className="h-6 w-6 object-contain" />
            </a>
            <a
              href="https://github.com/uyhyunlee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-6 w-6 items-center justify-center"
            >
              <img src={githubIcon} alt="" className="h-6 w-6 object-contain" />
            </a>
            <a href="mailto:danieluhlee@gmail.com" aria-label="Email" className="flex h-6 w-6 items-center justify-center">
              <img src={mailIcon} alt="" className="h-6 w-6 object-contain" />
            </a>
            <a href="tel:+17787790341" aria-label="Phone" className="flex h-6 w-6 items-center justify-center">
              <img src={phoneIcon} alt="" className="h-6 w-6 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
