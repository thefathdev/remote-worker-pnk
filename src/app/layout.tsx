import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${inter.className} ${satoshi.variable} antialiased leading-normal text-[#646668] bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
