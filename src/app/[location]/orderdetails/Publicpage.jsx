"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getuserorders } from "./Serveractions";
import Loading from "@/app/components/Imageloading/Imageloading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { typeofprices } from "@/components/Commondata";
import { AppContextfn } from "@/app/Context/Index";

function Publicpage({ location }) {
  const router = useRouter();
  const { notifictionarr, setnotifictionarr } = AppContextfn();
  const [orders, setorders] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await getuserorders();

      if (res?.orders) {
        setorders(res?.orders);
      }
      // if not logedin
      if (res.message) {
        if (res.message == "Please login") {
          router.push("/" + location);
        }
        if (res.message == "No Orders Yet!") {
          setorders(null);
        }
        if (res.message == "Server error") {
          router.push("/" + location);
        }

        setnotifictionarr([
          ...notifictionarr,
          {
            id: new Date() + new Date().getMilliseconds(),
            content: res.message,
          },
        ]);
      }
    })();
  }, []);

  if (orders) {
    if (orders.length > 0) {
      return (
        <>
          <div className="text-[25px] font-semibold text-center font-recline mt-[80px]">
            Orders History
          </div>
          <div className="flex flex-col justify-center gap-[20px] px-[5px] md:px-[40px] my-[30px] lg:grid lg:grid-cols-2">
            {orders.map((item, i) => {
              return <Orders key={i} item={item} location={location} />;
            })}
          </div>
        </>
      );
    } else {
      return (
        <div className="h-screen flex flex-col items-center ">
          <div className="text-[25px] font-semibold text-center font-recline mt-[50px]">
            No orders Yet!
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="300"
            version="1"
            viewBox="0 0 300 225"
            className="w-full"
          >
            <g fill="#22c2e2">
              <path
                d="M1095 1881c-4-7-1-18 5-26 9-11 9-15 1-15-6 0-11-7-11-15 0-18 12-19 27-4 8 8 13 8 17 0 10-16 26-13 26 4 0 8-5 15-12 15-9 0-9 3 0 12 7 7 12 18 12 25 0 11-4 11-20 1-17-11-22-10-29 1-6 9-10 10-16 2zM915 1771c-84-38-132-124-121-215 18-159 218-234 339-128 17 15 17 8 15-138l-3-154-39-8c-21-5-51-17-67-29l-28-20-29 21c-88 65-214 34-261-63-37-76-24-137 48-237 52-71 214-220 240-220 20 0 56 25 109 74l32 30v-51c0-37 4-52 16-57 27-11 644-7 644 4 0 6-117 11-317 12l-318 3-3 53c-3 51-2 55 48 109 59 65 100 139 100 183v30h195c169 0 195 2 195 15 0 14-25 15-195 13l-195-3-9 28-10 27h205c129 0 204 4 204 10s-77 10-211 10h-211l-30 26c-17 14-44 28-59 31l-29 6v167c0 126 4 176 15 203 8 20 15 57 15 82s-7 62-15 82c-28 68-54 64 363 61l377-3v-388c0-214-2-393-5-397-3-5-28-10-55-12l-50-3-3-159c-1-88 0-158 2-155 3 3 6 61 7 130 2 174 3 179 48 179 85 0 81-9 81 186v174h320v440h-158c-145 0-159 2-175 20-16 19-29 20-389 20-332 0-373-2-390-17s-19-15-36 0c-52 47-140 59-207 28zm128-12c52-14 102-61 123-114 58-152-103-297-251-225-49 24-81 64-96 122-23 85 31 183 116 213 49 17 60 18 108 4zm1207-259v-200h-300v70h91c64 0 90 3 87 11s-33 11-91 10c-73-2-87 0-87 13 0 10 9 16 26 16 14 0 23 4 19 10-3 6-15 10-26 10-18 0-19 8-19 130v130h300v-200zM943 1096c18-7 40-22 50-33 18-20 18-20 48 8 34 32 82 44 137 35 47-7 82-33 104-77 50-96-12-213-194-370-38-33-74-59-80-59s-58 46-115 103C750 842 711 912 729 993c10 41 51 93 86 107 31 13 92 11 128-4z"
                transform="matrix(.1 0 0 -.1 0 225)"
              ></path>
              <path
                d="M912 1720c-36-22-72-75-71-105 1-15 3-14 9 7 17 56 58 95 114 109 27 6 28 7 6 8-14 0-40-8-58-19zM1027 1730c18-4 44-15 59-24 28-19 63-86 65-126 1-17 3-20 6-7 6 25-16 88-41 115-27 31-69 52-98 51-18-1-15-3 9-9zM975 1680c-8-12 15-140 25-140s24 126 15 140c-8 13-32 13-40 0zm22-42c-3-7-5-2-5 12s2 19 5 13c2-7 2-19 0-25z"
                transform="matrix(.1 0 0 -.1 0 225)"
              ></path>
              <path
                d="M845 1540c10-60 85-120 152-120 62 0 165 84 150 122-4 8-6 7-6-4-2-29-61-87-101-99-77-23-157 18-186 96-15 40-15 40-9 5z"
                transform="matrix(.1 0 0 -.1 0 225)"
              ></path>
              <path
                d="M991 1511c-15-10-8-41 9-41 15 0 25 29 14 40-5 5-15 5-23 1zM2010 1673c109-7 220-7 220 0 0 4-60 6-132 5-73-1-113-3-88-5zM1989 1479c-13-4 36-7 109-8 72-1 132 3 132 7 0 10-206 10-241 1zM1252 985c-4-80-33-129-150-248-59-61-93-101-77-90 56 38 196 194 216 239 14 31 19 60 16 97l-3 52-2-50zM1972 1769c2-6 8-10 13-10s11 4 13 10-4 11-13 11-15-5-13-11z"
                transform="matrix(.1 0 0 -.1 0 225)"
              ></path>
              <path
                d="M2143 1743l147-4v-479l-167-2-168-2 165-6c91-3 171-3 178-1 9 2 12 61 12 252v249l-157-2-158-2 148-3zM1240 1395v-245h610v490h-610v-245zm591 58c1-93 1-193 1-223v-55l-286-3-286-2v450h570l1-167zM628 1149c-31-18-17-79 18-79 17 0 44 28 44 45 0 14-27 45-38 45-4 0-15-5-24-11zm35-34c1-5-6-11-15-13-11-2-18 3-18 13 0 17 30 18 33 0zM2510 1070c0-5 5-10 10-10 6 0 10 5 10 10 0 6-4 10-10 10-5 0-10-4-10-10zM2130 920l175-5V435l-237-3-237-2-5 32c-3 18-7 49-10 68-2 19-3 4-2-35l1-70 253-3 252-2v510l-182-2-183-2 175-6z"
                transform="matrix(.1 0 0 -.1 0 225)"
              ></path>
              <path
                d="M1927 908c-2-7-19-13-38-13h-34l-3-150c-2-104-6-152-15-157-9-6-9-10 0-16 6-4 13-32 15-62l3-55h430l3 217 2 218-24 6c-13 3-89 4-170 2-112-2-146 0-146 10 0 6-4 12-9 12s-11-6-14-12zm338-233V480h-395v390h395V675z"
                transform="matrix(.1 0 0 -.1 0 225)"
              ></path>
              <path
                d="M1978 843c50-2 134-2 185 0 50 1 9 3-93 3s-143-2-92-3zM1885 650c4-6 77-10 186-10 113 0 179 4 179 10s-69 10-186 10c-121 0-183-3-179-10zM1885 600c3-5 33-10 66-10s59 4 59 10-29 10-66 10c-41 0-63-4-59-10zM1885 560c-4-6 42-10 130-10s134 4 130 10-58 10-130 10-126-4-130-10zM1393 414c-24-14-43-30-43-34 0-9 87-60 101-60 5 0 9 27 9 60 0 69-5 71-67 34zm47-34c0-33-6-36-34-15-20 15-20 15 0 30 28 21 34 18 34-15z"
                transform="matrix(.1 0 0 -.1 0 225)"
              ></path>
            </g>
          </svg>
        </div>
      );
    }
  } else {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-[10px]">
        <div className="">
          <Loading />
        </div>
        <div>Loading...</div>
      </div>
    );
  }
}

