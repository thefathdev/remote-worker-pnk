import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  active?: boolean;
}

export function NavLink({ href, children, active = false }: NavLinkProps) {
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
}
