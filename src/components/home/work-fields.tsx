import { Marquee } from "../animated-ui/marquee";

const FIELDS = [
  "Digital Marketing",
  "Team Work",
  "Encryption",
  "Security",
  "Programming",
  "Web Developer",
  "Web Programming",
  "UI/UX Design",
  "Mobile Developer",
  "SEO Specialist",
  "Research & Development",
  "Graphics Designer",
  "Animation",
  "Logo Design",
  "3D Artist",
  "Marketing",
  "Content Management",
  "Product Management",
  "User Experience",
  "Data Analysis",
  "E-commerce",
  "Sales Marketing",
  "Social Media",
  "Travel/Cargo",
  "Outsourcing",
  "Enterprise",
  "Content Creator",
  "Photography",
  "Photography",
  "Graphics",
];

export function WorkFields() {
  return (
    <div className="py-7 flex flex-col gap-10 border border-[#F3F3F3] bg-[#FBFBFB] rounded-[2.5rem] max-w-[calc(100vw-450px)]">
      <div className="px-7">
        <h2 className="font-satoshi font-bold text-[2rem] leading-[1.2] text-[#1C1C1C]">
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
        <Marquee className="p-0 [--duration:55s]">
          {FIELDS.slice(16, 24).map((field, index) => (
            <Field key={index} label={field} />
          ))}
        </Marquee>
        <Marquee reverse className="p-0 [--duration:20s]">
          {FIELDS.slice(24).map((field, index) => (
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
