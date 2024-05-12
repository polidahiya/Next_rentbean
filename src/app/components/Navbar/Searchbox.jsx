"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Searchbox({ location }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className="relative top-[15px] h-[30px] ml-auto flex items-center justify-center border border-slate-300 rounded-full overflow-hidden">
      <input
        type="text"
        className="h-full w-full indent-[20px] outline-none"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push(`/${location}/search?q=${search}`);
          }
        }}
      />
      <button
        onClick={() => {
          router.push(`/${location}/search?q=${search}`);
        }}
        className="h-full px-[15px] border-l border-l-slate-300"
      >
        <svg
          className="h-[20px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <g>
            <g clipPath="url(#clip0_15_152)">
              <path fill="#fff" d="M0 0H24V24H0z"></path>
              <circle
                cx="10.5"
                cy="10.5"
                r="6.5"
                stroke="#000"
                strokeLinejoin="round"
              ></circle>
              <path
                fill="#000"
                d="M19.646 20.354a.5.5 0 00.708-.708l-.708.708zm.708-.708l-5-5-.708.708 5 5 .708-.708z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_15_152">
                <path fill="#fff" d="M0 0H24V24H0z"></path>
              </clipPath>
            </defs>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default Searchbox;
