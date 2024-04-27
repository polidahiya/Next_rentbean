import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Data, typeofprices } from "../../../Data";
import Loadingimage from "../Loadingimage";

function page({ params }) {
  let location = params?.location?.replace(/_/g, " ");
  let category = params?.category?.replace(/_/g, " ");
  let subcat = params?.subcategory?.replace(/_/g, " ");
  let products = Data()?.data[category]?.subcat[subcat]?.products;

  if (!Object.keys(Data().data[category].subcat).includes(subcat)) {
    notFound();
  }

  return (
    <>
      <div className="text-[20px] relative h-[60px] flex items-center justify-center bg-bg1">
        <Link
          href={"/" + location.replace(/ /g, "_") + "/" + params.category}
          className="group absolute left-[40px] h-[40px] w-[40px] top-[50%] bg-theme translate-y-[-50%] rounded-full overflow-hidden flex items-center justify-center lg:hover:w-[140px] duration-300"
        >
          <svg
            className="absolute h-[30px] w-[30px] bg-white rounded-full p-[5px] left-[5px] top-[50%] translate-y-[-50%]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#525252"
              d="M7.685 7.332A1 1 0 106.27 5.918l-4.666 4.665a2 2 0 000 2.829l4.668 4.668a1 1 0 001.415-1.414L4.022 13H22a1 1 0 100-2H4.017l3.668-3.668z"
            ></path>
          </svg>
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] flex opacity-0 text-[13px] text-white lg:group-hover:opacity-100 duration-300 ">
            Back
          </div>
        </Link>
        {subcat}
      </div>
      <div className="flex items-center justify-center gap-[20px] flex-wrap px-[5px] md:px-[40px] my-[30px]">
        {products.map((item, i) => {
          return (
            <Link
              href={
                "/" +
                location +
                "/" +
                category.replace(/ /g, "_") +
                "/" +
                subcat.replace(/ /g, "_") +
                "/" +
                item.pid
              }
              className="productcards blackshadow1 relative lg:w-[250px] rounded-[20px] cursor-pointer p-[10px] flex flex-col gap-[10px] box-content lg:hover:translate-y-[-5px] duration-300 overflow-hidden"
              key={i}
            >
              <Loadingimage
                src={"/" + item.image[0]}
                alt={item.name}
                objectfit="object-cover"
              />
              <div className="text-ellipsis text-center overflow-hidden whitespace-nowrap px-0[10px]">
                {item.name}
              </div>
              <div className=" h-[30px] min-w-[70%] w-[70%] mx-auto px-[10px] text-[14px] box-content bg-theme text-white whitespace-nowrap rounded-[10px] flex items-center justify-center">
                Rent : ₹
                {Math.floor(
                  item.prices[item.prices.length - 1] /
                    typeofprices[item.pricetype - 1].time[
                      typeofprices[item.pricetype - 1].time.length - 1
                    ]
                )}
                /{typeofprices[item.pricetype - 1].suffix}
              </div>
              <div className="absolute h-[2px] bg-theme w-[50%] rounded-full left-[50%] bottom-[4px] translate-x-[-50%]"></div>
              {/* if not available */}
              {item.available == 0 && (
                <div
                  className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-white"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,grey , transparent)",
                  }}
                >
                  Currently Unavailable
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default page;
