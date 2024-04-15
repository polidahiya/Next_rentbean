"use client";
import React from "react";
import Image from "next/image";
import { AppContextfn } from "../Context/Index";

function Location() {
  const { togglelocation } = AppContextfn();

  return (
    <div
      className={`fixed top-0 left-0 h-[100dvh] w-[100vw] bg-black bg-opacity-[40%] z-20 duration-300 ${
        togglelocation
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        className="absolute top-0 left-0 h-full w-full cursor-auto z-[-1]"
        onClick={() => {
          window.history.back();
        }}
      ></button>
      <div
        className={`locationbox  absolute top-[50%] left-[50%] translate-x-[-50%]  flex flex-col md:flex-row items-center justify-center gap-[20px] bg-white h-[80vh] w-[80vw] z-20 duration-300 ${
          togglelocation
            ? "translate-y-[-50%] opacity-1"
            : "translate-y-[-40%] opacity-0 "
        }`}
      >
        <h2 className="absolute left-[50%] top-[30px] translate-x-[-50%] text-[20px] font-semibold whitespace-nowrap">
          🌍 Select your location
        </h2>
        <button className="relative h-[60px] aspect-[2/1] border border-slate-300 bg-theme text-white rounded-[10px]">
          Gurgaon
        </button>
        <button className="relative h-[60px] aspect-[2/1] border border-slate-300 bg-theme text-white rounded-[10px]">
          Delhi
        </button>
        <button className="relative h-[60px] aspect-[2/1] border border-slate-300 bg-theme text-white rounded-[10px]">
          Noida
        </button>
        <p className="absolute left-[50%] bottom-[30px] translate-x-[-50%] w-[90%] text-center text-[12px]">
          We apologize if you couldn&#39;t find your location right now. Our site is
          always evolving to serve you better. In the meantime, feel free to
          explore what we have to offer, and remember, you&#39;re always welcome
          here, no matter where you&#39;re from.
        </p>
        {/* close button */}
        <button
          className="absolute right-0 top-0 h-[50px] aspect-square  bg-white z-10 lg:hover:bg-theme lg:hover:text-white"
          onClick={() => {
            window.history.back();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Location;
