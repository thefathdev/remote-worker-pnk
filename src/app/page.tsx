import { About } from "@/components/home/about";
import { Activity } from "@/components/home/activity";
import { Hero } from "@/components/home/hero";
import { NavMenu } from "@/components/nav-menu";

export default function Home() {
  return (
    <div className="grid grid-cols-[330px_1fr] bg-white gap-5">
      <div className="sticky top-0 h-screen pt-20 pl-[6.25rem] ">
        <NavMenu />
      </div>
      <div className="h-[300vh] pt-20 pr-[6.25rem] space-y-10 pb-[6.25rem]">
        <Hero />
        <About />
        <Activity />
      </div>
    </div>
  );
}
