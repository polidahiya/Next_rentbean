"use server";
import { cookies } from "next/headers";
import verifyToken from "@/app/components/Verifytoken";
import { users } from "@/components/mongodb";

// is liked
export async function isliked(productid) {
  try {
    if (!cookies().get("token")) {
      return false;
    }
    const tokenres = await verifyToken(cookies().get("token").value);

    const result = await users.findOne({ email: tokenres.email });

    if (result?.favourites.includes(productid)) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
// add to favourite or remove favourite
export async function likeproduct(productid, liked) {
  try {
    if (!cookies().get("token")) {
      return { message: "Please login" };
    }
    const tekenres = await verifyToken(cookies().get("token").value);

    if (liked) {
      // remove from favourite
      const result = await users.findOneAndUpdate(
        { email: tekenres.email },
        { $pull: { favourites: productid } },
        { new: true }
      );

      if (result) return { message: "Removed from favourites" };
    } else {
      // add to favourite
      const result = await users.findOneAndUpdate(
        { email: tekenres.email },
        { $addToSet: { favourites: productid } },
        { new: true, upsert: true }
      );

      if (result) return { message: "Added to favourites" };
    }
  } catch (error) {
    return { message: "Invalid User" };
  }
}
