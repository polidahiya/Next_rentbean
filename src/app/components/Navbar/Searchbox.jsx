"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Searchicon from "../(svgs)/Searchicon";

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
        <Searchicon styles="h-[20px]" />
      </button>
    </div>
  );
}

export default Searchbox;
