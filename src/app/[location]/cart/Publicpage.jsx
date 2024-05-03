"use client";
import React, { useState } from "react";
import Emptycart from "./components/Emptycart";
import Cartitems from "./components/Cartitems";
import { Data, typeofprices } from "../../Data";
import { AppContextfn } from "../../Context/Index";
import Userdetails from "./components/Userdetails";

function Publicpage({ placeorder }) {
  const { cartproducts,location } = AppContextfn();
  let total = 0;

  let productsToShow = Object.keys(Data().data).flatMap((i) =>
    Object.keys(Data().data[i].subcat).flatMap((j) =>
      Data()
        .data[i].subcat[j].products.filter((k) =>
          cartproducts.hasOwnProperty(k.pid)
        )
        .map((k) => ({ ...k, ...cartproducts[k.pid] }))
    )
  );
  productsToShow.forEach((item, i) => {
    total +=
      item.prices[item.time] * (item.Quantity + 1) +
      item.refundableprice * (item.Quantity + 1);
  });

  if (Object.keys(cartproducts).length == 0) {
    return <Emptycart location={location}/>;
  } else {
    return (
      <div className="gap-[20px] px-[10px] md:px-[40px] mt-[80px] flex flex-col lg:flex-row">
        {/* products */}
        <div className="w-full">
          {productsToShow.map((item, i) => {
            return (
              <Cartitems
                key={i}
                item={item}
                typeofprices={typeofprices}
              />
            );
          })}
        </div>
        {/* customer details and payments */}
        <Userdetails placeorder={placeorder}  total={total}/>
      </div>
    );
  }
}

export default Publicpage;
