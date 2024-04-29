import { orders } from "@/components/mongodb";
import { Data } from "@/app/Data";

export async function GET() {
    let completedorders = await orders
    .find({ status: "completed" })
    .sort({ orderdate: 1 })
    .toArray();
  Object.keys(completedorders).forEach((l) => {
    completedorders[l]._id = completedorders[l]._id.toString();
    Object.keys(completedorders[l].products).forEach((m) => {
      Object.keys(Data().data).forEach((i) => {
        Object.keys(Data().data[i].subcat).forEach((j) => {
          Object.keys(Data().data[i].subcat[j].products).forEach((k) => {
            if (m == Data().data[i].subcat[j].products[k].pid) {
              completedorders[l].products[m] = {
                ...completedorders[l].products[m],
                ...Data().data[i].subcat[j].products[k],
              };
            }
          });
        });
      });
    });
  });

  return new Response(JSON.stringify(completedorders));
}
