import logoCharacters from '../assets/figma/logo-characters.png';
import logoAlts from '../assets/figma/logo-alts.png';
import logoFinal from '../assets/figma/logo-final.png';
import arrow1 from '../assets/figma/arrow-1-frame.png';
import arrow2 from '../assets/figma/arrow-2-frame.png';
import arrow3 from '../assets/figma/arrow-3-frame.png';

function LogoIdeation() {
  return (
    <section className="pb-20 pt-[41px]">
      <h2 className="text-xl font-normal">logo ideation</h2>

      <div className="flex min-h-[406px] items-start justify-center">
        {/* 1 — Korean name + description */}
        <div className="flex w-[237px] shrink-0 flex-col gap-[54px] pt-[162px]">
          <p className="m-0 pl-[49px] text-[48px] leading-none">이의현</p>
          <p className="m-0 text-[15px] leading-snug text-muted">
            <span>1.</span> I wanted to represent my heritage in my logo and so ideation began at my roots: my korean name, 이의현.
          </p>
        </div>

        {/* 2 — Arrow 1 frame */}
        <div className="ml-[5px] shrink-0 pt-[158px]">
          <img
            src={arrow1}
            alt=""
            className="h-[161px] w-[60px] max-w-none"
            aria-hidden="true"
          />
        </div>

        {/* 3 — Logo characters + description */}
        <div className="ml-[24px] flex w-[302px] shrink-0 flex-col gap-12 pt-[95px]">
          <p className="m-0 text-[15px] leading-snug text-muted">
            <span>2.</span> I wanted to see if I could manipulate my korean characters in a meaningful way
          </p>
          <img
            src={logoCharacters}
            alt="Decomposed Korean characters forming a face"
            className="ml-[93px] h-[129px] w-[116px] max-w-none"
          />
        </div>

        {/* 4 — Arrow 2 frame */}
        <div className="ml-[30px] shrink-0 pt-[147px]">
          <img
            src={arrow2}
            alt=""
            className="h-[217px] w-[33px] max-w-none"
            aria-hidden="true"
          />
        </div>

        {/* 5 — Alternate logos + description */}
        <div className="ml-[34px] flex w-[194px] shrink-0 flex-col gap-[52px] pt-[120px]">
          <img
            src={logoAlts}
            alt="Alternative logo explorations"
            className="ml-[57px] h-[177px] w-[62px] max-w-none"
          />
          <p className="m-0 text-[15px] leading-snug text-muted">
            <span>3.</span> Some alternatives, but didn&apos;t give the vibe I wanted: fun and playful
          </p>
        </div>

        {/* 6 — Arrow 3 frame */}
        <div className="ml-[19px] shrink-0 pt-[113px]">
          <img
            src={arrow3}
            alt=""
            className="h-[230px] w-[57px] max-w-none"
            aria-hidden="true"
          />
        </div>

        {/* 7 — Final logo + description */}
        <div className="ml-[34px] flex w-[152px] shrink-0 flex-col gap-11 pt-[73px]">
          <p className="m-0 text-[15px] leading-snug text-muted">
            <span>4.</span> Ultimately went with this goofy face
          </p>
          <img
            src={logoFinal}
            alt="Final Daniel Lee logo"
            className="ml-[9px] h-[125px] w-[128px] max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

export default LogoIdeation;
