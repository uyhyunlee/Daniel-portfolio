import { Link } from 'react-router-dom';
import spawnFlower from './assets/figma/spawn-flower.svg';
import blueprintCover from './assets/bp-cover.webp';
import ProjectCard from './components/ProjectCard';
import LogoIdeation from './components/LogoIdeation';

function App() {
  return (
    <>
      <section className="pt-[41px]">
        <div className="mb-[18px] flex items-center justify-between">
          <h2 className="m-0 text-xl font-normal">my favs</h2>
          <Link to="/work" className="text-[15px] text-muted transition-colors hover:text-black">
            See all
          </Link>
        </div>

        <div className="mb-[41px] grid grid-cols-1 gap-[15px] md:grid-cols-2">
          <ProjectCard
            to="/work/spawn"
            variant="spawn"
            spawnFlower={spawnFlower}
            label="Spawn"
            year="2026"
            caption="An app that helps you spontaneously make plans with friends!"
          />
          <ProjectCard
            to="/work/blueprint"
            image={blueprintCover}
            imageAlt="BluePrint conference"
            label="BluePrint"
            year="2025"
            caption="A networking conference where over 200+ students got their start in tech."
          />
        </div>
      </section>

      <hr className="m-0 border-0 border-t border-border" />

      <LogoIdeation />
    </>
  );
}

export default App;
