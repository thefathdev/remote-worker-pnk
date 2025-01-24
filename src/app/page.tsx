import { About } from "@/components/home/about";
import { Activity } from "@/components/home/activity";
import { Articles } from "@/components/home/articles";
import { CtaSection } from "@/components/home/cta-section";
import { Hero } from "@/components/home/hero";
import { WorkFields } from "@/components/home/work-fields";
import { NavMenu } from "@/components/nav-menu";

export default function Home() {
  return (
    <div className="grid grid-cols-[330px_1fr] bg-white gap-5 max-w-screen max-sm:grid-cols-1 max-sm:gap-0">
      <div className="sticky top-0 h-screen pt-20 pl-[6.25rem] max-sm:px-4 max-sm:py-3 max-sm:h-auto max-sm:bg-white max-sm:z-10">
        <NavMenu />
      </div>
      <div className=" pt-20 pr-[6.25rem] space-y-10 max-sm:space-y-8 pb-[6.25rem] overflow-hidden max-sm:pt-4 max-sm:px-4 max-sm:pb-14">
        <Hero />
        <About />
        <Activity />
        <WorkFields />
        <Articles />
        <CtaSection />

        <div className="w-full h-px bg-[#F3F3F3]"></div>
        <footer className="flex items-center justify-between gap-5 flex-wrap max-sm:justify-center max-sm:gap-2.5">
          <p className="leading-loose max-sm:text-center">
            © 2025 Remote Worker Pontianak. All rights reserved.
          </p>
          <p className="leading-loose max-sm:text-center">
            Created by: Pipskiyy & Fath Code
          </p>
        </footer>
      </div>
    </div>
  );
}
