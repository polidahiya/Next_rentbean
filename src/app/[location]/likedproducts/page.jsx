import React from "react";
import Publicpage from "./Publicpage";

function page({ params }) {
  let location = params?.location?.replace(/_/g, " ");

  return <Publicpage location={location}/>;
}

export default page;
