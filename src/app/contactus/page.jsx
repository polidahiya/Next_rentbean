import React from "react";
import Link from "next/link";

function page() {
  return (
    <div>
      <img
        className="fixed h-full w-full left-0 top-0 object-cover z-[-1]"
        src="/logo&ui/bg1.jpeg"
        alt="background"
      />
      <div className="h-[100svh] relative">
        <div className="blackshadow1  p-[40px] text-center  absolute  h-[60%] aspect-[4/3] bg-white rounded-[20px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <p className="font-semibold text-[20px]"> We are here to help!</p>
          <center>
            <Link
              href="mailto:letsolvein@gmail.com"
              className=" flex items-center justify-center gap-[5px] w-full md:w-fit mt-[50px]  text-[14px] pt-[10px] lg:hover:underline  "
            >
              <svg
                className="fill-theme"
                data-name="Layer 21"
                height="24"
                id="Layer_21"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <polygon points="3 12 8.61 14.992 17 8 9 17.455 9 21 12.164 16.887 18 20 21 3 3 12" />
              </svg>
              Rentbean.in
            </Link>
          </center>
          <p className="mt-[20px]">
            Rentbean.in - Plot no. 626 basement, sector 39 Gurgaon Haryana
            122002
          </p>
        </div>
        <div className="h-[50%] bg-transparent"></div>
        <div className="h-[50%] bg-white"></div>
      </div>
    </div>
  );
}

export default page;
