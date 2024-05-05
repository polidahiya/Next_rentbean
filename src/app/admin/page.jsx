import React from "react";
import Publicpage from "./Publicpage";
import { typeofprices } from "../../components/Commondata";

async function page() {
  return <Publicpage typeofprices={typeofprices} />;
}

export default page;
