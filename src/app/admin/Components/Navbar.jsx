"use client";
import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [ordersmenu, setordersmenu] = useState(0);
  return (
    <nav className="blackshadow1 sticky top-0 left-0 flex w-full h-[60px] bg-white px-[10px] md:px-[40px] ">
      <Image
        src="/logo&ui/3dlogo.png"
        alt="rentbean.in logo image"
        width={156}
        height={60}
        priority
      ></Image>
      <div className="ml-auto w-fit flex items-center justify-center gap-[10px]">
        <span
          className={`py-[2px] px-[10px] text-center border-b-[3px]  cursor-pointer ${
            ordersmenu == 0 ? "border-theme" : "border-slate-300"
          }`}
          onClick={() => {
            setordersmenu(0);
          }}
        >
          Orders
        </span>
        <span
          className={`py-[2px] px-[10px] text-center border-b-[3px]  cursor-pointer ${
            ordersmenu == 1 ? "border-theme" : "border-slate-300"
          }`}
          onClick={() => {
            setordersmenu(1);
          }}
        >
          Running Orders
        </span>
        <span
          className={`py-[2px] px-[10px] text-center border-b-[3px]  cursor-pointer ${
            ordersmenu == 2 ? "border-theme" : "border-slate-300"
          }`}
          onClick={() => {
            setordersmenu(2);
          }}
        >
          Completed Orders
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
