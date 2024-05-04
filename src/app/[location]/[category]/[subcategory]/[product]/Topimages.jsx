"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { AppContextfn } from "../../../../Context/Index";
import Linksvg from "../../../../components/(svgs)/Linksvg";

function Topimages({ images, name }) {
  const { notifictionarr, setnotifictionarr } = AppContextfn();
  const [dotnum, setdotnum] = useState(0);
  const imagesscrollref = useRef();

  let link;
  if (typeof window !== "undefined") {
    link = new URL(location.href);
  }
  function sharepage() {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(link)
        .then(function () {
          setnotifictionarr([
            ...notifictionarr,
            {
              id: new Date() + new Date().getMilliseconds(),
              content: "Link copied!",
            },
          ]);
        })
        .catch(function (err) {
          fallbackCopyTextToClipboard(link);
        });
    } else {
      fallbackCopyTextToClipboard(link);
    }
  }
  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setnotifictionarr([
      ...notifictionarr,
      {
        id: new Date() + new Date().getMilliseconds(),
        content: "Link copied!",
      },
    ]);
  }

  return (
    <div className="relative lg:sticky top-0 lg:top-[90px] aspect-[2/1]  w-[100%] lg:w-[70%] max-h-[400px] lg:max-h-full ">
      <div
        className="h-full w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth"
        onScroll={(e) => {
          setdotnum(
            Math.floor(
              (e.target.scrollLeft + e.target.clientWidth / 2) /
                e.target.clientWidth
            )
          );
        }}
        ref={imagesscrollref}
      >
        {images.map((image, i) => {
          return (
            <Image
              className="min-w-[100%] h-full snap-start snap-always object-contain"
              src={"/" + image}
              alt={name}
              height={400}
              width={754}
              key={i}
            ></Image>
          );
        })}
      </div>
      {/* mini images */}
      <div className="hidden md:flex absolute top-0 left-[10px] w-[70px] h-full  flex-col justify-center gap-[10px] ">
        {images.map((image, i) => {
          return (
            <Image
              className={`w-full aspect-square  object-contain bg-bg1  cursor-pointer   border ${
                dotnum == i
                  ? "  outline outline-cyan-500"
                  : " border-slate-300"
              }`}
              src={"/" + image}
              alt={name}
              height={100}
              width={100}
              key={i}
              onClick={() => {
                imagesscrollref.current.scrollLeft =
                  imagesscrollref.current.clientWidth * i;
              }}
            ></Image>
          );
        })}
      </div>
      {/* share button */}
      <button
        className="absolute right-[20px] top-[20px] "
        title="Copy Link"
        onClick={sharepage}
      >
        <Linksvg styles="h-[30px] aspect-square fill-none stroke-textcolor" />
      </button>
      {/* dotts */}
      <div className="absolute bottom-0 left-0 z-10 w-full ">
        <div className="absolute bottom-[5px] left-[50%] flex gap-[10px] translate-x-[-50%]">
          {images.map((dotts, i) => {
            return (
              <div
                key={i}
                className="h-[5px] min-w-[5px] bg-theme  rounded-full duration-200"
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
