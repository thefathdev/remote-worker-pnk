import Image from "next/image";
import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const LINKS = [
  { href: "/#hero", label: "Home" },
  { href: "/#about-us", label: "About Us" },
  { href: "/#main-activity", label: "Main Activity" },
  { href: "/#members", label: "Members" },
  { href: "/#articles", label: "Articles" },
];

export function NavMenu() {
  return (
    <div className="flex flex-col gap-5 max-sm:flex-row max-sm:justify-between">
      <Image
        src="/logo.png"
        alt=""
        width={128}
        height={48}
        className="max-sm:hidden"
      />
      <Image
        src="/logo.png"
        alt=""
        width={88}
        height={32}
        className="sm:hidden"
      />

      <MobileMenu links={LINKS} />

      <div className="flex flex-col max-sm:hidden">
        {LINKS.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div>

      <div className="w-[10rem] max-w-full h-px bg-[#F3F3F3] max-sm:hidden"></div>

      <div className="flex gap-5 max-sm:hidden">
        <a
          href="https://www.instagram.com/remoteworkerpnk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Instagram</span>
          <InstagramIcon />
        </a>
        <a
          href="https://www.instagram.com/remoteworkerpnk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">WhatsApp</span>
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
}
