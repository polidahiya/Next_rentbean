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
  const { shownotification} = AppContextfn();
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

        shownotification(res?.message);
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
        <div className="h-screen flex flex-col items-center justify-center ">
          <Image
            src={"/logo&ui/no-cart.png"}
            alt="empty cart png image"
            height={172}
            width={200}
            className="w-[200px] object-contain"
          ></Image>
          <div className="text-[25px] font-semibold text-center font-recline mt-[50px]">
            No orders found!
          </div>
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
        className="h-[150px] lg:h-[200px] overflow-hidden"
      >
        <h2 className="max-w-full text-center font-semibold text-[16px] lg:text-[18px] text-ellipsis whitespace-nowrap overflow-hidden font-recline">
          {item.name}
        </h2>
        <div className="flex gap-[10px] items-center">
          <Image
            src={"/" + item.image[0]}
            alt={item.name}
            height={100}
            width={100}
            className="h-[130px] min-w-[130px] lg:h-[180px] lg:min-w-[180px] aspect-square object-cover"
          ></Image>

          {/* descriptions */}
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
              item.status >= 1 ? "bg-theme" : "bg-slate-300 "
            }`}
          ></div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div>Delivery scheduled</div>
          <div
            className={`h-[3px] w-full rounded-[2px] ${
              item.status >= 2 ? "bg-theme" : "bg-slate-300 "
            }`}
          ></div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div>Delivered</div>
          <div
            className={`h-[3px] w-full rounded-[2px] ${
              item.status >= 3 ? "bg-theme" : "bg-slate-300 "
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Publicpage;
