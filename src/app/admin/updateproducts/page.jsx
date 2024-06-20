import React from "react";
import Link from "next/link";
import Image from "next/image";
import Productupdater from "./Productupdater";
// import { sitedata } from "@/components/mongodb";
import { testdata } from "@/components/mongodb";

async function page() {
  // let data = await sitedata.findOne({});;
  let data = await testdata.findOne({});;
  data = data.data;

  return (
    <>
      <nav className="blackshadow1 sticky top-0 left-0 flex items-center w-full h-[60px] bg-white px-[10px] md:px-[40px] ">
        <Link href="/admin">
          <Image
            src="/logo&ui/3dlogo.png"
            alt="rentbean.in logo image"
            width={156}
            height={60}
            priority
          ></Image>
        </Link>
      </nav>
      <Productupdater data={data} />
    </>
  );
}

export default page;
