import React from "react";
import Link from "next/link";
import Image from "next/image";
import Addproduct from "./Addproduct"

async function page() {

  return (
    <>
      <nav className="blackshadow1 sticky top-0 left-0 flex items-center w-full h-[60px] bg-white px-[10px] md:px-[40px] z-50">
        <Link href="/">
          <Image
            src="/logo&ui/3dlogo.png"
            alt="rentbean.in logo image"
            width={156}
            height={60}
            priority
          ></Image>
        </Link>
      </nav>
      <Addproduct />
    </>
  );
}

export default page;
