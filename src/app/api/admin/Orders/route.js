import { orders } from "@/components/mongodb";
import { Data } from "@/app/Data";

export async function GET() {
  let allorders = await orders
    .find({ status: "order" })
    .sort({ orderdate: 1 })
    .toArray();
  Object.keys(allorders).forEach((l) => {
    allorders[l]._id = allorders[l]._id.toString();
    Object.keys(allorders[l].products).forEach((m) => {
      Object.keys(Data().data).forEach((i) => {
        Object.keys(Data().data[i].subcat).forEach((j) => {
          Object.keys(Data().data[i].subcat[j].products).forEach((k) => {
            if (m == Data().data[i].subcat[j].products[k].pid) {
              allorders[l].products[m] = {
                ...allorders[l].products[m],
                ...Data().data[i].subcat[j].products[k],
              };
            }
          });
        });
      });
    });
  });

  return new Response(JSON.stringify(allorders));
}
