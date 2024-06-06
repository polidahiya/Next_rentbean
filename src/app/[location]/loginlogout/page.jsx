import React from "react";
import Userdetails from "./components/Userdetails";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

function page({ params }) {
  let token = cookies().get("token");
  if (token) redirect("/" + params.location);
  return (
    <div
      className="relative flex items-center justify-center py-[20px]"
      style={{
        background: "url(/logo&ui/loginwallpaper.jpg) center left / cover",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <Userdetails location={params.location}/>
    </div>
  );
}

export default page;
