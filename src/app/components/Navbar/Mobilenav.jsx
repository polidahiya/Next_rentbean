import React from "react";
import { AppContextfn } from "@/app/Context/Index";
import Link from "next/link";
import Homesvg from "../(svgs)/Home";
import Menusvg from "../(svgs)/Menu";
import Cartsvg from "../(svgs)/Cartstroke";
import Mobilesearchsvg from "../(svgs)/Mobilesearch";
import Usersvg from "../(svgs)/Usersvg";



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
      <div className="flex lg:hidden  items-center justify-around fixed bottom-0 left-0 h-[50px] w-full border-t border-slate-300 bg-white z-[60]">
        {/* home */}
        <Link
          href={"/" + location}
          onClick={() => {
            if (togglecategories) {
              settogglecategories(false);
            }
          }}
        >
          <Homesvg styles="h-[30px]  fill-textcolor" />
        </Link>
  
        {/* search */}
        <button
          className=""
          onClick={() => {
            settogglemobilesearch(!togglemobilesearch);
            setTimeout(() => {
              searchinputref.current.focus();
            }, 300);
          }}
        >
          {togglemobilesearch ? (
            <span className="text-[23px] h-[26px] aspect-square inline-block font-semibold">
              X
            </span>
          ) : (
            <Mobilesearchsvg styles="h-[26px] stroke-textcolor" />
          )}
        </button>
  
        {/* categories */}
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
  
        {/* cart */}
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

  export default Mobilenav