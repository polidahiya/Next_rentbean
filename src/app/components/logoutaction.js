"use server";
import { cookies } from "next/headers";

export async function logout() {
  try {
    cookies()?.delete('token')
    cookies()?.delete('userdata')
    return { message: "Logout successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Serer error" };
  }
}
