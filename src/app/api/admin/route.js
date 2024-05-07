import verifyToken from "@/app/components/Verifytoken";

export async function POST(req) {
  if (!req.cookies.get("token")) {
    return new Response(JSON.stringify({ message: "No token found" }));
  }

  let token = req.cookies.get("token").value;
  let result = await verifyToken(token);
  
  if (result.message == "Token verified") {
    return new Response(JSON.stringify({ message: "Login successfull" }));
  } else {
    return new Response(JSON.stringify({ message: "Invalid user" }));
  }
}
