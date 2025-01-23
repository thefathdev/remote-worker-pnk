"use client";

import { cn } from "@/lib/utils";
import { CSSProperties, useState } from "react";

const ACTIVITIES = [
  {
    name: "We Work",
    desc: "A place to work together every WEdnesday",
    imageSrc: "/activities/we-work.jpg",
    backgroundColor: "#0087FF",
  },
  {
    name: "Remote Meetup",
    desc: "When you need someone guidances and perspective and proffesionals in their fields",
    imageSrc: "/activities/remote-meetup.jpg",
    backgroundColor: "#A874FF",
  },
  {
    name: "Remote Talks",
    desc: "When great speakers meet amazin audience.",
    imageSrc: "/activities/remote-talk.jpg",
    backgroundColor: "#FFB31A",
  },
  {
    name: "Edutaiment",
    desc: "Sharing knowledge through our platforms.",
    imageSrc: "/activities/edutainment.jpg",
    backgroundColor: "#39CF40",
  },
];

export function Activity() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-7 flex flex-col gap-10 border border-[#F3F3F3] rounded-[2.5rem]">
      <h2 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-black">
        Discover Our Activity
      </h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          {ACTIVITIES.map(({ name, desc, backgroundColor }, index) => (
            <div
              onMouseEnter={() => setActiveIndex(index)}
              key={name}
              className="p-5 flex flex-col gap-4 border border-[#F3F3F3] rounded-[1.25rem] _transition-colors _ease-in-out _duration-300 bg-[--activity-background-color]"
              style={
                {
                  "--activity-background-color":
                    activeIndex === index ? backgroundColor : "#fff",
                } as CSSProperties
              }
            >
              <h3
                className={cn(
                  "font-satoshi font-bold text-xl leading-[1.2] text-black _transition-colors _ease-in-out _duration-300",
                  activeIndex === index ? "text-white" : ""
                )}
              >
                {name}
              </h3>
              <p
                className={cn(
                  // "_transition-colors ease-in-out duration-300",
                  activeIndex === index ? "font-medium text-white" : ""
                )}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-[1.25rem] relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={ACTIVITIES[activeIndex].name}
            src={ACTIVITIES[activeIndex].imageSrc}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
