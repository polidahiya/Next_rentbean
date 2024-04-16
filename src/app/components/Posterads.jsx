import React from "react";
import Link from "next/link";
import Image from "next/image";

function Posteradds() {
  return (
    <div className="flex  px-[40px] pt-[20px] gap-[20px] overflow-hidden">
      <div
      className="w-[400px] min-h-full bg-purple-300">hi</div>
      <div className="w-full  flex gap-[20px] overflow-x-scroll ">
        <Link href="/" className="min-w-full">
          <img
            className="w-full h-full"
            src="/images/highlights/ad1.jpg"
            alt="ads"
          />
        </Link>
        <Link href="/" className="min-w-full">
          <img
            className="w-full h-full"
            src="/images/highlights/ad2.jpg"
            alt="ads"
          />
        </Link>
        <Link href="/" className="min-w-full">
          <img
            className="w-full h-full"
            src="/images/highlights/ad3.jpg"
            alt="ads"
          />
        </Link>
        <Link href="/" className="min-w-full">
          <img
            className="w-full h-full"
            src="/images/highlights/ad4.jpg"
            alt="ads"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-[10px]">
        <Image
          src="/images/highlights/ad1.jpg"
          alt="ads"
          height={200}
          width={200}
        ></Image>
        <Image
          src="/images/highlights/ad2.jpg"
          alt="ads"
          height={200}
          width={200}
        ></Image>
        <Image
          src="/images/highlights/ad3.jpg"
          alt="ads"
          height={200}
          width={200}
        ></Image>
        <Image
          src="/images/highlights/ad4.jpg"
          alt="ads"
          height={200}
          width={200}
        ></Image>
      </div>
    </div>
  );
}

export default Posteradds;
