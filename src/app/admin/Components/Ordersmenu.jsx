"use client";
import React from "react";
import Orderscomp from "../Components/Orders";
import { typeofprices } from "@/app/Data";
import { AppContextfn } from "../../Context/Index";

function Ordersmenu({
  allorders,
  deleteorder,
  setverifiedorder,
  changestatus,
  runningorders,
  completedorders,
  updatenote
}) {
  const { setordercomps, ordercompsref } = AppContextfn();

  return (
    <div
      className="flex items-start  min-w-full overflow-x-scroll snap-x snap-mandatory snap-always scroll-smooth"
      ref={ordercompsref}
      onScroll={(e) => {
        setordercomps(
          Math.floor(
            (e.target.scrollLeft + e.target.clientWidth / 2) /
              e.target.clientWidth
          )
        );
      }}
    >
      <div
        className=" min-w-full  snap-start px-[10px] md:px-[40px] py-[20px] overflow-y-scroll "
        style={{ height: "calc(100dvh - 60px)" }}
      >
        {allorders.map((item, i) => (
          <Orderscomp
            key={i}
            item={item}
            typeofprices={typeofprices}
            deleteorder={deleteorder}
            setverifiedorder={setverifiedorder}
            changestatus={changestatus}
            updatenote={updatenote}
          />
        ))}
      </div>
      <div
        className=" min-w-full  snap-start px-[10px] md:px-[40px] py-[20px] overflow-y-scroll "
        style={{ height: "calc(100dvh - 60px)" }}
      >
        {runningorders.map((item, i) => (
          <Orderscomp
            key={i}
            item={item}
            typeofprices={typeofprices}
            deleteorder={deleteorder}
            setverifiedorder={setverifiedorder}
            changestatus={changestatus}
            updatenote={updatenote}
          />
        ))}
      </div>
      <div
        className=" min-w-full  snap-start px-[10px] md:px-[40px] py-[20px] overflow-y-scroll "
        style={{ height: "calc(100dvh - 60px)" }}
      >
        {completedorders.map((item, i) => (
          <Orderscomp
            key={i}
            item={item}
            typeofprices={typeofprices}
            deleteorder={deleteorder}
            setverifiedorder={setverifiedorder}
            changestatus={changestatus}
            updatenote={updatenote}
          />
        ))}
      </div>
    </div>
  );
}

export default Ordersmenu;
