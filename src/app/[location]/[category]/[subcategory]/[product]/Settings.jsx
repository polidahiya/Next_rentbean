"use client";
import React, { useEffect, useState } from "react";
import { AppContextfn } from "../../../../Context/Index";
import Deliverytruck from "../../../../components/(svgs)/Deliverytruck";
import Cart from "../../../../components/(svgs)/Cart";
import Delete from "../../../../components/(svgs)/Delete";

function Settings({ product, typeofprices, link }) {
  const { cartproducts, setcartproducts, notifictionarr, setnotifictionarr } =
    AppContextfn();
  const [productdata, setproductdata] = useState({ time: 0, link: link });

  //set initial options value
  useEffect(() => {
    // ui update if product is in cart
    if (cartproducts[product.pid]) {
      setproductdata({ ...cartproducts[product.pid] });
    } else {
      product.options.forEach((item, i) => {
        setproductdata((pre) => {
          return { ...pre, [item.name]: 0 };
        });
      });
    }
  }, []);

  // update if added into the cart
  useEffect(() => {
    if (cartproducts[product.pid]) {
      setcartproducts({ ...cartproducts, [product.pid]: { ...productdata } });
    }
  }, [productdata]);

  return (
    <div className="blackshadow1 p-[20px] bg-bg1 w-[100%] lg:w-[30%] rounded-[20px]">
      <h3 className="text-center text-[22px] font-medium font-recline">{product.name}</h3>
      {/* otions */}
      {product.options.map((item, i) => {
        return (
          <Settingbox
            item={item}
            key={i}
            productdata={productdata}
            setproductdata={setproductdata}
          />
        );
      })}
      <hr className="my-[10px] mx-auto w-[80%] bg-gray-400 min-h-[1px]" />
      {/* tenure */}
      <div className="flex items-center gap-[10px]">
        <span>Choose Tenure</span>{" "}
        <span className="h-[15px] aspect-square border border-cyan-500 text-cyan-500 text-[12px] rounded-full  flex items-center justify-center cursor-pointer"
        title="Higher the tenure lower the monthly and daily price">
          i
        </span>
      </div>
      <div className="mt-[10px] flex justify-between items-center">
        {typeofprices[product.pricetype - 1].time.map((item, i) => {
          return (
            <span
              className={`w-full grid place-content-center ${
                productdata.time == i ? "text-theme" : ""
              }`}
              key={i}
            >
              {item}
              {typeofprices[product.pricetype - 1].suffix}
            </span>
          );
        })}
      </div>
      <center>
        <input
          className="w-[80%] mt-[5px]"
          type="range"
          value={productdata.time}
          onChange={(e) => {
            setproductdata({ ...productdata, time: parseInt(e.target.value) });
          }}
          min={0}
          max={product.prices.length - 1}
        />
      </center>
      {/* prices */}
      <div className="prices flex  mt-[20px] p-[10px] rounded-[10px]">
        <div className="w-full flex flex-col items-center">
          <div>
            ₹
            {Math.floor(
              product.prices[productdata.time] /
                typeofprices[product.pricetype - 1].time[productdata.time]
            )}
          </div>
          <div className="text-[10px] text-center">
            {typeofprices[product.pricetype - 1].name}
          </div>
        </div>
        <p className="w-[2px] bg-gray-400 min-h-[30px] my-auto"></p>
        <div className="w-full flex flex-col items-center">
          <div>₹{product.prices[productdata.time]}</div>
          <div className="text-[10px] text-center">Total rent</div>
        </div>
        <p className="w-[2px] bg-gray-400 min-h-[30px] my-auto"></p>
        <div className="w-full flex flex-col items-center">
          <div>₹{product.refundableprice}</div>
          <div className="text-[10px] text-center">
            <span className="whitespace-nowrap">Security Deposit</span>
            <br />
            (*Refundable)
          </div>
        </div>
      </div>
      {/* add to cart button */}
      <center>
        <button
          className="flex items-center justify-center gap-[10px] mt-[20px] p-[5px] w-full h-[35px] rounded-full border-[1px] border-theme   bg-transparent text-theme duration-300"
          onClick={() => {
            if (product.available == 1) {
              setcartproducts((prevCartProducts) => {
                const updatedCartProducts = { ...prevCartProducts };
                if (updatedCartProducts[product.pid]) {
                  // delete
                  delete updatedCartProducts[product.pid];
                  setnotifictionarr([
                    ...notifictionarr,
                    {
                      id: new Date() + new Date().getMilliseconds(),
                      content: "Removed from the cart",
                    },
                  ]);
                } else {
                  // add
                  updatedCartProducts[product.pid] = { ...productdata };
                  setnotifictionarr([
                    ...notifictionarr,
                    {
                      id: new Date() + new Date().getMilliseconds(),
                      content: "Added to the cart",
                    },
                  ]);
                }
                return updatedCartProducts;
              });
            } else {
              setnotifictionarr([
                ...notifictionarr,
                {
                  id: new Date() + new Date().getMilliseconds(),
                  content: "This item is currently unavailable",
                },
              ]);
            }
          }}
        >
          {product.available == 1 ? (
            cartproducts[product.pid] ? (
              <>
                <Delete styles="h-[20px]  stroke-theme fill-theme" />
                <span>Remove from cart</span>
              </>
            ) : (
              <>
                <Cart />
                <span>Add to cart</span>
              </>
            )
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="fill-theme h-[20px]"
              >
                <g>
                  <path d="M8.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.11 16.459a1 1 0 001.782-.906 3.113 3.113 0 00-.297-.466 4.838 4.838 0 00-.848-.868c-.79-.631-2.006-1.219-3.75-1.219-1.742 0-2.96.588-3.749 1.22-.388.31-.664.624-.847.867-.11.148-.211.302-.297.465a1.01 1.01 0 00.446 1.342 1 1 0 001.336-.435c.014-.025.202-.35.611-.678.46-.369 1.244-.781 2.5-.781 1.258 0 2.04.412 2.501.78.41.328.597.654.611.679z"></path>
                  <path
                    fillRule="evenodd"
                    d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2.007a8.993 8.993 0 110-17.986 8.993 8.993 0 010 17.986z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
              <span>Currently Unavailable</span>
            </>
          )}
        </button>
      </center>
      <div className="flex items-center justify-center gap-[10px] mt-[20px]">
        <Deliverytruck />
        <span className="text-[10px]">Delivery in 1-2 days post KYC</span>
      </div>
    </div>
  );
}

function Settingbox({ item, productdata, setproductdata }) {
  return (
    <div className="mt-[20px]">
      <div>
        {item.name} : {item.options[productdata[item.name]]}
      </div>
      <div className="flex gap-[10px] overflow-x-scroll">
        {/* options array */}
        {item.options.map((opt, j) => {
          return (
            <div
              key={j}
              className={`min-w-[60px] w-[60px] flex items-center justify-center mt-[10px] rounded-[5px] p-[5px] bg-white cursor-pointer lg:hover:border lg:hover:border-theme lg:hover:text-theme ${
                productdata[item.name] == j
                  ? " border border-theme  text-theme"
                  : " "
              }`}
              onClick={() => {
                setproductdata({ ...productdata, [item.name]: j });
              }}
            >
              {opt}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Settings;
