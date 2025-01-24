import { Marquee } from "../animated-ui/marquee";

const FIELDS = [
  "Digital Marketing",
  "Social Media Specialist",
  "Content Creator",
  "Meta Advertiser",
  "Copywriter",
  "Web Developer",
  "UI UX Designer",
  "Graphic Designer",
  "3D Artist",
  "Illustrator",
  "Logo Designer",
  "Animator",
  "Fullstack Programmer",
  "Data Analyst",
  "Research And Development",
  "SEO Specialist",
  "Game Developer",
  "Project Manager",
  "Mobile Developer",
  "Hacker",
  "Marketplace Specialist",
  "Architect",
  "Human Capital Manager",
  "Entrepreneur",
  "Sales Marketing",
  "Photographer",
  "Videographer",
  "English Tutor",
];

export function WorkFields() {
  return (
    <div className="py-7 flex flex-col gap-10 border border-[#F3F3F3] bg-[#FBFBFB] rounded-[2.5rem] max-w-[calc(100vw-450px)] max-sm:max-w-[calc(100vw-32px)] max-sm:rounded-[2rem] max-sm:py-4">
      <div className="px-7 max-sm:px-4">
        <h2 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-[#1C1C1C] max-sm:text-[1.75rem]">
          Work Fields in Community
        </h2>
      </div>

      <div className="flex flex-col overflow-hidden gap-5 max-w-full">
        <Marquee className="p-0">
          {FIELDS.slice(0, 8).map((field, index) => (
            <Field key={index} label={field} />
          ))}
        </Marquee>
        <Marquee reverse className="p-0 [--duration:45s]">
          {FIELDS.slice(8, 16).map((field, index) => (
            <Field key={index} label={field} />
          ))}
        </Marquee>
        <Marquee className="p-0 [--duration:30s]">
          {FIELDS.slice(16, 22).map((field, index) => (
            <Field key={index} label={field} />
          ))}
        </Marquee>
        <Marquee reverse className="p-0 [--duration:20s]">
          {FIELDS.slice(22).map((field, index) => (
            <Field key={index} label={field} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

const Field = ({ label }: { label: string }) => (
  <div className="p-4 text-xl font-medium text-[#1C1C1C] bg-white border border-[#F3F3F3] rounded-full">
    <span>{label}</span>
  </div>
);
