import Link from "next/link";
import { navIcons, socialIcons } from "./Icons";
import { Sun } from "lucide-react";
import ThemeButton from "./ThemeButton";

const navLinksStyle =
  "hover:bg-primaryLight hover:dark:bg-primaryDark rounded-xl py-2 px-5 transition duration-200 ease-in-out";
const socialLinksStyle =
  "hover:bg-primaryLight hover:dark:bg-primaryDark rounded-xl p-3 transition duration-200 ease-in-out";

const Sidebar = () => {
  return (
    <div className="hidden lg:block px-6 w-72 pt-16 bg-secondaryLight dark:bg-secondaryDark h-screen">
      {/* Name & Theme toggle */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="font-extrabold text-4xl tracking-wider">
          helloDun
        </Link>
        <ThemeButton />
      </div>

      {/* Menu Items */}
      <ul className="font-semibold text-2xl space-y-2 mt-6">
        {navIcons.map(({ Icon, label, href }) => (
          <li className={navLinksStyle} key={label}>
            <Link
              href={href}
              key={label}
              className="flex gap-x-3 items-center"
              target={label == "Blog" ? "_blank" : ""}
            >
              {Icon} {label}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <ul className="mt-12 flex items-center justify-around">
          {socialIcons.map(({ Icon, label, href }) => (
            <li className={socialLinksStyle} key={label}>
              <Link href={href} target="_blank">
                {Icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
