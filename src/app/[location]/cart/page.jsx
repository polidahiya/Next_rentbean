import React from "react";
import Publicpage from "./Publicpage";
import { orders } from "@/components/mongodb";
import { Data } from "../../../components/Getdata";
import { cookies } from "next/headers";
import verifyToken from "@/app/components/Verifytoken";

async function placeorder(data) {
  "use server";
  try {
    let token = cookies().get("token");
    if (!token) {
      return { message: "Please login first!" };
    }

    let tokendata = await verifyToken(token?.value);
    if (!tokendata.email) {
      return { message: "server error" };
    }
    Object.keys(data.products).forEach(async(item) => {
      delete data.products[item].link;
      data.products[item].product=item
      data.products[item].orderdate = new Date();
      data.products[item].status = "0"; //order,verified,finished
      data.products[item].note = "";
      data.products[item].email = tokendata.email;

      await orders.insertOne(data.products[item]);
    });

    return { message: "order placed" };

  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
}

async function page({ params }) {
  const userdata = cookies()?.get("userdata")?.value;
  let location = params?.location.replace(/_/g, " ");
  const data = await Data();
  return (
    <Publicpage placeorder={placeorder} location={location} data={data.data} userdata={userdata}/>
  );
}

export default page;
