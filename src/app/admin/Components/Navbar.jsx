"use client";
import React, { useState } from "react";
import Image from "next/image";

function Navbar({ordershowtype, setordershowtype}) {
  // const {  } = AppContextfn();

  return (
    <nav className="blackshadow1 sticky top-0 left-0 flex w-full h-[60px] bg-white px-[10px] md:px-[40px] ">
      <Image
        src="/logo&ui/3dlogo.png"
        alt="rentbean.in logo image"
        width={156}
        height={60}
        priority
      ></Image>
      {/* status updater */}
      <select
        name="orderstatus"
        id="orderstatus"
        value={ordershowtype}
        className="ml-auto cursor-pointer border border-slate-300 px-[5px] outline-none"
        onInput={async (e) => {
          setordershowtype(e.target.value);
        }}
      >
        <option value="0">Orders</option>
        <option value="1">varified orders</option>
        <option value="2">Delivery scheduled orders</option>
        <option value="3">Delivered orders</option>
      </select>
    </nav>
  );
}

export default Navbar;
