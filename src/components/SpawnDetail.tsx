import { Link } from 'react-router-dom';
import starIcon from '../assets/star-icon.svg';
import navigateIcon from '../assets/navigate-icon.svg';
import spawnCoverPhoto from '../assets/spawn-cover-photo.webp';
import spawnHome from '../assets/spawn-home.webp';
import spawnMap from '../assets/spawn-map.webp';
import spawnIconSkeleton from '../assets/spawn-icon-skeleton.webp';
import spawnApp from '../assets/spawn-app.webp';

function SpawnDetail() {
  return (
    <div className="flex flex-col gap-12 py-[41px] pb-16 md:pb-20">
      <div className="flex flex-col gap-4">
        <h1 className="m-0 text-[32px] font-normal md:text-4xl">Spawn Mobile App</h1>
        <div className="flex items-center gap-2">
          <img src={starIcon} alt="Star icon" className="h-auto w-5" />
          <h2 className="m-0 text-lg font-bold md:text-xl">Co-founder</h2>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={spawnCoverPhoto} alt="Spawn cover" className="h-auto w-full max-w-[960px] rounded-[5px] object-cover" />
      </div>

      <div className="flex max-w-[915px] flex-col gap-4 px-4 md:px-6">
        <h3 className="m-0 text-xl font-normal">Project Overview</h3>
        <p className="m-0 text-[15px] leading-relaxed text-muted md:text-base">
          Spawn is a mobile app that lets you discover and join your friends' activities in real time while effortlessly sharing your own impromptu plans. Spawn integrates an activity feed, smart notifications, customizable filters, and an interactive activity map to make coordinating casual hangouts with friends effortless.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="https://getspawn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-[5px] border border-black px-6 py-3 text-sm text-black transition-colors hover:bg-black hover:text-white"
          >
            Website
          </a>
          <a
            href="https://github.com/Daggerpov/Spawn-App-iOS-SwiftUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-[5px] border border-black px-6 py-3 text-sm text-black transition-colors hover:bg-black hover:text-white"
          >
            Github
          </a>
          <a
            href="https://www.instagram.com/spawnapp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-[5px] border border-black px-6 py-3 text-sm text-black transition-colors hover:bg-black hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="flex max-w-[915px] flex-col gap-4 px-4 md:px-6">
        <h3 className="m-0 text-xl font-normal">My Role</h3>
        <p className="m-0 text-[15px] leading-relaxed text-muted md:text-base">
          As a co-founder of Spawn, I wore many hats. I coded in Swift to build out our mobile interfaces, crafted marketing videos that captured the spirit of spontaneity and living fully in your 20s, and managed product roadmaps and user stories to keep our team aligned. But above all, my greatest role was being a leader: bringing clarity, motivation, and steady decision-making to the table. Spawn pushed me to grow as a communicator, a critical thinker, and a builder with vision.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex w-full max-w-[960px] flex-col gap-8 rounded-[5px] bg-spawn/25 p-8 md:flex-row md:gap-12 md:p-14">
          <div className="flex flex-1 flex-col justify-between">
            <img src={spawnHome} alt="Spawn home screen" className="w-full rounded-[10px] object-cover" />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <img src={spawnMap} alt="Spawn map screen" className="w-full rounded-[10px] object-cover" />
          </div>
          <div className="flex flex-1 flex-col justify-between gap-6 md:gap-6">
            <img src={spawnIconSkeleton} alt="Spawn icon skeleton" className="w-full rounded-[10px] object-cover" />
            <img src={spawnApp} alt="Spawn app icon" className="w-full rounded-[10px] object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center md:justify-end">
        <Link to="/work" className="flex items-center gap-2 text-xl text-[#4B4B4B] transition-opacity hover:opacity-70">
          View more work
          <img src={navigateIcon} alt="Navigate icon" className="h-auto w-3" />
        </Link>
      </div>
    </div>
  );
}

export default SpawnDetail;
