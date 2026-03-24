import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import { Montserrat } from "next/font/google";
import Providers from "./providers";
import FooterNote from "@/components/FooterNote";

const artkinson = Atkinson_Hyperlegible({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["500", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duncan Gatuthu | Personal website",
  description:
    "Welcome to my personal website. Here I share updates on what I'm working on, that is, learning and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${artkinson.className}`}>
      <Providers>
        <body className="relative lg:flex bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light min-w-fit">
          <Navbar />
          <Sidebar />
          <main className={`${montserrat.className} w-full lg:w-[75%]`}>
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
