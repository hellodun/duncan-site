"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hover:bg-primaryLight hover:dark:bg-primaryDark rounded-xl p-3 transition duration-200 ease-in-out text-primaryDark dark:text-primaryLight"
    >
      {theme === "light" ? (
        <Sun className="2xl:h-[40px] 2xl:w-[40px]" />
      ) : (
        <Moon className="2xl:h-[40px] 2xl:w-[40px]" />
      )}
    </button>
  );
};

export default ThemeButton;
