import React from "react";
import Image from "next/image";

let companiesarr = [
  "/eventmanager/companies/IBM.png",
  "/eventmanager/companies/airtel.png",
  "/eventmanager/companies/HSBC.png",
  "/eventmanager/companies/Wynk_music_logo.png",
  "/eventmanager/companies/pizza-hut-.png",
  "/eventmanager/companies/idfc.png",
  "/eventmanager/companies/Reebok-logo.png",
  "/eventmanager/companies/The_Lalit-01.png",
];
function Trustedby() {
  return (
    <div className="p-[10px] md:p-[40px]">
      <h2 className="text-center text-[30px] font-recline">Trusted By</h2>
      <div className="flex items-center justify-center gap-[10px] flex-wrap mt-[30px] bg-white">
        {companiesarr?.map((item, i) => {
          return (
            <Image
              key={i}
              src={item}
              alt="Trusted by images"
              height={80}
              width={140}
              quality={100}
              className="h-[80px] aspect-[7/4] object-contain border border-slate-300 rounded-[10px] p-[10px] hover:p-[5px] duration-300"
            ></Image>
          );
        })}
      </div>
    </div>
  );
}

export default Trustedby;
