"use server";
import { orders, ObjectId } from "@/components/mongodb";
import { revalidatePath } from "next/cache";

// set verified
export const setverifiedorder = async (documentId) => {
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
};

// add to running orders
export const changestatus = async (documentId, status) => {
  const filter = { _id: new ObjectId(documentId) };

  await orders.updateOne(filter, { $set: { status: status } });
  if (status == "running") {
    await orders.updateOne(filter, { $set: { orderstartdate: new Date() } });
  }

  revalidatePath("/admin");
};

// delete orders function
export const deleteorder = async (documentId) => {
  const filter = { _id: new ObjectId(documentId) };
  await orders.deleteOne(filter, (deleteErr, result) => {
    if (deleteErr) {
      console.error("Failed to delete document:", deleteErr);
    }
  });
  revalidatePath("/admin");
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
