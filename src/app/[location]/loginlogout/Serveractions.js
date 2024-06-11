"use server";
import { users } from "@/components/mongodb";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {logintime} from "../../../components/Commondata"


export const login = async (userdata) => {
  try {
    const user = await users.findOne({ email: userdata.email });
    if (!user) {
      return { message: "User not found" };
    }

    // check salted password
    const match = await bcrypt.compare(userdata.password, user.password);

    if (match) {
      addtoken(
        { email: userdata.email },
        {
          username: user.username,
          email: user.email,
          phonenum: user.phonenum,
          address: user.address,
        }
      );
      return {
        message: "Login successfull",
      };
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

    // hash password
    userdata.password = await bcrypt.hash(userdata.password, 12);

    const inserteduser = await users.insertOne(userdata);

    addtoken(
      { email: userdata.email },
      {
        username: userdata.username,
        email: userdata.email,
        phonenum: userdata.phonenum,
        address: userdata.address,
      }
    );

    if (inserteduser) return { message: "Signup successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Server error!" };
  }
};

function addtoken(data, userdata) {
  const token = jwt.sign(data, "this-world-is-toxic", {
    expiresIn: logintime[1],
  });

  cookies().set("token", token, {
    maxAge: logintime[0],
    httpOnly: true,
    secure: true,
  });
  cookies().set("userdata", JSON.stringify(userdata), {
    maxAge: logintime[0],
  });
}
