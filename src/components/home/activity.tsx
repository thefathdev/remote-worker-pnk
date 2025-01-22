"use client";

// const ACTIVITIES = [
//   {
//     name: "We Work",
//     desc: "A place to work together every WEdnesday",
//     imageSrc: "/activities/we-work.png",
//   },
//   {
//     name: "Remote Meetup",
//     desc: "When you need someone guidances and perspective and proffesionals in their fields",
//     imageSrc: "/activities/remote-meetup.png",
//   },
//   {
//     name: "Remote Talks",
//     desc: "When great speakers meet amazin audience.",
//     imageSrc: "/activities/remote-talks.png",
//   },
//   {
//     name: "Edutaiment",
//     desc: "Sharing knowledge through our platforms.",
//     imageSrc: "/activities/edutaiment.png",
//   },
// ];

export function Activity() {
  return (
    <div className="p-7 flex flex-col gap-10 border border-[#F3F3F3] rounded-[2.5rem]">
      <h2 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-black">
        Discover Our Activity
      </h2>
      <div className="grid grid-cols-2"></div>
    </div>
  );
}
