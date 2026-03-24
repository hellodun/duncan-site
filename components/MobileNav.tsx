"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, socialLinks } from "./NavLinks";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinksStyle =
    "hover:bg-primary-light hover:dark:bg-primary-dark rounded-xl py-2 px-5 transition duration-200 ease-in-out";
  const socialLinksStyle =
    "hover:bg-primary-light hover:dark:bg-primary-dark rounded-xl p-3 transition duration-200 ease-in-out";

  return (
    <>
      <button
        className="hover:bg-primary-light hover:dark:bg-primary-dark rounded-xl p-3 transition duration-200 ease-in-out text-primary-dark dark:text-primary-light"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="bg-secondary-light dark:bg-secondary-dark w-screen absolute top-16 left-0 z-10">
          <ul className="font-semibold text-2xl space-y-2 p-4">
            {navLinks.map(({ Icon, label, href }) => (
              <li className={navLinksStyle} key={label}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
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
      )}
    </>
  );
};

export default MobileNav;
