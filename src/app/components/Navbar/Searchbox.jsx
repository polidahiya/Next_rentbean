"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppContextfn } from "@/app/Context/Index";
import Searchicon from "../(svgs)/Searchicon";
import Searchsuggestionarrow from "../(svgs)/Searchsuggestionarrow";

function Searchbox({ location }) {
  const router = useRouter();
  const { togglemobilesearch, settogglemobilesearch, searchinputref } =
    AppContextfn();
  const [search, setSearch] = useState("");
  const [showsuggestions, setshowsuggestions] = useState(false);

  const suggestionlist = [
    { name: "Table", link: "Table" },
    { name: "Laptop", link: "Laptop" },
    { name: "Bed", link: "Bed" },
    { name: "Treadmill", link: "Treadmill" },
    { name: "Ps4", link: "Ps4" },
    { name: "Hookah", link: "Hookah" },
  ];

  return (
    <div
      className={`absolute top-[60px] left-0 w-full  py-[5px] lg:py-0  lg:left-auto lg:w-auto lg:relative lg:top-[15px] lg:block
    ${togglemobilesearch ? "block" : " hidden"}`}
    >
      {/* cancle button */}
      {togglemobilesearch && (
        <button
          className="fixed lg:hidden top-0 left-0 h-screen w-screen"
          onClick={() => {
            settogglemobilesearch(!togglemobilesearch);
          }}
        ></button>
      )}

      {/*  */}
      <div
        className={`relative h-[40px] lg:h-[30px] mx-[10px] flex items-center justify-center bg-white border border-slate-300 rounded-full overflow-hidden `}
      >
        <input
          type="text"
          ref={searchinputref}
          className="h-full w-full indent-[20px] outline-none"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && search.trim() != "") {
              settogglemobilesearch(!togglemobilesearch);
              router.push(`/${location}/search?q=${search}`);
            }
          }}
          onFocus={() => {
            setshowsuggestions(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setshowsuggestions(false);
            }, 300);
          }}
        />
        <button
          onClick={() => {
            if (search.trim() != "") {
              settogglemobilesearch(!togglemobilesearch);
              router.push(`/${location}/search?q=${search}`);
            }
          }}
          className="h-full px-[20px] lg:px-[15px] border-l border-l-slate-300"
        >
          <Searchicon styles="h-[20px]" />
        </button>
      </div>
      {showsuggestions && (
        <div className="fadeup relative mx-[10px] bg-white flex flex-col gap-[5px] p-[5px] mt-[5px] border border-slate-300 rounded-[15px] shadow-md">
          {suggestionlist.map((item, i) => {
            return (
              <Link
                href={`/${location}/search?q=${item.link}`}
                className={`flex w-full items-center h-[30px] lg:hover:bg-slate-100 rounded-full pl-[10px] ${
                  i == suggestionlist.length - 1
                    ? ""
                    : "border-b border-b-slate-300"
                }`}
                onClick={() => {
                  settogglemobilesearch(!togglemobilesearch);
                  setSearch(item.name);
                }}
                key={i}
              >
                <Searchsuggestionarrow styles="h-[20px] fill-cyan-500 stroke-theme" />
                <span className="ml-[10px]"> {item.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbox;
