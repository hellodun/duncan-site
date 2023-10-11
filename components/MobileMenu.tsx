"use client";

import Link from "next/link";
import { navLinks, socialLinks } from "./Links";
import { useEffect } from "react";

const MobileMenu = () => {
  const navLinksStyle =
    "hover:bg-primaryLight hover:dark:bg-primaryDark rounded-xl py-2 px-5 transition duration-200 ease-in-out";
  const socialLinksStyle =
    "hover:bg-primaryLight hover:dark:bg-primaryDark rounded-xl p-3 transition duration-200 ease-in-out";

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        document.getElementById("menu")?.classList.add("hidden");
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div id="menu" className="hidden">
      <div className="bg-secondaryLight dark:bg-secondaryDark w-screen absolute top-16 left-0">
        {/* Menu Items */}
        <ul className="font-semibold text-2xl space-y-2 p-4">
          {navLinks.map(({ Icon, label, href }) => (
            <li className={navLinksStyle} key={label}>
              <Link
                href={href}
                key={href}
                onClick={() => {
                  document.getElementById("menu")?.classList.add("hidden");
                }}
                className="flex gap-x-3 items-center"
              >
                {Icon} {label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <ul className="mt-12 flex items-center justify-center space-x-10 mb-6">
            {socialLinks.map(({ Icon, label, href }) => (
              <li className={socialLinksStyle} key={label}>
                <Link href={href} target="_blank">
                  {Icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
