import React from "react";
import Link from "next/link";
import Image from "next/image";
import Homesvg from "../../../components/(svgs)/Home";

function Emptycart({ location }) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ minHeight: "calc(100dvh - 60px)" }}
    >
      <Image
        src={"/logo&ui/no-cart.png"}
        alt="empty cart png image"
        height={172}
        width={200}
        className="w-[200px] object-contain"
      ></Image>
      <h2 className="font-extrabold text-[22px] mt-[50px]">No items in cart</h2>
      <p className="text-[14px] max-w-[400px] text-center">
        Add a few items to your cart and come back here for an express checkout
        process!
      </p>
      <Link
        href={"/" + location}
        className="flex items-center gap-[5px] bg-green-600 px-[80px] py-[10px] text-white rounded-full mt-[20px]"
      >
        <Homesvg styles="h-[20px] fill-white" />
        <span>Home</span>
      </Link>
    </div>
  );
}

export default Emptycart;
