"use client";
import React from "react";
import Link from "next/link";
import { AppContextfn } from "../Context/Index";
import Facebooksvg from "../components/(svgs)/Facebook";
import Instagramsvg from "../components/(svgs)/Instagram";
import Twittersvg from "../components/(svgs)/Twitter";

function Footer() {
  const { location } = AppContextfn();
  return (
    <div className="bg-bg1 px-[10px] md:px-[40px] pt-[0] md:pt-[40px] pb-[90px] lg:pb-[40px]">
      <div className="w-full flex flex-col md:flex-row text-center md:text-left">
        <div className="flex flex-col w-full ">
          <h2 className="font-semibold mt-[40px] md:mt-0 text-[18px] font-recline">Rentbean.in</h2>
          <Link
            href={"/" + location.replace(/ /g, "_") + "/aboutus"}
            className=" w-full md:w-fit  text-[12px] pt-[10px] lg:hover:underline "
          >
            About us
          </Link>
          <Link
            href={"/" + location.replace(/ /g, "_") + "/contactus"}
            className=" w-full md:w-fit  text-[12px] pt-[10px] lg:hover:underline "
          >
            Contact us
          </Link>
          <Link
            href={"/" + location.replace(/ /g, "_") + "/documents_required"}
            className=" w-full md:w-fit  text-[12px] pt-[10px] lg:hover:underline "
          >
            Documents Required
          </Link>
        </div>
        <div className="flex flex-col w-full ">
          <h2 className="font-semibold mt-[40px] md:mt-0 text-[18px] font-recline">POLICIES</h2>
          <Link
            href={"/" + location.replace(/ /g, "_") + "/shipping_policy"}
            className=" w-full md:w-fit  text-[12px] pt-[10px] lg:hover:underline "
          >
            Shipping Policy
          </Link>
          <Link
            href={
              "/" +
              location.replace(/ /g, "_") +
              "/cancleation_and_return_policy"
            }
            className=" w-full md:w-fit  text-[12px] pt-[10px] lg:hover:underline "
          >
            Cancellation & Return
          </Link>
          <Link
            href={"/" + location.replace(/ /g, "_") + "/privacy_policy"}
            className=" w-full md:w-fit  text-[12px] pt-[10px] lg:hover:underline "
          >
            Privacy Policy
          </Link>
          {/* <Link
            href="/"
            className=" w-full md:w-fit  text-[12px] pt-[10px] lg:hover:underline "
          >
            Rental Terms & Conditions
          </Link> */}
        </div>
        <div className="flex flex-col w-full ">
          <h2 className="font-semibold mt-[40px] md:mt-0 text-[18px] font-recline">NEED HELP?</h2>
          <Link
            href="mailto:letsolvein@gmail.com"
            className=" flex items-center justify-center gap-[5px] w-full md:w-fit  text-[12px] pt-[10px] lg:hover:underline "
          >
            <svg
              className="fill-theme"
              data-name="Layer 21"
              height="24"
              id="Layer_21"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <polygon points="3 12 8.61 14.992 17 8 9 17.455 9 21 12.164 16.887 18 20 21 3 3 12" />
            </svg>
            Rentbean.in
          </Link>
        </div>
      </div>
      <hr className="w-full h-[1px] bg-slate-400 my-[40px]" />
      <div className="relative flex">
        <p className=" text-[12px] max-w-[100px] md:max-w-[300px]">
          &copy; {new Date().getFullYear()}{" "}
          <strong className="font-bold">RentBean.in</strong>. All rights
          reserved.
        </p>
        <div className="flex gap-[10px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
          <Link
            target="_blank"
            href="https://www.facebook.com/rentbean.in"
            className="group  border border-theme rounded-full p-[5px] lg:hover:bg-theme duration-200"
          >
            <Facebooksvg styles="fill-theme h-[20px] aspect-square lg:group-hover:fill-white duration-200" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/rentbean.in?utm_source=qr&igsh=b3o4YjV4Z3B5d251"
            className="group  border border-theme rounded-full p-[5px] lg:hover:bg-theme duration-200"
          >
            <Instagramsvg styles="fill-theme h-[20px] aspect-square lg:group-hover:fill-white duration-200" />
          </Link>
          <Link
            target="_blank"
            href="https://twitter.com/rentbean_in"
            className="group  border border-theme rounded-full p-[5px] lg:hover:bg-theme duration-200"
          >
            <Twittersvg styles="fill-theme h-[20px] aspect-square lg:group-hover:fill-white duration-200" />
          </Link>
        </div>
        <button
          className="ml-auto flex items-center gap-[5px] "
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          <svg
            className="h-[25px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--theme)"
            viewBox="0 0 32 32"
          >
            <g>
              <g
                fill="var(--theme)"
                fillRule="evenodd"
                stroke="none"
                strokeWidth="1"
              >
                <g fill="var(--theme)" transform="translate(-362 -1089)">
                  <path d="M384.535 1105.54a1 1 0 01-1.414 0l-4.121-4.13V1112a1.001 1.001 0 01-2 0v-10.59l-4.121 4.13a1 1 0 01-1.414 0 1.006 1.006 0 010-1.42l5.656-5.66c.24-.24.568-.31.879-.25.311-.06.639.01.879.25l5.656 5.66c.391.39.391 1.02 0 1.42zM378 1089c-8.837 0-16 7.16-16 16s7.163 16 16 16 16-7.16 16-16-7.163-16-16-16z"></path>
                </g>
              </g>
            </g>
          </svg>
          Go Top
        </button>
      </div>
    </div>
  );
}

export default Footer;
