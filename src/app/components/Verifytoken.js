"use server";
import jwt from "jsonwebtoken";

export default async function verifyToken(token) {
  if (!token) {
    return Promise.resolve({ message: "Please login" });
  }

  return new Promise((resolve, reject) => {
    jwt.verify(token, "this-world-is-toxic", (err, decoded) => {
      if (err) {
        resolve({ message: "Invalid token" });
      } else {
        resolve({ message: "Token verified", email: decoded?.email });
      }
    });
  });
}
