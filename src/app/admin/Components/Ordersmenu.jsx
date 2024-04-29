"use client";
import React, { useEffect, useState } from "react";
import Orderscomp from "../Components/Orders";
import { AppContextfn } from "../../Context/Index";

function Ordersmenu() {
  const { ordercomps,setordercomps, ordercompsref } = AppContextfn();
  const [allorders, setallorders] = useState([]);
  const [runningorders, setrunningorders] = useState([]);
  const [completedorders, setcompletedorders] = useState([]);

  useEffect(() => {
    if (ordercomps == 0) {
      fetch("/api/admin/Orders")
        .then((res) => res.json())
        .then((res) => {
          setallorders(res);
        });
    }
    if (ordercomps == 1) {
      fetch("/api/admin/Runningorders")
        .then((res) => res.json())
        .then((res) => {
          setrunningorders(res);
        });
    }
    if (ordercomps == 2) {
      fetch("/api/admin/Completedorders")
        .then((res) => res.json())
        .then((res) => {
          setcompletedorders(res);
        });
    }
  }, [ordercomps]);

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
          <Orderscomp key={i} item={item} />
        ))}
      </div>
      <div
        className=" min-w-full  snap-start px-[10px] md:px-[40px] py-[20px] overflow-y-scroll "
        style={{ height: "calc(100dvh - 60px)" }}
      >
        {runningorders.map((item, i) => (
          <Orderscomp key={i} item={item} />
        ))}
      </div>
      <div
        className=" min-w-full  snap-start px-[10px] md:px-[40px] py-[20px] overflow-y-scroll "
        style={{ height: "calc(100dvh - 60px)" }}
      >
        {completedorders.map((item, i) => (
          <Orderscomp key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Ordersmenu;
