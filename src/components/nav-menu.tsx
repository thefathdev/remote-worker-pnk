import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const LINKS = [
  { href: "/#hero", label: "Home" },
  { href: "/#about-us", label: "About Us" },
  { href: "/#main-activity", label: "Main Activity" },
  { href: "/#members", label: "Members" },
  { href: "/#articles", label: "Articles" },
];

export function NavMenu() {
  return (
    <div className="flex flex-col gap-5">
      <Image src="/logo.png" alt="" width={128} height={48} />

      <div className="flex flex-col">
        {LINKS.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

const NavLink = ({
  href,
  children,
  active = false,
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={
        "p-2.5 " +
        (active ? "font-bold text-[#1C1C1C]" : "font-medium text-[#4B4B4B]")
      }
    >
      {children}
    </Link>
  );
};
