import jwt from "jsonwebtoken";

export default function verifyToken(token) {
  if (!token) {
    return Promise.resolve({ message: "Token not available" });
  }

  return new Promise((resolve, reject) => {
    jwt.verify(token, "this-world-is-toxic", (err, decoded) => {
      if (err) {
        resolve({ message: "Invalid token" });
      } else {
        resolve({ message: "Token verified", usermail: decoded.userId });
      }
    });
  });
}
