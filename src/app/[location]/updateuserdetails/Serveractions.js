"use server";
import { cookies } from "next/headers";
import verifyToken from "@/app/components/Verifytoken";
import { users } from "@/components/mongodb";
import { logintime } from "@/components/Commondata";

// get all orders products
export async function updateuserdetails(newuserdetails) {
  try {
    if (!cookies().get("token")) {
      return { message: "Please login" };
    }

    const tokenres = await verifyToken(cookies().get("token")?.value);

    const updateduser = await users.findOneAndUpdate(
      { email: tokenres.email },
      {
        $set: newuserdetails,
      },
      { returnNewDocument: true }
    );

    addtoken({
      username: newuserdetails.username,
      email: tokenres.email,
      phonenum: newuserdetails.phonenum,
      address: newuserdetails.address,
    });

    if (updateduser) {
      return { message: "Update Successfully" };
    } else {
      return { message: "Server error" };
    }
  } catch (error) {
    return { message: "Server error" };
  }
}

function addtoken(userdata) {
  cookies().set("userdata", JSON.stringify(userdata), {
    maxAge: logintime[0],
  });
}
