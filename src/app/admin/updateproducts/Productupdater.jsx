"use client";
import React, { useState } from "react";
import { updateproduct } from "./Serveractions";
import { AppContextfn } from "@/app/Context/Index";
function Productupdater({ data }) {
  const [category, setcategory] = useState(Object.keys(data)[0]);
  const [subcategory, setsubcategory] = useState(
    Object.keys(data[category]?.subcat)[0]
  );

  return (
    <div>
      <div className="flex items-center justify-center gap-[10px] mt-[20px]">
        <div className="bg-slate-300 p-[5px]">
          Category :{" "}
          <select
            className="p-[10px]"
            onChange={(e) => {
              setsubcategory(Object.keys(data[e.target.value]?.subcat)[0]);
              setcategory(e.target.value);
            }}
          >
            {Object.keys(data).map((category, i) => {
              return (
                <option key={i} value={`${category}`}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="bg-slate-300 p-[5px]">
          Subcategory :{" "}
          <select
            className="p-[10px]"
            onChange={(e) => {
              setsubcategory(e.target.value);
            }}
          >
            {Object.keys(data[category]?.subcat).map((subcat, i) => {
              return (
                <option key={i} value={`${subcat}`}>
                  {subcat}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="p-[10px] md:p-[40px] ">
        {data[category]?.subcat[subcategory]?.products.map((product, i) => (
          <Product
            key={new Date().getMilliseconds() + i}
            i={i}
            category={category}
            subcategory={subcategory}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

function Product({ category, subcategory, product, i }) {
  const { shownotification } = AppContextfn();

  const [productdata, setproductdata] = useState({ ...product });

  const updatevalue = (e) => {
    setproductdata({ ...productdata, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-[5px] bg-slate-100 mt-[20px] border border-slate-300 p-[20px]">
      <div>
        <span className="font-extrabold">name :</span>
        <input
          type="text"
          value={productdata.name}
          name="name"
          onChange={updatevalue}
        />
      </div>
      <div>
        <span className="font-extrabold"> limit :</span>
        <input
          type="number"
          name="limit"
          value={productdata.limit}
          onChange={updatevalue}
        />
      </div>
      <div>
        <span className="font-extrabold">available :</span>
        <input
          type="number"
          name="available"
          value={productdata.available}
          onChange={updatevalue}
        />
      </div>
      <div>
        <span className="font-extrabold">pid :</span>
        <input
          type="text"
          name="pid"
          value={productdata.pid}
          onChange={updatevalue}
        />
      </div>
      <div>
        <span className="font-extrabold"> pricetype : </span>
        <input
          type="number"
          name="pricetype"
          value={productdata.pricetype}
          onChange={updatevalue}
        />
      </div>
      <div>
        <span className="font-extrabold">refundableprice :</span>{" "}
        <input
          type="number"
          name="refundableprice"
          value={productdata.refundableprice}
          onChange={updatevalue}
        />
      </div>
      <div>
        <span className="font-extrabold">metadesc :</span>{" "}
        <textarea
          className="w-full min-h-[150px] border border-slate-300 p-[5px]"
          type="text"
          name="metadesc"
          value={productdata.metadesc}
          onChange={updatevalue}
        />
      </div>
      <div>
        <span className="font-extrabold"> keywords :</span>{" "}
        <textarea
          className="w-full min-h-[150px] border border-slate-300 p-[5px]"
          type="text"
          name="keywords"
          value={productdata.keywords}
          onChange={updatevalue}
        />
      </div>
      <center>
        <button
          className="p-[10px] bg-green-600 text-white px-[20px]"
          onClick={async () => {
            const res = await updateproduct(
              category,
              subcategory,
              productdata,
              i
            );
            if (res?.message) {
              shownotification(res?.message);
            }
          }}
        >
          Update
        </button>
      </center>
    </div>
  );
}
export default Productupdater;
