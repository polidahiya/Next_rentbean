"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AppContextfn } from "../../../../Context/Index";
import { likeproduct, isliked } from "./serveractions";
import Linksvg from "../../../../components/(svgs)/Linksvg";
import Imageloading from "@/app/components/Imageloading/Imageloading";
import Heart from "@/app/components/(svgs)/Heart";

function Topimages({ images, name, productid }) {
  const { shownotification} = AppContextfn();
  const [dotnum, setdotnum] = useState(0);
  const [liked, setliked] = useState(false);
  const imagesscrollref = useRef();

  // check liked
  useEffect(() => {
    (async () => {
      let res = await isliked(productid);
      if (!res) return;

      setliked(res);
    })();
  }, []);

  let link;
  if (typeof window !== "undefined") {
    link = new URL(location.href);
  }
  function sharepage() {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(link)
        .then(function () {
          shownotification("Link copied!")
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
    shownotification("Link copied!")
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
        {images.map((image, i) => (
          <Mainimage key={i} image={image} name={name} />
        ))}
      </div>
      {/* mini images */}
      <div className="hidden md:flex absolute top-0 left-[10px] w-[70px] h-full  flex-col justify-center gap-[10px] ">
        {images.map((image, i) => {
          return (
            <Image
              className={`w-full aspect-square  object-contain bg-bg1  cursor-pointer   border ${
                dotnum == i ? "  outline outline-cyan-500" : " border-slate-300"
              }`}
              src={"/" + image}
              alt={name}
              height={100}
              width={100}
              key={i}
              quality={1}
              onClick={() => {
                imagesscrollref.current.scrollLeft =
                  imagesscrollref.current.clientWidth * i;
              }}
            ></Image>
          );
        })}
      </div>
      {/* like button */}
      <button
        className="absolute right-[20px] top-[20px] "
        title="Add to favourites"
        onClick={async () => {
          let res = await likeproduct(productid, liked);
          if (res) {
            if (res.message == "Added to favourites") {
              setliked(true);
            }
            if (res.message == "Removed from favourites") {
              setliked(false);
            }
            shownotification(res?.message)
          }
        }}
      >
        <Heart
          styles={`h-[30px]  w-[30px]  ${
            liked
              ? "fill-red-500 stroke-none"
              : "fill-white stroke-[5px] stroke-textcolor "
          }`}
        />
      </button>
      {/* share button */}
      <button
        className="absolute right-[20px]  top-[60px]"
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

function Mainimage({ image, name }) {
  const [loading, setloading] = useState(true);
  return (
    <div className="min-w-[100%] h-full">
      {loading && <Imageloading />}
      <Image
        className="min-w-[100%] h-full snap-start snap-always object-contain"
        src={"/" + image}
        alt={name}
        height={400}
        width={754}
        loading="eager"
        quality={100}
        onLoad={() => {
          setloading(false);
        }}
      ></Image>
    </div>
  );
}
export default Topimages;
