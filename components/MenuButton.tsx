"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setShowMenu(false);
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <button
      id="menuButton"
      className="hover:bg-primaryLight hover:dark:bg-primaryDark rounded-xl p-3 transition duration-200 ease-in-out text-primaryDark dark:text-primaryLight"
      onClick={() => {
        setShowMenu((prev) => !prev);

        if (showMenu === false) {
          document.getElementById("menu")?.classList.remove("hidden");
        }

        if (showMenu === true) {
          document.getElementById("menu")?.classList.add("hidden");
        }
      }}
    >
      {showMenu === false ? <Menu /> : <X />}
    </button>
  );
};

export default MenuButton;
