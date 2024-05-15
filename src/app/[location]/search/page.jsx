import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Data } from "../../../components/Getdata";
import Loadingimage from "../[category]/Loadingimage";
import { typeofprices } from "@/components/Commondata";

async function page(params) {
  const words = params.searchParams.q;
  const location = params.params.location;
  const data = await Data();

  let allproducts = Object.keys(data.data).flatMap((i) =>
    Object.keys(data.data[i].subcat).flatMap((j) =>
      Object.keys(data.data[i].subcat[j].products).map((k) => ({
        product: data.data[i].subcat[j].products[k],
        category: i,
        subcat: j,
      }))
    )
  );

  words.split(" ").forEach((word, i) => {
    if (word.trim() !== "") {
      allproducts = allproducts.filter(
        (product) =>
          product?.product?.name?.toLowerCase().includes(word.toLowerCase()) ||
          product?.product?.metadesc
            ?.toLowerCase()
            .includes(word.toLowerCase()) ||
          product?.product?.keywords?.toLowerCase().includes(word.toLowerCase())
      );
    }
  });

  // sorting so that name comes first..
  allproducts.sort((a, b) => {
    const nameA = a?.product?.name?.toLowerCase();
    const nameB = b?.product?.name?.toLowerCase();
    if (
      nameA.includes(words.toLowerCase()) &&
      !nameB.includes(words.toLowerCase())
    ) {
      return -1;
    } else if (
      !nameA.includes(words.toLowerCase()) &&
      nameB.includes(words.toLowerCase())
    ) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ minHeight: "calc(100dvh - 60px)" }}
    >
      <div className="px-[100px] py-[2px] text-theme font-recline text-[30px] mt-[10px]">
        {words} - <span className="text-cyan-500 text-[16px] font-recline"> &#40;{allproducts.length} results found &#41;</span>
      </div>
      {/*  */}
      {allproducts.length == 0 ? (
        <Nosearchfound />
      ) : (
        <div className="w-full h-full flex items-center justify-center gap-[20px] flex-wrap px-[5px] md:px-[40px] py-[30px]">
          {allproducts?.map((item, i) => {
            return (
              <Link
                href={
                  "/" +
                  location +
                  "/" +
                  item.category.replace(/ /g, "_") +
                  "/" +
                  item.subcat.replace(/ /g, "_") +
                  "/" +
                  item.product.pid
                }
                className="productcards blackshadow1 relative  lg:w-[250px] rounded-[20px] cursor-pointer p-[10px] flex flex-col gap-[10px] box-content lg:hover:translate-y-[-5px] duration-300 overflow-hidden"
                key={i}
              >
                <Loadingimage
                  src={"/" + item.product.image[0]}
                  alt={item.product.name}
                  objectfit="object-cover"
                />
                <div className="text-ellipsis text-center overflow-hidden whitespace-nowrap px-0[10px] ">
                  {item.product.name}
                </div>
                <div className=" h-[30px] min-w-[70%] w-[70%] mx-auto px-[10px] text-[14px] box-content bg-theme text-white whitespace-nowrap rounded-[10px] flex items-center justify-center">
                  Rent : ₹
                  {Math.floor(
                    item.product.prices[item.product.prices.length - 1] /
                      typeofprices[item.product.pricetype - 1].time[
                        typeofprices[item.product.pricetype - 1].time.length - 1
                      ]
                  )}
                  /{typeofprices[item.product.pricetype - 1].suffix}
                </div>
                <div className="absolute h-[2px] bg-theme w-[50%] rounded-full left-[50%] bottom-[4px] translate-x-[-50%]"></div>

                {/* if not available */}

                {item.product.available == 0 && (
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
      )}
    </div>
  );
}

function Nosearchfound() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <Image
        src="/logo&ui/nosearchfound.jpg"
        alt="no search found image"
        height={300}
        width={300}
      ></Image>
      <p className="font-recline text-[22px]">No search found</p>
    </div>
  );
}

export default page;