function Orders({ item, location }) {
  return (
    <div className={`blackshadow1 p-[10px] rounded-[10px] duration-300`}>
      <Link
        href={
          "/" +
          location +
          "/" +
          item.category.replace(/ /g, "_") +
          "/" +
          item.subcat.replace(/ /g, "_") +
          "/" +
          item.pid
        }
        className="relative flex h-[150px] lg:h-[200px] w-full overflow-hidden"
      >
        <Image
          src={"/" + item.image[0]}
          alt={item.name}
          height={100}
          width={100}
          className="h-[130px] min-w-[130px] lg:h-[180px] lg:min-w-[180px] aspect-square object-cover"
        ></Image>

        {/* descriptions */}
        <div className="flex flex-col justify-between w-full h-full p-0 lg:p-[10px]">
          <center>
            <h2 className="w-full max-w-[200px] lg:max-w-[250px] text-center font-semibold text-[16px] lg:text-[18px] text-ellipsis whitespace-nowrap overflow-hidden font-recline">
              {item.name}
            </h2>
          </center>
          <div className="h-full w-full flex flex-col ml-[10px] justify-center text-[12px] lg:text-[14px] ">
            <div>
              Rent : ₹ {item.prices[item.time] * (item.Quantity + 1)}/-
              <br />
              Security Deposit : ₹ {item.refundableprice * (item.Quantity + 1)}
              /- <span className="text-sky-500">(*Refundable)</span>
              <br />
              Total : ₹{" "}
              {item.prices[item.time] * (item.Quantity + 1) +
                item.refundableprice * (item.Quantity + 1)}
              /- <span className="text-sky-500">(Rent + Security Deposit)</span>
            </div>
            <div>Quantity : {item.Quantity + 1}</div>
            <div>
              Tenure : {typeofprices[item.pricetype - 1].time[item.time]}{" "}
              {typeofprices[item.pricetype - 1].fullsuffix[0]}
            </div>
          </div>
        </div>
      </Link>

      {/*  */}
      <div className=" w-full flex gap-[10px] text-[10px]">
        <div className="w-full flex flex-col items-center">
          <div>Order placed</div>
          <div className="h-[3px] w-full bg-theme rounded-[2px]"></div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div>Order varified</div>
          <div
            className={`h-[3px] w-full rounded-[2px] ${
              item.status == "Order varified" ||
              item.status == "Delivery scheduled" ||
              item.status == "Delivered"
                ? "bg-theme"
                : "bg-slate-300 "
            }`}
          ></div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div>Delivery scheduled</div>
          <div
            className={`h-[3px] w-full rounded-[2px] ${
              item.status == "Delivery scheduled" || item.status == "Delivered"
                ? "bg-theme"
                : "bg-slate-300 "
            }`}
          ></div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div>Delivered</div>
          <div
            className={`h-[3px] w-full rounded-[2px] ${
              item.status == "Delivered" ? "bg-theme" : "bg-slate-300 "
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Publicpage;
