import speakingImage from '../assets/figma/about-speaking.jpg';

function About() {
  return (
    <section className="pt-[55px]">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-[37px]">
        <img
          src={speakingImage}
          alt="Daniel speaking at BluePrint"
          width={219}
          height={329}
          className="h-[329px] w-[219px] shrink-0 rounded-[5px] object-cover"
        />

        <div className="max-w-[709px] text-base leading-normal text-black">
          <p>Hi I&apos;m Daniel.</p>
          <div className="mt-[11px] flex flex-col gap-4">
            <p>
              I&apos;m a Korean-canadian (이의현), born and raised in Langley, BC, Canada. Growing up my parents
              would always tell me that...
            </p>
            <p>&quot;실패는 성공의 어머니&quot; or in english, &quot;failure is the mother of success&quot;</p>
            <p>
              Whether it was learning to code, leading teams, building projects, applying for opportunities, or
              navigating life&apos;s uncertainties, I&apos;ve found that nearly every meaningful achievement was
              preceded by mistakes, setbacks, and moments of doubt. Failure wasn&apos;t the opposite of success, it
              was part of the process.
            </p>
            <p>If there&apos;s one thing you take away from my site, I hope it&apos;s this saying.</p>
          </div>
        </div>
      </div>

      <hr className="mt-20 border-0 border-t border-border" />
    </section>
  );
}

export default About;
