import Link from "next/link";
import { navIcons, socialIcons } from "./Icons";
import ThemeButton from "./ThemeButton";

const navLinksStyle =
  "hover:bg-primaryLight hover:dark:bg-primaryDark rounded-xl py-2 2xl:py-4 px-5 2xl:py-10 2xl:space-y-6 transition duration-200 ease-in-out";
const socialLinksStyle =
  "hover:bg-primaryLight hover:dark:bg-primaryDark rounded-xl p-3 transition duration-200 ease-in-out";

const Sidebar = () => {
  return (
    <div className="hidden lg:block fixed px-6 w-[25%] pt-16 xl:pt-24 bg-secondaryLight dark:bg-secondaryDark h-[100%] overflow-auto">
      {/* Name & Theme toggle */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-extrabold text-4xl 2xl:text-6xl tracking-wider"
        >
          helloDun
        </Link>
        <ThemeButton />
      </div>

      {/* Menu Items */}
      <ul className="font-semibold text-2xl space-y-2 mt-6">
        {navIcons.map(({ Icon, label, href }) => (
          <li className={`${navLinksStyle}`} key={label}>
            <Link
              href={href}
              key={label}
              className="flex space-x-8 items-center"
              target={label == "Blog" ? "_blank" : ""}
            >
              {Icon} <span className="2xl:text-4xl">{label}</span>
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
