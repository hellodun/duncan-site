import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import Providers from "./providers";
import MobileMenu from "@/components/MobileMenu";

const artkinson = Atkinson_Hyperlegible({
  weight: "400",
  subsets: ["latin"],
  // fallback: ["helvetica", "arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Demo Site",
  description: "Demo site",
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
          <main>{children}</main>
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
