"use server";
import { cookies } from "next/headers";
import verifyToken from "@/app/components/Verifytoken";
import { users } from "@/components/mongodb";

// get all orders products
export async function updateuserdetails() {
  try {
    if (!cookies().get("token")) {
      return { message: "Please login" };
    }

    const tokenres = await verifyToken(cookies().get("token").value);

    const updateduser = await users.findOneAndUpdate(
      { email: tokenres.email },
      {
        $set: {
          name: "New Name",
          age: 30,
        },
      },
      { returnNewDocument: true }
    );

    // if (allorders) {
    //   return { orders: allorders };
    // } else {
    //   return { message: "No Orders Yet!" };
    // }
  } catch (error) {
    return { message: "Server error" };
  }
}
