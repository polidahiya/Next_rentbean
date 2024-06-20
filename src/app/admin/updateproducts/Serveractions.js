"use server";
import { sitedata } from "@/components/mongodb";
import { testdata } from "@/components/mongodb";
import verifyToken from "@/app/components/Verifytoken";
import { cookies } from "next/headers";

const updateproduct = async (category, subcategory, product, i) => {
  try {
    const token = cookies().get("admintoken");

    if (!token) {
      return { message: "Please login" };
    }

    const tokenres = await verifyToken(token.value);

    if (tokenres.email != "admin@vishal.com") {
      return { message: "Invalid user" };
    }

    const updateproduct = await testdata.updateOne(
      {},
      {
        $set: {
          [`data.${category}.subcat.${subcategory}.products.${i}`]: product,
        },
      }
    );

    if (updateproduct.modifiedCount == 0) {
      return { message: "No update made" };
    }

    return { message: "Updated successfully" };
  } catch (error) {
    return { message: "Server error" };
  }
};
export { updateproduct };
