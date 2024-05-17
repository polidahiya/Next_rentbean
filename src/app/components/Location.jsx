"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppContextfn } from "../Context/Index";
import { listoflocation } from "../../components/Commondata";

function Location({ removable, location }) {
  const { togglelocation, settogglelocation } = AppContextfn();
  const router = useRouter();

  useEffect(() => {
    if (!removable) {
      settogglelocation(true);
    }
  }, []);

  const setlocationfn = (value) => {
    document.cookie = `Rentbeanloction=${value}; expires=${new Date(
      "9999-12-31"
    ).toUTCString()}; path=/`;

    settogglelocation(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-[40%] z-20 duration-300  ${
        togglelocation
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {removable && (
        <button
          className="absolute top-0 left-0 h-full w-full cursor-auto z-[-1]"
          onClick={() => {
            window.history.back();
          }}
        ></button>
      )}

      <div
        className={`locationbox  absolute top-[50%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-between p-[20px] gap-[20px] bg-white h-[80vh] w-[80vw] z-20 duration-300 ${
          togglelocation
            ? "translate-y-[-50%] opacity-1"
            : "translate-y-[-40%] opacity-0 "
        }`}
      >
        <h2 className=" text-[20px] font-semibold whitespace-nowrap">
          🌍 Select your location
        </h2>
        <div className="w-full flex items-center justify-center flex-wrap gap-[20px]">
          {listoflocation?.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  setlocationfn(`${item}`);
                  setTimeout(() => {
                    router.push("/" + item + "/");
                  }, 500);
                }}
                className={`relative flex items-center justify-center h-[60px] aspect-[2/1] border border-slate-300 rounded-[10px] lg:hover:scale-[1.1] duration-200  ${
                  location == item
                    ? "bg-theme text-white"
                    : "bg-white text-theme"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <p className=" w-[90%] text-center text-[8px] md:text-[12px]">
          We apologize if you couldn&#39;t find your location right now. Our
          site is always evolving to serve you better. In the meantime, feel
          free to explore what we have to offer, and remember, you&#39;re always
          welcome here, no matter where you&#39;re from.
        </p>
        {/* close button */}
        {removable && (
          <button
            className="absolute right-0 top-0 h-[50px] aspect-square  bg-white z-10 lg:hover:bg-theme lg:hover:text-white"
            onClick={() => {
              window.history.back();
            }}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
}

export default Location;
