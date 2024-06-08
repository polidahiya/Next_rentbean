"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Fakenavbg from "./Fakenavbarbg";
import Searchbox from "./Searchbox";
import { AppContextfn } from "@/app/Context/Index";
import { logout } from "../logoutaction";
import Homesvg from "../(svgs)/Home";
import Menusvg from "../(svgs)/Menu";
import Cartsvg from "../(svgs)/Cartstroke";
import Usersvg from "../(svgs)/Usersvg";
import Navorders from "../(svgs)/Navorders";
import Heart from "../(svgs)/Heart";
import Logout from "../(svgs)/Logout";
import Mobilesearchsvg from "../(svgs)/Mobilesearch";
import Updateusersvg from "../(svgs)/Updateuser";

function Navbar({ data, location, token }) {
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
              <Navlist
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

function Navlist({ data, title, listitems, location, settogglecategories }) {
  return (
    <div
      className="navlistcontainer lg:flex lg:items-center"
      onClick={() => {
        settogglecategories(false);
      }}
    >
      <Link
        href={"/" + location + "/" + title.replace(/ /g, "_")}
        className=" titles flex items-center justify-center h-[60px] text-[18px] lg:min-w-[150px] lg:h-[40px] lg:text-sm px-[10px] lg:justify-start font-bold"
      >
        {title} :
      </Link>
      <div className="flex gap-[10px] w-full px-[10px]  overflow-x-scroll lg:items-center lg:gap-[5px] lg:px-0 ">
        {listitems.map((list, i) => {
          return (
            <Link
              href={
                "/" +
                location +
                "/" +
                title.replace(/ /g, "_") +
                "/" +
                list.replace(/ /g, "_")
              }
              className=" min-w-fit  overflow-hidden text-sm flex px-[10px]  py-[5px] items-center justify-center whitespace-nowrap no-underline cursor-pointer lg:hover:text-theme lg:p-0"
              key={i}
            >
              <div className="flex flex-col items-center justify-between lg:w-full  lg:flex-row lg:justify-start lg:gap-[10px] lg:border lg:border-slate-300 lg:rounded-[10px] lg:p-[5px] lg:pr-[20px]">
                <Image
                  src={"/" + data[title].subcat[list].image}
                  alt={Object.keys(data[title].subcat)}
                  width={30}
                  height={30}
                  className="block h-[50px] w-[50px] object-contain mix-blend-multiply lg:h-[40px] lg:w-[40px]"
                ></Image>
                <span>{list}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Usermenu({ toggleusermenu, settoggleusermenu, location }) {
  const { notifictionarr, setnotifictionarr } = AppContextfn();

  return (
    <>
      {/* usermenu svg */}
      <button
        className="relative top-[15px] hidden lg:flex h-[30px]  ml-[20px] z-20"
        onClick={() => {
          settoggleusermenu(!toggleusermenu);
        }}
      >
        <Usersvg styles="h-[30px]  border border-slate-300 rounded-full cursor-pointer" />
      </button>
      {/* cancle button */}
      {toggleusermenu && (
        <button
          className="fixed top-0 left-0 h-screen w-screen cursor-default"
          onClick={() => {
            settoggleusermenu(!toggleusermenu);
          }}
        ></button>
      )}
      {/* menu */}
      {toggleusermenu && (
        <div
          className="fadeup fixed lg:absolute bottom-[55px] right-[10px] lg:bottom-auto lg:top-[50px] lg:right-[40px] flex flex-col gap-[2px] w-[250px]  bg-white border border-slate-300 rounded-[10px] p-[10px] shadow-lg duration-300 "
          onClick={() => {
            settoggleusermenu(!toggleusermenu);
          }}
        >
          <Link
            href={`/${location}/orderdetails`}
            className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
          >
            <Navorders styles="h-[25px]" />
            Orders Detail
          </Link>
          <div className="w-full h-[1px] bg-slate-300"></div>
          <Link
            href={`/${location}/likedproducts`}
            className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
          >
            <Heart styles="h-[30px] w-[30px] fill-red-500 " />
            Liked Products
          </Link>
          <div className="w-full h-[1px] bg-slate-300"></div>
          <Link
            href={`/${location}/updateuserdetails`}
            className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
          >
            <Updateusersvg styles="h-[25px]" />
            Update User Details
          </Link>
          <div className="w-full h-[1px] bg-slate-300"></div>
          <div
            className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
            onClick={async () => {
              let res = await logout();
              setnotifictionarr([
                ...notifictionarr,
                {
                  id: new Date() + new Date().getMilliseconds(),
                  content: res?.message,
                },
              ]);
            }}
          >
            <Logout styles="h-[25px]" />
            Logout
          </div>
        </div>
      )}
    </>
  );
}

function Mobilenav({
  cartproducts,
  togglecategories,
  settogglecategories,
  location,
  toggleusermenu,
  settoggleusermenu,
  token,
}) {
  const {
    togglemobilesearch,
    settogglemobilesearch,
    setredirectloginlink,
    searchinputref,
  } = AppContextfn();

  return (
    <div className="flex lg:hidden  items-center justify-evenly fixed bottom-0 left-0 h-[50px] w-full border-t border-slate-300 bg-white z-[60]">
      <Link
        href={"/" + location}
        onClick={() => {
          if (togglecategories) {
            settogglecategories(false);
          }
        }}
      >
        <Homesvg styles="h-[30px] fill-textcolor" />
      </Link>
      <button
        onClick={() => {
          settogglemobilesearch(!togglemobilesearch);
          setTimeout(() => {
            searchinputref.current.focus();
          }, 200);
        }}
      >
        <Mobilesearchsvg styles="h-[26px] stroke-textcolor" />
      </button>
      <button
        onClick={() => {
          if (togglecategories) {
            window.history.back();
          } else {
            history.pushState(null, "", "");
            settogglecategories(true);
          }
        }}
      >
        <Menusvg
          styles={`h-[30px] ${
            togglecategories ? "stroke-cyan-500" : "stroke-textcolor"
          }`}
        />
      </button>
      <Link
        href={"/" + location + "/cart"}
        className="relative"
        onClick={() => {
          if (togglecategories) {
            settogglecategories(false);
          }
        }}
      >
        <Cartsvg styles="h-[30px] fill-none stroke-textcolor" />
        <div className="cartcounter absolute rounded-full right-0 top-0 h-[18px] w-[18px] translate-x-[40%] translate-y-[-40%] flex items-center justify-center bg-theme text-white text-[10px] box-content">
          {Object.keys(cartproducts).length}
        </div>
      </Link>
      {/* usermenu svg */}
      {token ? (
        <button
          className="h-[30px]"
          onClick={() => {
            settoggleusermenu(!toggleusermenu);
          }}
        >
          <Usersvg styles="h-[30px]  border-[2px] border-slate-300 rounded-full cursor-pointer" />
        </button>
      ) : (
        <Link
          href={`/${location}/loginlogout`}
          onClick={() => {
            const link = new URL(window.location.href);
            setredirectloginlink(link.pathname);
          }}
        >
          <Usersvg styles="h-[30px]  border-[2px] border-slate-300 rounded-full cursor-pointer" />
        </Link>
      )}
    </div>
  );
}
export default React.memo(Navbar);