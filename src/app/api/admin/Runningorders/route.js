import verifyToken from "@/app/components/Verifytoken";
import { orders } from "@/components/mongodb";
import { Data } from "../../../../components/Getdata";

export async function GET(req) {
  const data =await Data();
  if (!req.cookies.get("token")) {
    return new Response(JSON.stringify({ message: "No token found" }));
  }

  let token = req.cookies.get("token").value;
  let result = await verifyToken(token);

  if (result.message == "Token verified") {
    let runningorders = await orders
      .find({ status: "running" })
      .sort({ orderdate: 1 })
      .toArray();
    Object.keys(runningorders).forEach((l) => {
      runningorders[l]._id = runningorders[l]._id.toString();
      Object.keys(runningorders[l].products).forEach((m) => {
        Object.keys(data.data).forEach((i) => {
          Object.keys(data.data[i].subcat).forEach((j) => {
            Object.keys(data.data[i].subcat[j].products).forEach((k) => {
              if (m == data.data[i].subcat[j].products[k].pid) {
                runningorders[l].products[m] = {
                  ...runningorders[l].products[m],
                  ...data.data[i].subcat[j].products[k],
                };
              }
            });
          });
        });
      });
    });

    return new Response(JSON.stringify(runningorders));
  } else {
    return new Response(JSON.stringify({ message: "No token found" }));
  }
}
