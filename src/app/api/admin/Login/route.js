import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { data } from "@/components/mongodb";

export async function POST(req) {
  const body = await req.json();
  let password = body.password;
  //   let token = req.cookies.get("token").value;
  const admindata = await data.findOne({});
  
  if (password == admindata.password) {
    const token = jwt.sign(
        { userId: "admin@vishal.com" },
        "this-world-is-toxic",
        {
          expiresIn: "24h",
        }
      );
    
    cookies().set("token", token, {
      maxAge: 3600 * 24 ,
      httpOnly: true,
      secure: true,
    });
    return new Response(JSON.stringify({ message: "Login successfull" }));
  } else {
    return new Response(JSON.stringify({ message: "Wrong password" }));
  }
}
