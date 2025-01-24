import { CtaButton } from "./cta-button";
import { TextScramble } from "../animated-ui/text-scramble";
import { HeroCarousel } from "./hero-carousel";

export function Hero() {
  return (
    <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 max-sm:gap-8">
      <div className="p-7 flex flex-col gap-8 border border-[#F3F3F3] bg-[#FBFBFB] rounded-[2.5rem] max-sm:rounded-[2rem] max-sm:p-4">
        <h1 className="font-satoshi font-bold text-[4rem] leading-[1.2] text-[#1C1C1C] max-sm:text-[3.5rem]">
          Remote Worker <TextScramble duration={1.2}>Pontianak</TextScramble>
        </h1>

        <p className="">
          Remote Worker Pontianak (RWP) now becomes a community where active
          collaboration and sharing of knowledge happens.
        </p>

        {/* CTA Button */}
        <CtaButton />
      </div>

      {/* Hero Carousel */}
      <HeroCarousel />
    </div>
  );
}
