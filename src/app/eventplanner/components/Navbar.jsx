"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Navbar() {
  const [activenav, setactivenav] = useState(true);
  useEffect(() => {
    let scrollvalue = 0;
    document.addEventListener("scroll", () => {
      if (scrollvalue > window.scrollY) {
        setactivenav(true);
      } else {
        setactivenav(false);
      }
      scrollvalue = window.scrollY;
    });
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 flex items-center justify-between w-full h-[60px] test px-[10px] md:px-[60px] bg-themepink duration-300 z-10
      ${activenav ? "translate-y-[0%]" : "translate-y-[-100%]"}`}
    >
      <Image
        src="/eventmanager/themelogo.png"
        alt="rentbean event planner logo"
        height={58}
        width={178}
        quality={100}
        className="h-full w-auto"
      ></Image>
      <div className="absolute h-full left-[50%] translate-x-[-50%] flex items-center text-white">
        <button className="group relative px-[20px] py-[5px]">
          Home{" "}
          <div className="absolute bottom-0 left-[50%] translate-x-[-50%] h-[2px] w-0 bg-white rounded-full group-hover:w-full duration-200"></div>
        </button>
        <button className="group relative px-[20px] py-[5px]">
          Blogs{" "}
          <div className="absolute bottom-0 left-[50%] translate-x-[-50%] h-[2px] w-0 bg-white rounded-full group-hover:w-full duration-200"></div>
        </button>
        <button className="group relative px-[20px] py-[5px]">
          About us{" "}
          <div className="absolute bottom-0 left-[50%] translate-x-[-50%] h-[2px] w-0 bg-white rounded-full group-hover:w-full duration-200"></div>
        </button>
      </div>
      <button className="flex items-center gap-[10px] p-[2px] pr-[20px] whitespace-nowrap text-white border-[1.5px] border-white rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-[30px] p-[6px] aspect-square rounded-full bg-white stroke-white fill-themepink"
        >
          <path
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 01-3.28-2.8 28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"
          ></path>
        </svg>
        <span>Call Now!</span>
      </button>
    </nav>
  );
}

export default Navbar;
