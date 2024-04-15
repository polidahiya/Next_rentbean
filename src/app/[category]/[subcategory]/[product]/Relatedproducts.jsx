"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Imageloading from "../../../components/Imageloading/Imageloading";
import Relatedprosvg from "../../../components/(svgs)/Relatedpro";

function Relatedproducts({ products, typeofprices, params }) {
  let scrollref = useRef(null);
  let scrollvalue = 400;
  const handleScroll = (amount) => {
    if (scrollref.current) {
      scrollref.current.scrollLeft += amount;
    }
  };

  return (
    <div className="p-[10px] md:p-[40px] bg-bg1">
      <div className="flex items-end px-[10px] lg:px-0">
        <h2 className="flex items-center gap-[10px] text-[22px] font-semibold whitespace-nowrap">
          <Relatedprosvg />
          Related products
        </h2>
        <div className="flex gap-[10px] ml-auto">
          <button
            onClick={() => {
              handleScroll(-scrollvalue);
            }}
            className="h-[30px] w-[30px] opacity-50 border border-gray-400 rounded-full hover:opacity-70"
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
            className="h-[30px] w-[30px] opacity-50 border border-gray-400 rounded-full hover:opacity-70 rotate-180"
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
        className="overflow-x-scroll md:snap-x scroll-smooth flex gap-[10px] mt-[30px]"
      >
        {products.map((product, i) => {
          return (
            <Imagecard
              product={product}
              i={i}
              key={i}
              params={params}
              typeofprices={typeofprices}
            />
          );
        })}
      </div>
    </div>
    //
  );
}

function Imagecard({ product, i, params, typeofprices }) {
  const [imgloading, setimgloading] = useState(true);
  return (
    <Link
      href={
        "/" + params.category + "/" + params.subcategory + "/" + product.pid
      }
      className={`min-w-[250px] p-[10px] flex flex-col justify-between gap-[10px] bg-white object-cover ${
        i % 2 == 0 ? "snap-start" : ""
      }`}
      key={i}
    >
      <div className="relative w-full aspect-square box-border overflow-hidden">
        {imgloading && <Imageloading />}
        <Image
          src={"/" + product.image[0]}
          alt={product.name}
          width={230}
          height={230}
          className="absolute h-full w-full object-cover"
          onLoad={() => {
            setimgloading(false);
          }}
        ></Image>
      </div>
      <p className="text-center text-[16px] mt-[10px] text-ellipsis whitespace-nowrap overflow-hidden">
        {product.name}
      </p>
      <div className="flex justify-center items-center text-[14px] text-theme">
        Rent : ₹
        {Math.floor(
          product.prices[product.prices.length - 1] /
            typeofprices[product.pricetype - 1].time[
              typeofprices[product.pricetype - 1].time.length - 1
            ]
        )}
        /{typeofprices[product.pricetype - 1].suffix}
      </div>
    </Link>
  );
}
export default Relatedproducts;
