"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AppContextfn } from "@/app/Context/Index";

function Navbar({ ordershowtype, setordershowtype }) {
  const { setrefresh } = AppContextfn();

  return (
    <nav className="blackshadow1 sticky top-0 left-0 flex items-center w-full h-[60px] bg-white px-[10px] md:px-[40px] ">
      <Image
        src="/logo&ui/3dlogo.png"
        alt="rentbean.in logo image"
        width={156}
        height={60}
        priority
      ></Image>
      {/* to the updoucts page */}
      <Link href="/admin/updateproducts"
      className="h-[30px] aspect-square bg-blue-700 text-white text-[25px] flex items-center justify-center ml-auto rounded-[10px]">+</Link>
      {/* status updater */}
      <select
        name="orderstatus"
        id="orderstatus"
        value={ordershowtype}
        className="h-[30px] ml-[10px] cursor-pointer border border-slate-300 px-[5px] outline-none"
        onInput={async (e) => {
          setordershowtype(e.target.value);
        }}
      >
        <option value="0">Orders</option>
        <option value="1">varified orders</option>
        <option value="2">Delivery scheduled orders</option>
        <option value="3">Delivered orders</option>
      </select>
      {/* refresh button */}
      <button
        className="h-[30px] aspect-square bg-theme ml-[10px] p-[5px] "
        onClick={() => {
          setrefresh((pre) => {
            return pre + 1;
          });
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12a9 9 0 0015 6.708L21 16m0-4A9 9 0 006 5.292L3 8m18 13v-5m0 0h-5M3 3v5m0 0h5"
          ></path>
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
