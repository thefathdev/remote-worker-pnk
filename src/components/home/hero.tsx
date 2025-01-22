import Image from "next/image";
import { CtaButton } from "./cta-button";

export function Hero() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="p-7 flex flex-col gap-8 border border-[#F3F3F3] bg-[#FBFBFB] rounded-[2.5rem]">
        <h1 className="font-satoshi font-bold text-[4rem] leading-[1.2] text-black">
          Remote Worker Pontianak
        </h1>

        <p className="">
          Remote Worker Pontianak (RWP) now becomes a community where active
          collaboration and sharing of knowledge happens.
        </p>

        {/* CTA Button */}
        <CtaButton />
      </div>

      {/* Hero Carousel */}

      <div className=" bg-[#FBFBFB] rounded-[2.5rem] overflow-hidden relative">
        <Image
          src="/hero/hero-1.jpg"
          alt=""
          width={640}
          height={640}
          className="absolute inset-0 object-cover h-full"
        />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
          <div className="bg-white h-3 w-10 rounded-full"></div>
          <div className="bg-[#DFE2E4] opacity-80 h-3 w-3 rounded-full"></div>
          <div className="bg-[#DFE2E4] opacity-80 h-3 w-3 rounded-full"></div>
          <div className="bg-[#DFE2E4] opacity-80 h-3 w-3 rounded-full"></div>
          <div className="bg-[#DFE2E4] opacity-80 h-3 w-3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
