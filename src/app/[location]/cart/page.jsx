import React from "react";
import Publicpage from "./Publicpage";
import { orders } from "@/components/mongodb";

async function placeorder(data) {
  "use server";
  try {
    data.orderdate = new Date();
    data.status = "order"; //order,verified,finished
    data.note = "";
    data.verified = false;
    let productdata = { ...data.products };
    Object.keys(productdata).forEach((item) => {
      delete productdata[item].link;
    });

    await orders.insertOne({ ...data });
    return { message: "order placed" };
  } catch (error) {
    return { message: "error" };
  }
}

function page() {
  return <Publicpage placeorder={placeorder} />;
}

export default page;
