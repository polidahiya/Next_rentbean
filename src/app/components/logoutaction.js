"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function logout() {
  try {
    cookies()?.delete('token')
    revalidatePath("/")
    return { message: "Logout successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Serer error" };
  }
}
