"use client";
import React from "react";
import Image from "next/image";
import { AppContextfn } from "../../Context/Index";

function Navbar() {
  const { ordercomps, setordercomps,ordercompsref } = AppContextfn();
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
          className={`flex items-center justify-center px-[10px] h-full text-center border-b-[3px]  cursor-pointer ${
            ordercomps == 0 ? "border-theme" : "border-slate-300"
          }`}
          onClick={() => {
            ordercompsref.current.scrollLeft=0
          }}
          >
          Orders
        </span>
        <span
          className={`flex items-center justify-center px-[10px] h-full text-center border-b-[3px]  cursor-pointer ${
            ordercomps == 1 ? "border-theme" : "border-slate-300"
          }`}
          onClick={() => {
            ordercompsref.current.scrollLeft=window.innerWidth
          }}
          >
          Running Orders
        </span>
        <span
          className={`flex items-center justify-center px-[10px] h-full text-center border-b-[3px]  cursor-pointer ${
            ordercomps == 2 ? "border-theme" : "border-slate-300"
          }`}
          onClick={() => {
            ordercompsref.current.scrollLeft=window.innerWidth*2
          }}
        >
          Completed Orders
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
