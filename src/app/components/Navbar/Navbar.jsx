"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Fakenavbg from "./Fakenavbarbg";
import { AppContextfn } from "@/app/Context/Index";
import Homesvg from "../(svgs)/Home";
import Menusvg from "../(svgs)/Menu";
import Cartsvg from "../(svgs)/Cartstroke";

function Navbar({ data }) {
  const { cartproducts, togglelocation, settogglelocation } = AppContextfn();
  const [togglemobilenav, settogglemobilenav] = useState(false);

  useEffect(() => {
    const handleBackButton = () => {
      settogglemobilenav(false);
      settogglelocation(false);
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  return (
    <>
      <nav className="box-border fixed top-0 w-full flex  items-start px-[20px] lg:px-[40px] py-0  z-20 select-none whitespace-nowrap">
        {/* mobile nav bar */}
        <div className="flex lg:hidden items-center justify-evenly fixed bottom-0 left-0 h-[50px] w-full  bg-white z-[60]">
          <Link
            href="/"
            onClick={() => {
              if (togglemobilenav) {
                settogglemobilenav(false);
              }
            }}
          >
            <Homesvg styles="h-[30px] fill-textcolor" />
          </Link>
          <button
            onClick={() => {
              if (togglemobilenav) {
                window.history.back();
              } else {
                history.pushState(null, "", "");
                settogglemobilenav(true);
              }
            }}
          >
            <Menusvg
              styles={`h-[30px] ${
                togglemobilenav ? "stroke-cyan-500" : "stroke-textcolor"
              }`}
            />
          </button>
          <Link
            href="/cart"
            className="relative"
            onClick={() => {
              if (togglemobilenav) {
                settogglemobilenav(false);
              }
            }}
          >
            <Cartsvg styles="h-[30px] fill-none stroke-textcolor" />
            <div className="cartcounter absolute rounded-full right-0 top-0 h-[18px] w-[18px] translate-x-[40%] translate-y-[-40%] flex items-center justify-center bg-theme text-white text-[10px] box-content">
              {Object.keys(cartproducts).length}
            </div>
          </Link>
        </div>
        <Fakenavbg />
        <Link href="/">
          <Image
            src="/logo&ui/3dlogo.png"
            alt="rentbean.in logo image"
            width={156}
            height={60}
          ></Image>
        </Link>

        {/* choose location */}
        <div
          className="location relative top-[15px] h-[30px] flex items-center justify-center gap-[5px] text-sm px-[20px] ml-auto border-[0] lg:border border-textcolor rounded-md cursor-pointer"
          onClick={() => {
            settogglelocation(!togglelocation);
            history.pushState(null, "", "");
          }}
        >
          <svg
            className="h-[15px] scale-[1.6] lg:scale-[1]"
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--theme)"
            version="1"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
          >
            <path d="M32 0C18.746 0 8 10.746 8 24c0 5.219 1.711 10.008 4.555 13.93.051.094.059.199.117.289l16 24a4.001 4.001 0 006.656 0l16-24c.059-.09.066-.195.117-.289C54.289 34.008 56 29.219 56 24 56 10.746 45.254 0 32 0zm0 32a8 8 0 110-16 8 8 0 010 16z"></path>
          </svg>
          <span className="hidden lg:block">Choose location</span>
        </div>
        {/* sidebar */}
        <div
          className={`sidebar fixed bottom-[50px] left-0 w-full lg:w-fit  bg-white flex flex-col lg:static  lg:h-[60px] lg:flex-row  lg:items-start  py-[10px] lg:py-0 z-20 duration-300  border-t border-t-theme lg:border-t-0`}
          style={{
            bottom: togglemobilenav ? "50px" : "-100%",
          }}
        >
          {/* categories */}
          {Object.keys(data).map((title, i) => {
            return (
              <Navlist
                key={i}
                data={data}
                title={title}
                listitems={Object.keys(data[title].subcat)}
                settogglemobilenav={settogglemobilenav}
              />
            );
          })}
        </div>
        {/* cart */}
        <Link
          href="/cart"
          className="relative  top-[15px] h-[30px] ml-[5px] hidden lg:flex  items-center px-[20px] rounded-md cursor-pointer border border-theme no-underline text-theme text-sm "
        >
          <svg
            className="h-[20px] fill-theme"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M2.237 2.288a.75.75 0 10-.474 1.423l.265.089c.676.225 1.124.376 1.453.529.312.145.447.262.533.382.087.12.155.284.194.626.041.361.042.833.042 1.546v2.672c0 1.367 0 2.47.117 3.337.12.9.38 1.658.982 2.26.601.602 1.36.86 2.26.981.866.117 1.969.117 3.336.117H18a.75.75 0 000-1.5h-7c-1.435 0-2.436-.002-3.192-.103-.733-.099-1.122-.28-1.399-.556-.235-.235-.4-.551-.506-1.091h10.12c.959 0 1.438 0 1.814-.248.376-.248.565-.688.943-1.57l.428-1c.81-1.89 1.215-2.834.77-3.508C19.533 6 18.506 6 16.45 6H5.745a8.996 8.996 0 00-.047-.833c-.055-.485-.176-.93-.467-1.333-.291-.404-.675-.66-1.117-.865-.417-.194-.946-.37-1.572-.58l-.305-.1zM7.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM16.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
            </g>
          </svg>
          <span>Cart</span>
          {Object.keys(cartproducts).length > 0 ? (
            <div className="cartcounter absolute rounded-full right-0 top-0 h-[18px] w-[18px] translate-x-[40%] translate-y-[-40%] flex items-center justify-center bg-theme text-white text-[10px] box-content">
              {Object.keys(cartproducts).length}
            </div>
          ) : (
            ""
          )}
        </Link>
        {/* mobile menu button */}
        {/* <svg
          className="block h-[60px] p-[7px]  lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <g>
            <g>
              <path
                stroke="var(--theme)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 17h8m-8-5h14m-8-5h8"
              ></path>
            </g>
          </g>
        </svg> */}
      </nav>
    </>
  );
}

function Navlist({ data, title, listitems, settogglemobilenav }) {
  return (
    <div
      className="navlistcontainer group"
      onClick={() => {
        settogglemobilenav(false);
      }}
    >
      <Link
        href={"/" + title.replace(/ /g, "_")}
        className=" titles flex items-center content-center h-[60px] text-[18px] lg:text-sm px-[10px] font-bold lg:font-normal"
      >
        <svg
          className="h-[20px] lg:group-hover:rotate-[-180deg] duration-300 hidden lg:block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="var(--textcolor)"
            d="M5.707 9.71a1 1 0 000 1.415l4.892 4.887a2 2 0 002.828 0l4.89-4.89a1 1 0 10-1.414-1.415l-4.185 4.186a1 1 0 01-1.415 0L7.121 9.71a1 1 0 00-1.414 0z"
          ></path>
        </svg>
        {title} <span className="block lg:hidden">:</span>
      </Link>

      <div className="flex lg:block gap-[10px] w-full px-[10px] lg:px-0 overflow-x-scroll lg:group-hover:border-b  lg:group-hover:border-t lg:group-hover:border-theme">
        {listitems.map((list, i) => {
          return (
            <Link
              href={
                "/" + title.replace(/ /g, "_") + "/" + list.replace(/ /g, "_")
              }
              className=" lg:h-0  lg:group-hover:h-[40px] min-w-fit rounded-[10px] lg:rounded-none overflow-hidden text-sm flex px-[10px] lg:px-[5px] py-[5px] lg:py-0 items-center justify-center bg-bg1 whitespace-nowrap no-underline cursor-pointer lg:hover:text-theme"
              key={i}
            >
              <div className="flex flex-col items-center justify-between">
                <Image
                  src={"/" + data[title].subcat[list].image}
                  alt={data[title].subcat[list]}
                  width={30}
                  height={30}
                  className="block lg:hidden h-[50px] w-[50px] object-contain mix-blend-multiply"
                ></Image>
                {list}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Navbar;
