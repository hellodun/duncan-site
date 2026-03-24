import Link from "next/link";
import ThemeButton from "./ThemeButton";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="lg:hidden flex justify-around items-center bg-secondary-light dark:bg-secondary-dark text-primary-dark dark:text-primary-light h-16">
      <MobileNav />
      <Link href="/" className="font-extrabold text-3xl flex justify-center">
        hellodun
      </Link>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
