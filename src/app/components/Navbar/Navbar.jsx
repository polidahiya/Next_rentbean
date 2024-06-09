"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Fakenavbg from "./Fakenavbarbg";
import Categories from "./Categories";
import Mobilenav from "./Mobilenav";
import Searchbox from "./Searchbox";
import Usermenu from "./Usermenu";
import { AppContextfn } from "@/app/Context/Index";


function Navbar({ data, location, token, userdata }) {
  const {
    cartproducts,
    togglelocation,
    settogglelocation,
    setredirectloginlink,
  } = AppContextfn();

  const [togglecategories, settogglecategories] = useState(false);
  const [toggleusermenu, settoggleusermenu] = useState(false);

  useEffect(() => {
    const handleBackButton = () => {
      settogglecategories(false);
      settogglelocation(false);
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  let sidebartimer;
  const categoriesenterfn = () => {
    settogglecategories(true);
    clearTimeout(sidebartimer);
  };
  const categoriesexitfn = () => {
    sidebartimer = setTimeout(() => {
      settogglecategories(false);
    }, 500);
  };

  return (
    <>
      <nav className="box-border fixed top-0 w-full flex  items-start px-[20px] lg:px-[40px] py-0 z-[20]  select-none whitespace-nowrap">
        {/* mobile nav bar */}
        <Mobilenav
          togglecategories={togglecategories}
          settogglecategories={settogglecategories}
          cartproducts={cartproducts}
          location={location}
          toggleusermenu={toggleusermenu}
          settoggleusermenu={settoggleusermenu}
          setredirectloginlink={setredirectloginlink}
          token={token}
        />
        <Fakenavbg />
        <Link href={"/" + location} title="Home">
          <Image
            src="/logo&ui/3dlogo.png"
            alt="rentbean.in logo image"
            className="h-[60px]"
            width={156}
            height={60}
          ></Image>
        </Link>
        {/* choose location */}
        <div
          className="location relative top-[15px] h-[30px] flex items-center justify-center gap-[5px] text-sm px-[20px] ml-auto border-[0] lg:border lg:border-slate-300 rounded-md cursor-pointer"
          onClick={() => {
            settogglelocation(!togglelocation);
            history.pushState(null, "", "");
          }}
          title="Choose your location"
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
          <span className="hidden lg:block">{location}</span>
        </div>
        {/* search */}
        <Searchbox location={location} />
        {/* toggle sidebar */}
        <div
          className="h-[60px] w-fit hidden lg:block"
          onMouseEnter={categoriesenterfn}
          onMouseLeave={categoriesexitfn}
        >
          <button className="relative top-[15px] h-[30px] flex items-center justify-center gap-[5px] text-sm pl-[20px] pr-[10px]  lg:border border-slate-300 rounded-md">
            <span>Categories</span>
            <svg
              className={`h-[20px]  duration-300 ${
                togglecategories ? "rotate-[-180deg]" : "rotate-[0deg]"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="var(--textcolor)"
                d="M5.707 9.71a1 1 0 000 1.415l4.892 4.887a2 2 0 002.828 0l4.89-4.89a1 1 0 10-1.414-1.415l-4.185 4.186a1 1 0 01-1.415 0L7.121 9.71a1 1 0 00-1.414 0z"
              ></path>
            </svg>
          </button>
        </div>

        {/* sidebar */}
        <div
          className={`sidebar fixed bottom-[50px] py-[10px] left-0 w-full bg-white flex-col z-20 duration-[0.3s] lg:absolute lg:top-[60px] lg:left-[50%] lg:translate-x-[-50%] lg:w-full lg:h-fit  lg:items-start lg:justify-center lg:gap-[5px] lg:border lg:border-slate-300 lg:py-[5px] lg:px-[40px]
            ${togglecategories ? "flex" : "hidden"} `}
          onMouseEnter={categoriesenterfn}
          onMouseLeave={() => {
            settogglecategories(false);
          }}
        >
          {/* categories */}
          {Object.keys(data).map((title, i) => {
            return (
              <Categories
                key={i}
                data={data}
                title={title}
                listitems={Object.keys(data[title].subcat)}
                location={location}
                settogglecategories={settogglecategories}
              />
            );
          })}
        </div>

        {/* cart */}
        <Link
          href={"/" + location + "/cart"}
          className="relative  top-[15px] h-[30px] ml-[10px] hidden lg:flex  items-center px-[20px] rounded-md cursor-pointer border border-slate-300  no-underline text-theme text-sm "
          title="View item in you cart"
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
        {/* login logout */}
        {/* user menu */}
        {token ? (
          <Usermenu
            toggleusermenu={toggleusermenu}
            settoggleusermenu={settoggleusermenu}
            location={location}
            userdata={userdata}
          />
        ) : (
          <Link
            href={`/${location}/loginlogout`}
            className=" relative top-[15px] hidden lg:flex items-center justify-center h-[30px] bg-theme px-[20px] text-white rounded-md ml-[10px] border border-theme lg:hover:bg-white lg:hover:text-theme duration-200"
            onClick={() => {
              const link = new URL(window.location.href);
              setredirectloginlink(link.pathname);
            }}
          >
            Login
          </Link>
        )}
      </nav>
    </>
  );
}


export default React.memo(Navbar);
