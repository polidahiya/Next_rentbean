"use server";
import { users } from "@/components/mongodb";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const login = async (userdata) => {
  try {
    const user = await users.findOne({ email: userdata.email });
    if (!user) {
      return { message: "User not found" };
    }

    if (user.password == userdata.password) {
      addtoken({ email: userdata.email, password: userdata.password });
      return { message: "Login successfull" };
    } else {
      return { message: "Wrong password" };
    }
  } catch (error) {
    console.log(error);
    return { message: "Server error!" };
  }
};

export const signup = async (userdata) => {
  try {
    const checkemail = await users.findOne({ email: userdata.email });
    if (checkemail) return { message: "Email already registered" };

    const checkmobile = await users.findOne({ email: userdata.email });
    if (checkmobile) return { message: "Mobile number already registered" };

    const inserteduser = await users.insertOne(userdata);

    addtoken({ email: userdata.email});

    if (inserteduser) return { message: "Signup successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Server error!" };
  }
};

function addtoken(data) {
  const token = jwt.sign(data, "this-world-is-toxic", {
    expiresIn: "48h",
  });

  cookies().set("token", token, {
    maxAge: 3600 * 24 * 2,
    httpOnly: true,
    secure: true,
  });
}
