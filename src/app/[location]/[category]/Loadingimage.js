"use client";
import React, { useState } from "react";
import Image from "next/image";
import Imageloading from "../../components/Imageloading/Imageloading";

function Loadingimage({ src,alt,objectfit }) {
  const [imgloading, setimgloading] = useState(true);
  return (
    <div  className="relative w-full aspect-square box-border overflow-hidden">
      {imgloading && <Imageloading />}
      <Image
        src={src}
        alt={alt}
        height={200}
        width={200}
        className={`absolute h-full w-full rounded-[10px] ${objectfit}`}
        loading="eager"
        onLoad={() => {
          setimgloading(false);
        }}
      ></Image>
    </div>
  );
}

export default Loadingimage;
