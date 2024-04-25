import React from "react";
import { orders, ObjectId } from "@/components/mongodb";
import Orderscomp from "./Components/Orders";
import { Data, typeofprices } from "@/app/Data";
import { revalidatePath } from "next/cache";
import Navbar from "./Components/Navbar";
async function page() {
  // all orders
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

  // running orders
  let runningorders = await orders
    .find({ status: "running" })
    .sort({ orderdate: 1 })
    .toArray();
  Object.keys(runningorders).forEach((l) => {
    runningorders[l]._id = runningorders[l]._id.toString();
    Object.keys(runningorders[l].products).forEach((m) => {
      Object.keys(Data().data).forEach((i) => {
        Object.keys(Data().data[i].subcat).forEach((j) => {
          Object.keys(Data().data[i].subcat[j].products).forEach((k) => {
            if (m == Data().data[i].subcat[j].products[k].pid) {
              runningorders[l].products[m] = {
                ...runningorders[l].products[m],
                ...Data().data[i].subcat[j].products[k],
              };
            }
          });
        });
      });
    });
  });
  // completed orders
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

  // set verified
  const setverifiedorder = async (documentId) => {
    "use server";
    const filter = { _id: new ObjectId(documentId) };
    const data = await orders.findOne(filter);
    if (data.verified) {
      await orders.updateOne(filter, {
        $set: {
          verified: false,
        },
      });
    } else {
      await orders.updateOne(filter, {
        $set: {
          verified: true,
        },
      });
    }

    revalidatePath("/admin");
  };

  // add to running orders
  const changestatus = async (documentId, status) => {
    "use server";

    const filter = { _id: new ObjectId(documentId) };

    await orders.updateOne(filter, { $set: { status: status } });
    if (status == "running") {
      await orders.updateOne(filter, { $set: { orderstartdate: new Date() } });
    }

    revalidatePath("/admin");
  };

  // delete orders function
  const deleteorder = async (documentId) => {
    "use server";
    const filter = { _id: new ObjectId(documentId) };
    await orders.deleteOne(filter, (deleteErr, result) => {
      if (deleteErr) {
        console.error("Failed to delete document:", deleteErr);
      }
    });
    revalidatePath("/admin");
  };

  return (
    <div className="bg-bg1">
      {/* nav bar */}
      <Navbar />
      
      <div className="flex items-start  min-w-full overflow-x-scroll snap-x snap-mandatory ">
        {/* orders */}
        <div className=" min-w-full  snap-start px-[10px] md:px-[40px] py-[20px] overflow-y-scroll " style={{height:"calc(100dvh - 60px)"}}>
          <Orderscomp
            allorders={allorders}
            typeofprices={typeofprices}
            deleteorder={deleteorder}
            setverifiedorder={setverifiedorder}
            changestatus={changestatus}
          />
        </div>
        <div className=" min-w-full  snap-start px-[10px] md:px-[40px] py-[20px] overflow-y-scroll " style={{height:"calc(100dvh - 60px)"}}>
          <Orderscomp
            allorders={runningorders}
            typeofprices={typeofprices}
            deleteorder={deleteorder}
            setverifiedorder={setverifiedorder}
            changestatus={changestatus}
          />
        </div>
        <div className=" min-w-full  snap-start px-[10px] md:px-[40px] py-[20px] overflow-y-scroll " style={{height:"calc(100dvh - 60px)"}}>
          <Orderscomp
            allorders={completedorders}
            typeofprices={typeofprices}
            deleteorder={deleteorder}
            setverifiedorder={setverifiedorder}
            changestatus={changestatus}
          />
        </div>
      </div>
    </div>
  );
}

export default page;

// let allorders = [
//   {
//     products: {
//       treadminll1: { time: 0, Quantity: 0 },
//       bookshelf1: { time: 2, Quantity: 0 },
//     },
//     userdetails: {
//       name: "Parvesh",
//       email: "polidahiya830@gmail.com",
//       phonenumber: "08700705247",
//       address: "Near shiv temple,village hayatpur",
//     },
//     orderdate: "2024-04-23T14:34:13.525Z",
//     status: "order",
//     note: "",
//   },
//   {
//     products: { tent1: { time: 2, Quantity: 0 } },
//     userdetails: {
//       name: "Parvesh",
//       email: "polidahiya830@gmail.com",
//       phonenumber: "08700705247",
//       address: "Near shiv temple,village hayatpur",
//     },
//     orderdate: "2024-04-23T14:34:51.246Z",
//     status: "order",
//     note: "",
//   },
// ];
