import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";
import { NavMenu } from "@/components/nav-menu";

const inter = Inter({
  subsets: ["latin"],
});

const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Bold.woff",
  display: "swap",
  variable: "--font-satoshi",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Remote Worker Pontianak",
  description:
    "Connect with fellow remote workers, expand your professional network, and discover new collaboration opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${satoshi.variable} antialiased leading-normal text-[#646668]  bg-white`}
      >
        <div className="grid grid-cols-[330px_1fr] bg-white gap-5 max-w-screen max-sm:grid-cols-1 max-sm:gap-0">
          <div className="sticky top-0 h-screen pt-20 pl-[6.25rem] max-sm:px-4 max-sm:py-3 max-sm:h-auto max-sm:bg-white max-sm:z-10">
            <NavMenu />
          </div>
          <div className=" pt-20 pr-[6.25rem] space-y-10 max-sm:space-y-8 pb-[6.25rem] overflow-hidden max-sm:pt-4 max-sm:px-4 max-sm:pb-14">
            {children}
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
        <SanityLive />
      </body>
    </html>
  );
}
