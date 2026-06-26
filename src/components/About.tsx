import friendsImage from '../assets/friends.webp';
import speakingImage from '../assets/bp-speaking.webp';

function About() {
  return (
    <div className="py-[41px] pb-16 md:pb-20">
      <h2 className="mb-8 text-xl font-normal">a little more about me</h2>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_277px]">
        <div className="flex flex-col gap-8">
          <p className="m-0 text-[15px] leading-relaxed text-muted">
            I am a <strong className="font-bold text-black">software developer, videographer, and recreational hooper</strong> based in
            Vancouver. I love to build, whether it be with lego, code, or a camera. This
            passion led me to study Business and Computer Science at UBC, where I
            learned that doing is better than thinking (in most contexts).
          </p>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[379px_1fr]">
            <div>
              <img src={friendsImage} alt="Friends at the beach" className="w-full rounded-[5px] object-cover" />
            </div>
            <p className="m-0 text-[15px] leading-relaxed text-muted">
              Throughout my university career, I focused on <strong className="font-bold text-black">building
              with purpose</strong>, always aiming to create genuine value for the
              communities around me. I've taken on roles as a software
              engineer at startups, organized tech conferences, and even
              launched my own ventures.
            </p>
          </div>
        </div>

        <div className="max-w-80 lg:max-w-none">
          <img src={speakingImage} alt="Daniel speaking at a conference" className="w-full rounded-[5px] object-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;
