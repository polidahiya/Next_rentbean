import React from "react";
import Link from "next/link";
import Image from "next/image";

function Categories({ data, title, listitems, location, settogglecategories }) {
  return (
    <div
      className="fadeup navlistcontainer lg:flex lg:items-center"
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
export default Categories;
