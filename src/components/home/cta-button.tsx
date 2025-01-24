"use client";

import { SparklesCore } from "../animated-ui/sparkles";

export function CtaButton() {
  return (
    <div className="flex gap-4 group items-center p-4 rounded-full w-full bg-[#1C1C1C] text-white justify-center relative overflow-hidden">
      <a
        href="https://www.instagram.com/remoteworkerpnk/"
        className="absolute inset-0 z-20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Explore More</span>
      </a>
      {/* Sparkles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity ease-in duration-400 delay-300">
        <SparklesCore
          background="transparent"
          minSize={0.15}
          maxSize={1}
          particleDensity={1400}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r via-50% via-transparent from-black/80 to-black/80"></div>
      <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-[100%] blur-[100px] h-16 w-72 bottom-0 translate-y-[calc(100%+20px)] opacity-0 group-hover:opacity-100 transition-all ease-in duration-500"></div>
      <span className="font-medium relative" aria-hidden>
        Explore More
      </span>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <g clipPath="url(#clip0_91_72)">
          <path
            d="M4.25 20.25H20.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 15.75L18.5 5.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 5.25H18.5V14.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_91_72">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
