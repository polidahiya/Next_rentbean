import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AppContextfn } from "../../../Context/Index";

function Cartitems({ item, typeofprices }) {
  const {
    cartproducts,
    setcartproducts,
    notifictionarr,
    setnotifictionarr,
    setcartprodremove,
  } = AppContextfn();
  const [toggletime, settoggletime] = useState(false);
  return (
    <div className="blackshadow1 relative flex h-[150px] lg:h-[200px] w-full p-[10px] rounded-[10px] mb-[20px] overflow-hidden">
      <button
        onClick={() => {
          setcartprodremove({ show: true, productid: item?.pid });
          history.pushState(null, "", "");
        }}
        className=" absolute top-[10px] right-[10px] h-[30px] aspect-square bg-slate-100 flex items-center justify-center lg:hover:bg-red-500 lg:hover:text-white"
      >
        X
      </button>

      <Link href={item.link}>
        <Image
          src={"/" + item.image[0]}
          alt={item.name}
          height={100}
          width={100}
          className="h-[130px] min-w-[130px] lg:h-[180px] lg:min-w-[180px] aspect-square object-cover"
        ></Image>
      </Link>

      {/* descriptions */}

      <div className="flex flex-col justify-between w-full h-full p-0 lg:p-[10px]">
        <center>
          <h2 className="w-full max-w-[200px] lg:max-w-[250px] text-center font-semibold text-[16px] lg:text-[18px] text-ellipsis whitespace-nowrap overflow-hidden font-recline">
            {item.name}
          </h2>
        </center>
        <div className="text-[12px] lg:text-[14px] ml-[10px]">
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
        {/* controllers */}

        <div className="flex items-center justify-between gap-[20px] px-[10px] h-[25px]">
          <div className="flex justify-between border border-slate-300 rounded-full w-full h-full overflow-hidden">
            <button
              className="flex items-center justify-center w-[30%] h-full bg-slate-100"
              onClick={() => {
                if (cartproducts[item.pid].Quantity <= 0) {
                  setnotifictionarr([
                    ...notifictionarr,
                    {
                      id: new Date() + new Date().getMilliseconds(),
                      content: "Quantity is minimum",
                    },
                  ]);
                  return;
                }
                const updatedCartProducts = { ...cartproducts };
                updatedCartProducts[item.pid].Quantity -= 1;
                setcartproducts(updatedCartProducts);
              }}
            >
              -
            </button>
            <span className=" text-[14px] flex items-center justify-center ">
              {item.Quantity + 1}
            </span>
            <button
              className="flex items-center justify-center w-[30%] h-full bg-slate-100"
              onClick={() => {
                if (cartproducts[item.pid].Quantity >= item.limit - 1) {
                  setnotifictionarr([
                    ...notifictionarr,
                    {
                      id: new Date() + new Date().getMilliseconds(),
                      content: "Quantity is maximum",
                    },
                  ]);
                  return;
                }
                const updatedCartProducts = { ...cartproducts };
                updatedCartProducts[item.pid].Quantity += 1;
                setcartproducts(updatedCartProducts);
              }}
            >
              +
            </button>
          </div>
          <div
            className="flex items-center justify-center border border-slate-300 rounded-full w-full h-full text-[14px] cursor-pointer"
            onClick={() => {
              settoggletime(true);
              history.pushState(null, "", "");
            }}
          >
            {typeofprices[item.pricetype - 1].time[item.time]}{" "}
            {typeofprices[item.pricetype - 1].fullsuffix[0]}
          </div>
          {/* select location*/}
          <Selecttime
            item={item}
            toggletime={toggletime}
            settoggletime={settoggletime}
            typeofprices={typeofprices}
          />
        </div>
      </div>
    </div>
  );
}

function Selecttime({ item, toggletime, settoggletime, typeofprices }) {
  const { cartproducts, setcartproducts } = AppContextfn();

  useEffect(() => {
    const handleBackButton = () => {
      settoggletime(false);
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-[100dvh] w-[100vw] bg-black bg-opacity-[40%] z-20 duration-300 ${
        toggletime
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        className="absolute top-0 left-0 h-full w-full cursor-auto z-[-1]"
        onClick={() => {
          window.history.back();
        }}
      ></button>
      <div
        className={`locationbox  absolute top-[50%] left-[50%] translate-x-[-50%]  flex flex-col items-center justify-center gap-[20px] bg-white h-[80vh] w-[80vw] z-20 duration-300 px-[20px] ${
          toggletime
            ? "translate-y-[-50%] opacity-1"
            : "translate-y-[-40%] opacity-0 "
        }`}
      >
        <h2 className="absolute left-[50%] top-[30px] translate-x-[-50%] text-[20px] font-semibold">
          ⏲️ Select Duration
        </h2>

        {typeofprices[item.pricetype - 1].time.map((box, i) => {
          return (
            <button
              key={i}
              className={`h-[35px] w-full lg:w-[350px] border border-theme rounded-[10px] lg:hover:scale-[1.05] duration-300 ${
                item.time == i ? "text-white bg-theme" : " text-theme bg-white"
              }`}
              onClick={() => {
                const updatedCartProducts = { ...cartproducts };
                updatedCartProducts[item.pid].time = i;
                setcartproducts(updatedCartProducts);
              }}
            >
              {box}
              {typeofprices[item.pricetype - 1].fullsuffix[i == 0 ? 0 : 1]} - ₹
              {item.prices[i]} - ( ₹
              {Math.floor(
                item.prices[i] / typeofprices[item.pricetype - 1].time[i]
              )}{" "}
              / {typeofprices[item.pricetype - 1].suffix} )
            </button>
          );
        })}

        {/* close button */}
        <button
          className="absolute right-0 top-0 h-[50px] aspect-square text-theme  bg-white z-10 lg:hover:bg-theme lg:hover:text-white"
          onClick={() => {
            window.history.back();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Cartitems;
