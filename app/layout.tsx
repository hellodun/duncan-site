import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import { Montserrat } from "next/font/google";
import Providers from "./providers";
import MobileMenu from "@/components/MobileMenu";
import FooterNote from "@/components/FooterNote";

const artkinson = Atkinson_Hyperlegible({
  weight: "400",
  subsets: ["latin"],
  // fallback: ["helvetica", "arial", "sans-serif"],
});

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duncan Gatuthu | Personal website",
  description:
    "Welcome to my personal website. Here I share updates on whats I'm up-to, that is, learning and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${artkinson.className}`}
    >
      <Providers>
        <body className="lg:flex bg-primaryLight text-primaryDark dark:bg-primaryDark dark:text-primaryLight min-w-fit">
          <Navbar />
          <Sidebar />
          <MobileMenu />
          <main className={`${montserrat.className}`}>{children}</main>
        </body>
      </Providers>
    </html>
  );
}

// White theme colours
// #E9EEF3 - primaryLight (Background) (Text)
// #F8FAFC - secondaryLight - [lighter] (Card, menu, hover Background)

// #202225 - primaryDark (Background) (Text)
// #2F3136 - secondaryDark - [lighter] (Card, menu, hover Background)
