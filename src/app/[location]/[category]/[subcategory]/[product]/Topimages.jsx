"use client";
import React, { useState } from "react";
import Image from "next/image";

function Topimages({ images, name }) {
  const [dotnum, setdotnum] = useState(0);

  return (
    <div className="relative lg:sticky top-0 lg:top-[80px] aspect-[2/1]  w-[100%] lg:w-[70%]">
      <div
        className="h-full w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory"
        onScroll={(e) => {
          setdotnum(
            Math.floor(
              (e.target.scrollLeft + e.target.clientWidth / 2) /
                e.target.clientWidth
            )
          );
        }}
      >
        {images.map((image, i) => {
          return (
            <Image
              className="min-w-[100%] h-full snap-start snap-always object-contain"
              src={"/" + image}
              alt={name}
              height={2000}
              width={2000}
              key={i}
            ></Image>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-full ">
        <div className="absolute bottom-[5px] left-[50%] flex gap-[10px] translate-x-[-50%]">
          {images.map((dotts, i) => {
            return (
              <div
                key={i}
                className="h-[5px] min-w-[5px] bg-gray-600  rounded-full duration-200"
                style={i == dotnum ? { width: "30px" } : { width: "5px" }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] text-[10px] translate-x-[-50%] translate-y-[20px] whitespace-nowrap">
        &quot; *Please note: Product may vary slightly from images displayed.
        &quot;
      </div>
    </div>
  );
}

export default Topimages;
