import { Link, useLocation } from 'react-router-dom';
import danielLogo from '../assets/figma/daniel-logo.svg';

const tabs = [
  { label: 'intro', path: '/' },
  { label: 'work', path: '/work' },
  { label: 'me', path: '/about' },
];

function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="pt-8 md:pt-[52px]">
      <div className="max-w-[491px]">
        <img src={danielLogo} alt="Daniel Lee logo" className="h-[31px] w-8" />
        <h1 className="mt-[65px] text-[28px] leading-none font-normal md:text-4xl">daniel lee</h1>
        <p className="mt-[18px] text-sm leading-normal text-muted md:text-[15px]">
          Building products to solve problems (and for fun)
          <br />
          Currently building Spawn, and previously at Scotiabank. Lets connect!
        </p>
      </div>

      <nav className="mt-9 mb-[18px] flex items-center gap-[7px]" aria-label="Primary">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`inline-flex h-[30px] min-w-[82px] items-center justify-center rounded-[5px] px-6 py-1.5 text-sm text-tab transition-colors ${
              isActive(tab.path)
                ? 'bg-tab-active shadow-[inset_0_-4px_5px_rgba(0,0,0,0.05)]'
                : 'hover:bg-tab-active/60'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      <hr className="m-0 border-0 border-t border-border" />
    </header>
  );
}

export default Header;
