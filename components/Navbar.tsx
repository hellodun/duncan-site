import Link from "next/link";
import ThemeButton from "./ThemeButton";
import MenuButton from "./MenuButton";

const Navbar = () => {
  return (
    <div className="lg:hidden flex justify-around items-center bg-secondaryLight dark:bg-secondaryDark text-primaryDark dark:text-primaryLight h-16">
      <MenuButton />
      <Link href="/" className="font-extrabold text-3xl flex justify-center">
        hellodun
      </Link>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
