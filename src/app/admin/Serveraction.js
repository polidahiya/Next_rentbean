"use server";
import { orders, ObjectId } from "@/components/mongodb";

// add to running orders
export const changestatus = async (documentId, status) => {
  const filter = { _id: new ObjectId(documentId) };

  await orders.updateOne(filter, { $set: { status: status } });
  if (status == "3") {
    await orders.updateOne(filter, { $set: { delivered_date: new Date() } });
  }
  return { message: "Status Updated" };
};

// delete orders function
export const deleteorder = async (documentId) => {
  const filter = { _id: new ObjectId(documentId) };

  await orders.deleteOne(filter);
  return { message: "Order deleted" };
};

// update note
export const updatenote = async (documentId, note) => {
  try {
    const filter = { _id: new ObjectId(documentId) };
    const data = await orders.findOne(filter);
    const result = await orders.updateOne(filter, {
      $set: {
        note: note,
      },
    });

    if (result.modifiedCount === 1) {
      return { message: "Update Successful" };
    } else {
      return { message: "Update Failed" };
    }
  } catch (error) {
    console.log(error);
  }
};
