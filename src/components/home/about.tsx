import { PiBooks, PiHandshake, PiRocketLaunch, PiUsers } from "react-icons/pi";

const STATS = [
  { label: "Brands Collaboration", value: "30+" },
  { label: "Active Members", value: "200+" },
  { label: "Event Registrars", value: "500+" },
  { label: "Activities", value: "20+" },
];

const FEATURES = [
  {
    title: "Get Networking",
    desc: "Connect with fellow remote workers, expand your professional network, and discover new collaboration opportunities.",
    icon: <PiUsers className="text-[#2B80CC] size-8" />,
    backgroundColor: "#E5F3FF",
  },
  {
    title: "Community Support",
    desc: "Enjoy social and emotional support from a community that understands the unique challenges of working from home, and share tips and success strategies.",
    icon: <PiHandshake className="text-[#7954B8] size-8" />,
    backgroundColor: "#EFE5FF",
  },
  {
    title: "Access to Resources",
    desc: "Get exclusive access to a variety of resources, including the latest info on tools and tech that can make your remote work life easier.",
    icon: <PiBooks className="text-[#CCAA2C] size-8" />,
    backgroundColor: "#FFF4CC",
  },
  {
    title: "Skill Development",
    desc: "Join workshops and training sessions designed to boost your skills and productivity while working remotely.",
    icon: <PiRocketLaunch className="text-[#5CA528] size-8" />,
    backgroundColor: "#E7FFD6",
  },
];

export function About() {
  return (
    <section
      id="about-us"
      className="p-7 max-sm:scroll-mt-10 flex flex-col gap-8 border border-[#F3F3F3] rounded-[2.5rem] max-sm:rounded-[2rem] max-sm:p-4 max-sm:gap-5"
    >
      <h2 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-[#1C1C1C] max-sm:text-[1.75rem]">
        About Us
      </h2>

      <p className="leading-loose">
        The community provides a platform to share ideas and innovations,
        allowing you to contribute to local projects that make a positive
        impact. Plus, you&apos;ll have the chance to participate in fun social
        and recreational events, strengthening your bonds with other members in
        a relaxed and supportive atmosphere.
      </p>

      <div className="w-full h-px bg-[#F3F3F3]"></div>

      <div className="grid grid-cols-4 gap-8 max-sm:grid-cols-2">
        {STATS.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-3">
            <h3 className="font-satoshi font-bold text-[3rem] leading-[1.2] text-[#1C1C1C] max-sm:text-[2.25rem]">
              {value}
            </h3>
            <p className="">{label}</p>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-[#F3F3F3]"></div>

      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {FEATURES.map(({ title, desc, icon, backgroundColor }) => (
          <div
            key={title}
            className="p-5 flex flex-col gap-5 border border-[#F3F3F3] rounded-[1.25rem] hover:bg-[#F8F9FA]"
          >
            <div
              className="size-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor }}
            >
              {icon}
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-satoshi font-bold text-xl leading-[1.2] text-[#1C1C1C]">
                {title}
              </h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
