import React from "react";
import Publicpage from "./Publicpage";

async function placeorder(data) {
  "use server";
  data.orderdate = new Date();
  data.status = "active";
  let productdata = { ...data.products };
  Object.keys(productdata).forEach((item) => {
    delete productdata[item].link;
  });
  console.log(productdata, data.userdetails);
  return { message: "order placed" };
}

function page() {
  return <Publicpage placeorder={placeorder} />;
}

export default page;
