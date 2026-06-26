import { Link } from 'react-router-dom';
import starIcon from '../assets/star-icon.svg';
import navigateIcon from '../assets/navigate-icon.svg';
import cbcGemCover from '../assets/cbc-gem-cover.webp';

function StoriesAboutHereDetail() {
  return (
    <div className="flex flex-col gap-12 py-[41px] pb-16 md:pb-20">
      <div className="flex flex-col gap-4">
        <h1 className="m-0 text-[32px] font-normal md:text-4xl">Stories About Here</h1>
        <div className="flex items-center gap-2">
          <img src={starIcon} alt="Star icon" className="h-auto w-5" />
          <h2 className="m-0 text-lg font-bold md:text-xl">Video Producer</h2>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={cbcGemCover} alt="Stories About Here cover" className="h-auto w-full max-w-[960px] rounded-[5px] object-cover" />
      </div>

      <div className="flex max-w-[915px] flex-col gap-4 px-4 md:px-6">
        <h3 className="m-0 text-xl font-normal">Project Overview</h3>
        <p className="m-0 text-[15px] leading-relaxed text-muted md:text-base">
          Stories About Here is an eight-episode docuseries that dives deep into a wide range of urban planning and civic issues across Metro Vancouver. From everyday concerns like "Why Public Washrooms Suck in North America" to more deep-rooted challenges such as the "Industrial Land Crisis", the series explores how the design and governance of our cities impact our daily lives. Through storytelling and thoughtful analysis, Stories About Here aims to make urban planning feel relevant, and help viewers better understand their city.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="https://www.youtube.com/c/AboutHere"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-[5px] border border-black px-6 py-3 text-sm text-black transition-colors hover:bg-black hover:text-white"
          >
            Youtube
          </a>
          <a
            href="https://gem.cbc.ca/uytae-lees-stories-about-here/s01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-[5px] border border-black px-6 py-3 text-sm text-black transition-colors hover:bg-black hover:text-white"
          >
            CBC Gem
          </a>
          <a
            href="https://www.instagram.com/aboutherevideos/"
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
          As a Video Producer at About Here, I developed industry-standard camera and editing skills, created visually engaging media, and learned how to navigate the ever-changing demands of digital marketing. But most importantly, I learned how to tell a compelling story. While it may sound simple, strong storytelling is what truly elevates content, it's the difference between being seen and being remembered. Practicing fundamentals like crafting a strong hook and delivering a clear call to action has not only improved my content but has also made me a more effective communicator and a more confident, social person.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-[960px] overflow-hidden rounded-[5px] bg-black">
          <iframe
            width="100%"
            height="540"
            src="https://www.youtube.com/embed/d_ZhkZ4hDkI?si=1234567890&start=5"
            title="Stories About Here - My Work"
            className="rounded-[5px] max-md:h-[315px]"
          />
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

export default StoriesAboutHereDetail;
