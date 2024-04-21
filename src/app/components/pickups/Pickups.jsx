"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Imageloading from "../Imageloading/Imageloading";

function Pickups({ randomproducts, typeofprices, location }) {
  let scrollref = useRef(null);
  let scrollvalue = 400;
  const handleScroll = (amount) => {
    if (scrollref.current) {
      scrollref.current.scrollLeft += amount;
    }
  };
  return (
    <div className="px-[10px] py-[40px]  md:p-[40px] bg-bg1">
      <div className="flex justify-between items-end p-[10px] md:p-0">
        <div className=" text-[20px]">
          You&apos;ll love to
          <br />
          <div className="opacity-90">
            {" "}
            take these home
            <div
              className="h-[2px] w-[100px]"
              style={{ backgroundColor: "var(--theme)" }}
            ></div>
          </div>
        </div>
        <div className="flex gap-[10px]">
          <button
            onClick={() => {
              handleScroll(-scrollvalue);
            }}
            className="h-[35px] w-[35px] opacity-50 border border-gray-400 rounded-full lg:hover:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0F0F0F"
                d="M14.29 5.707a1 1 0 00-1.415 0L7.988 10.6a2 2 0 000 2.828l4.89 4.89a1 1 0 001.415-1.414l-4.186-4.185a1 1 0 010-1.415l4.182-4.182a1 1 0 000-1.414z"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => {
              handleScroll(+scrollvalue);
            }}
            className="h-[35px] w-[35px] opacity-50 border border-gray-400 rounded-full lg:hover:opacity-70 rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0F0F0F"
                d="M14.29 5.707a1 1 0 00-1.415 0L7.988 10.6a2 2 0 000 2.828l4.89 4.89a1 1 0 001.415-1.414l-4.186-4.185a1 1 0 010-1.415l4.182-4.182a1 1 0 000-1.414z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* all posts */}
      <div
        ref={scrollref}
        className="overflow-x-scroll snap-x scroll-smooth snap-mandatory flex gap-[10px] mt-[30px]"
      >
        {randomproducts.map((product, i) => {
          return (
            <Imagecard
              product={product}
              i={i}
              key={i}
              typeofprices={typeofprices}
              location={location}
            />
          );
        })}
      </div>
    </div>
    //
  );
}

function Imagecard({ product, i, typeofprices, location }) {
  const [imgloading, setimgloading] = useState(true);
  return (
    <div
      className={`homepickups min-w-[250px] p-[10px] flex flex-col justify-between gap-[10px] bg-white object-cover snap-always ${
        i % 2 == 0 ? "snap-start" : ""
      }`}
    >
      <Link
        href={
          "/" +
          location.replace(/ /g, "_") +
          "/" +
          product.category.replace(/ /g, "_") +
          "/" +
          product.subcat.replace(/ /g, "_") +
          "/" +
          product.product.pid.replace(/ /g, "_")
        }
      >
        <div className="relative w-full aspect-square box-border overflow-hidden">
          {imgloading && <Imageloading />}
          <Image
            src={"/" + product.product.image[0]}
            alt={product.product.name}
            width={230}
            height={230}
            className="absolute h-full w-full object-contain"
            onLoad={() => {
              setimgloading(false);
            }}
          ></Image>
        </div>
        <p className="text-center text-[14px] md:text-[16px]  mt-[10px] overflow-hidden whitespace-nowrap text-ellipsis">
          {product.product.name}
        </p>
      </Link>
      <div className="flex justify-between items-center w-full px-[10px]">
        <div>
          <div className="text-[12px] text-gray-400">rent</div>
          <div className="text-[14px] ">
            {Math.floor(
              product.product.prices[product.product.prices.length - 1] /
                typeofprices[product.product.pricetype - 1].time[
                  typeofprices[product.product.pricetype - 1].time.length - 1
                ]
            )}
            /{typeofprices[product.product.pricetype - 1].suffix}
          </div>
        </div>
        <Link
          href={
            "/" +
            location.replace(/ /g, "_") +
            "/" +
            product.category.replace(/ /g, "_") +
            "/" +
            product.subcat.replace(/ /g, "_")
          }
          className="border border-theme text-theme text-[12px] md:text-[14px] px-[10px] md:px-[20px] py-[7px] flex items-center justify-center lg:hover:bg-theme lg:hover:text-white duration-300"
        >
          See more
        </Link>
      </div>
    </div>
  );
}
export default Pickups;
