"use server";
import { cookies } from "next/headers";
import verifyToken from "@/app/components/Verifytoken";
import { users } from "@/components/mongodb";

// get liked products
export async function getlikedproducts() {
  try {
    if (!cookies().get("token")) {
      return { message: "Please login" };
    }
    const tokenres = await verifyToken(cookies().get("token").value);

    const result = await users.findOne({ email: tokenres.email });

    if (result?.favourites) {
      return { favourites: result.favourites };
    } else {
      return { message: "No favourites yet!" };
    }
  } catch (error) {
    return { message: "Server error" };
  }
}

