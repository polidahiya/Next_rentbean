import React from "react";
import { cookies } from "next/headers";
import Form from "./Form";
import { redirect } from "next/navigation";

function page({ params }) {
  let token = cookies().get("token");
  let userdata = cookies().get("userdata")?.value;
  if (userdata) {
    userdata = JSON.parse(cookies().get("userdata")?.value);
  }

  if (!token) redirect("/" + params.location);

  return (
    <div
      className="flex items-center justify-center px-[10px] md:px-[40px]"
      style={{
        minHeight: "calc(100vh - 60px)",
        background:
          "radial-gradient(circle at top left, rgb(195, 195, 195) 0%, rgb(195, 195, 195) 2%,rgb(202, 202, 202) 2%, rgb(202, 202, 202) 23%,rgb(209, 209, 209) 23%, rgb(209, 209, 209) 55%,rgb(217, 217, 217) 55%, rgb(217, 217, 217) 80%,rgb(224, 224, 224) 80%, rgb(224, 224, 224) 86%,rgb(231, 231, 231) 86%, rgb(231, 231, 231) 96%,rgb(238, 238, 238) 96%, rgb(238, 238, 238) 100%)",
      }}
    >
      <Form userdata={userdata} />
    </div>
  );
}

export default page;
