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

      <button className="sm:hidden">
        <span className="sr-only">Open Menu</span>
        <HamburgerIcon />
      </button>

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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_96_18555)">
              <path
                d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                stroke="#333435"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M16.5 3H7.5C5.01472 3 3 5.01472 3 7.5V16.5C3 18.9853 5.01472 21 7.5 21H16.5C18.9853 21 21 18.9853 21 16.5V7.5C21 5.01472 18.9853 3 16.5 3Z"
                stroke="#333435"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z"
                fill="#333435"
              />
            </g>
            <defs>
              <clipPath id="clip0_96_18555">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/remoteworkerpnk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Instagram</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_96_18566)">
              <path
                d="M6.75 9.75C6.75 8.95435 7.06607 8.19129 7.62868 7.62868C8.19129 7.06607 8.95435 6.75 9.75 6.75L11.25 9.75L10.095 11.4816C10.5532 12.5763 11.4237 13.4468 12.5184 13.905L14.25 12.75L17.25 14.25C17.25 15.0456 16.9339 15.8087 16.3713 16.3713C15.8087 16.9339 15.0456 17.25 14.25 17.25C12.2609 17.25 10.3532 16.4598 8.9467 15.0533C7.54018 13.6468 6.75 11.7391 6.75 9.75Z"
                stroke="#333435"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.49344 19.7917C9.38394 20.8858 11.6078 21.2551 13.7505 20.8307C15.8931 20.4062 17.8083 19.217 19.1389 17.4848C20.4696 15.7526 21.1248 13.5956 20.9825 11.4159C20.8403 9.2363 19.9102 7.18277 18.3656 5.63825C16.8211 4.09372 14.7676 3.16361 12.5879 3.02132C10.4083 2.87904 8.25126 3.53429 6.51904 4.86492C4.78683 6.19555 3.59765 8.11072 3.17321 10.2534C2.74877 12.396 3.11805 14.6199 4.21219 16.5104L3.03938 20.012C2.99531 20.1441 2.98891 20.286 3.02091 20.4215C3.0529 20.5571 3.12202 20.6811 3.22052 20.7796C3.31903 20.8781 3.44301 20.9472 3.57859 20.9792C3.71417 21.0112 3.85598 21.0048 3.98813 20.9607L7.49344 19.7917Z"
                stroke="#333435"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_96_18566">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
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

const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_121_97)">
      <path
        d="M3.75 12H20.25"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 6H20.25"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 18H20.25"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_121_97">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
