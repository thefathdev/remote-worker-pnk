import { SparklesCore } from "../animated-ui/sparkles";

export function CtaSection() {
  return (
    <div className="p-7 max-sm:scroll-mt-10 flex flex-col gap-10 items-center justify-center border border-[#F3F3F3] relative rounded-[2.5rem] overflow-hidden min-h-[370px] max-sm:p-4 max-sm:rounded-[2rem] max-sm:gap-10 max-sm:py-14">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="absolute inset-0 object-cover h-full w-full"
        alt=""
        src="/cta.jpg"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[#1c1c1c] opacity-70"></div>

      <h2 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-white relative text-center max-sm:text-[1.75rem] max-sm:px-3">
        Be a part of the Remote Worker Pontianak Community. <br />
        <br className="sm:hidden" /> Connect, Collaborate, and Grow together!
      </h2>

      <div className="flex gap-4 justify-center items-center w-full max-sm:flex-col ">
        {/* Be a speaker button */}
        <div className="flex gap-4 group items-center p-4 rounded-full w-full text-[#1C1C1C] max-w-[225px] bg-white justify-center relative overflow-hidden max-sm:max-w-none">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeCzEEBXy0yQc5t2BgWIHl-rKUfsyen-rU8oXn6zc6alHVpkw/viewform"
            className="absolute inset-0 z-20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Be a Speaker</span>
          </a>
          {/* Gradient blur */}
          <span
            className="w-full block absolute inset-0 h-[70px] -bottom-0 opacity-0 group-hover:opacity-100 translate-y-[90%] transition-all duration-500 ease-in rounded-[100%] blur-[10px] group-hover:blur-[40px]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #008BFF 0%, #C258E7 21%, #F92C8A 40%, #FF1074 58%, #FF5500 77%, #BE0000 96%)",
            }}
          ></span>
          {/* Sparkles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-35 transition-opacity ease-in duration-400 delay-300">
            <SparklesCore
              background="transparent"
              minSize={0.15}
              maxSize={1}
              particleDensity={1400}
              particleColor="#1C1C1C"
            />
          </div>
          <span className="font-medium relative" aria-hidden>
            Be a Speaker
          </span>
        </div>

        {/* Be a mentor button */}
        <div className="flex gap-4 group items-center p-4 rounded-full w-full bg-transparent border border-white max-w-[225px] text-white hover:text-[#1c1c1c] justify-center relative overflow-hidden transition-colors ease-in-out hover:border-transparent hover:bg-white max-sm:max-w-none shadow-[inset_0px_-4px_10px_0px_rgba(0,0,0,0.25)]">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScNXO9gS0m22ZFKp7BQL0lXpzj5lFwwxK0XpiJkcCbtyVhDGA/viewform"
            className="absolute inset-0 z-20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Be a Mentor</span>
          </a>
          <span className="font-medium relative " aria-hidden>
            Be a Mentor
          </span>
        </div>
      </div>
    </div>
  );
}
