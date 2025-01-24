import { Marquee } from "../animated-ui/marquee";

export function Members() {
  return (
    <div className="py-7 flex flex-col gap-8 max-sm:gap-5 border border-[#F3F3F3] rounded-[2.5rem] max-w-[calc(100vw-450px)] max-sm:max-w-[calc(100vw-32px)] max-sm:rounded-[2rem] max-sm:py-4">
      <div className="px-7 max-sm:px-4 flex flex-col gap-8 max-sm:gap-5">
        <h2 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-[#1C1C1C] max-sm:text-[1.75rem]">
          Our Active Members
        </h2>

        <p>We appreciate the most active member in our community.</p>
      </div>

      <div className="flex flex-col overflow-hidden gap-5 max-w-full">
        <Marquee className="p-0 [--duration:30s]">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </Marquee>
      </div>
    </div>
  );
}

const MemberCard = () => (
  <div className="p-3 rounded-[1.25rem] overflow-hidden flex items-end h-[300px] w-[250px] relative">
    {/* Image */}

    {/* Filter */}
    <div className="bg-gradient-to-tr from-[#00B3E5] to-[#FF6112] opacity-15 absolute inset-0"></div>

    <div className="relative bg-white/80 rounded-2xl flex flex-col p-3 gap-3 backdrop-blur-[10px] w-full">
      <h3 className="font-satoshi font-bold text-xl leading-[1.2] text-[#1C1C1C]">
        Name
      </h3>
      <p>Title</p>
    </div>
  </div>
);
