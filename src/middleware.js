import { NextResponse } from "next/server";
export default function middleware(req, res) {
  if (req.url.includes("/Noida")) {
    // console.log(req.url);
    // console.log("admin page");
  }
}
