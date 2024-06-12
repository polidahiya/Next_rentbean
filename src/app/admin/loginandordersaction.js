"use server";
import { cookies } from "next/headers";
import verifyToken from "../components/Verifytoken";
import jwt from "jsonwebtoken";
import { data, orders, users } from "@/components/mongodb";
import { Data } from "../../components/Getdata";

// auto login
export async function autologin() {
  try {
    if (!cookies().get("admintoken")) {
      return { message: "Please enter password" };
    }

    let token = cookies().get("admintoken").value;
    let result = await verifyToken(token);

    if (result.email == "admin@vishal.com") {
      return { message: "Login successfull" };
    } else {
      return { message: "Invalid user" };
    }
  } catch (error) {
    return { message: "Internal server error" };
  }
}

// password login
export async function passwordlogin(req) {
  let password = req?.password;

  const admindata = await data.findOne({});

  if (password == admindata.password) {
    const token = jwt.sign(
      { email: "admin@vishal.com" },
      "this-world-is-toxic",
      {
        expiresIn: "24h",
      }
    );

    cookies().set("admintoken", token, {
      maxAge: 3600 * 24,
      httpOnly: true,
      secure: true,
    });
    return { message: "Login successfull" };
  } else {
    return { message: "Wrong password" };
  }
}

// get orders
export async function getallorders(req) {
  const productsdata = await Data();
  let token = cookies().get("token").value;

  if (!token) {
    return { message: "User error" };
  }

  let result = await verifyToken(token);

  if (
    result.message == "Token verified" &&
    result.email == "admin@vishal.com"
  ) {
    let usersdata = await users.find({}).toArray();

    let allorders = await orders
      .find({ status: req.status })
      .sort({ orderdate: 1 })
      .toArray();

    Object.keys(allorders).forEach((l) => {
      allorders[l]._id = allorders[l]._id.toString();
      Object.keys(productsdata.data).forEach((i) => {
        Object.keys(productsdata.data[i].subcat).forEach((j) => {
          Object.keys(productsdata.data[i].subcat[j].products).forEach((k) => {
            if (
              allorders[l].product ==
              productsdata.data[i].subcat[j].products[k].pid
            ) {
              allorders[l] = {
                ...productsdata.data[i].subcat[j].products[k],
                metadesc: "",
                keywords: "",
                ...allorders[l],
              };
            }
          });
        });
      });
    });

    usersdata.forEach((user) => {
      allorders.forEach((order, index) => {
        if (user.email === order.email) {
          allorders[index] = {
            ...user,
            ...order,
          };
        }
      });
    });

    return allorders;
  } else {
    return { message: "User error" };
  }
}
