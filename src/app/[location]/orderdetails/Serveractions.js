"use server";
import { cookies } from "next/headers";
import verifyToken from "@/app/components/Verifytoken";
import { orders } from "@/components/mongodb";
import { Data } from "@/components/Getdata";

// get all orders products
export async function getuserorders() {
  try {
    if (!cookies().get("token")) {
      return { message: "Please login" };
    }

    const tokenres = await verifyToken(cookies().get("token").value);

    const allorders = await orders.find({ email: tokenres.email }).toArray();

    if (allorders) {
      const productsdata = await Data();

      Object.keys(allorders).forEach((l) => {
        allorders[l]._id = allorders[l]._id.toString();
        Object.keys(productsdata.data).forEach((i) => {
          Object.keys(productsdata.data[i].subcat).forEach((j) => {
            Object.keys(productsdata.data[i].subcat[j].products).forEach(
              (k) => {
                if (
                  allorders[l].product ==
                  productsdata.data[i].subcat[j].products[k].pid
                ) {
                  allorders[l] = {
                    ...productsdata.data[i].subcat[j].products[k],
                    metadesc: "",
                    keywords: "",
                    category: i,
                    subcat: j,
                    ...allorders[l],
                  };
                }
              }
            );
          });
        });
      });
      console.log(allorders);
      return { orders: allorders };
    } else {
      return { message: "No Orders Yet!" };
    }
  } catch (error) {
    return { message: "Server error" };
  }
}
