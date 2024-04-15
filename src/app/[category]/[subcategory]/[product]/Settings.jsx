"use client";
import React, { useEffect, useState } from "react";
import { AppContextfn } from "../../../Context/Index";
import Deliverytruck from "../../../components/(svgs)/Deliverytruck";
import Cart from "../../../components/(svgs)/Cart";
import Delete from "../../../components/(svgs)/Delete";

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
      <h3 className="text-center font-semibold">{product.name}</h3>
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
      <div>Choose Tenure</div>
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
          <div className="text-[10px] text-center">Monthly rent</div>
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
          }}
        >
          {cartproducts[product.pid] ? (
            <>
              <Delete styles="h-[20px]  stroke-theme fill-theme" />
              <span>Remove from cart</span>
            </>
          ) : (
            <>
              <Cart />
              <span>Add to cart</span>
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
