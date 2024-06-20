import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import verifyToken from "@/app/components/Verifytoken";
import { cookies } from "next/headers";
import fs from "fs";
import { sitedata } from "@/components/mongodb";
import { testdata } from "@/components/mongodb";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dz5gmpfoe",
  api_key: "415767188726533",
  api_secret: "w_aUPryn85Cx0vr3GZZ2y1H-Efg",
});

export async function POST(req) {
  try {
    const token = cookies().get("admintoken");

    if (!token) {
      return NextResponse.json({ message: "Please login" });
    }

    const tokenres = await verifyToken(token.value);

    if (tokenres.email != "admin@vishal.com") {
      return NextResponse.json({ message: "Invalid user" });
    }

    const formData = await req.formData();

    const category = formData.get("category");
    const subcategory = formData.get("subcategory");
    const productdata = JSON.parse(formData.get("productdata"));
    const numberofimages = formData.get("numberofimages");

    let imagesnamearray = [];

    for (let i = 0; i < numberofimages; i++) {
      const image = formData.get(i);
      const buffer = Buffer.from(await image.arrayBuffer());

      const tempFilePath = await saveBufferToFile(
        buffer,
        Math.random() * 200 + image.name
      );

      // upload images
      const uploadResult = await cloudinary.uploader.upload(tempFilePath, {
        folder: "rentbean",
      });

      imagesnamearray.push({ url: uploadResult.url, id: uploadResult.public_id });
      fs.unlinkSync(tempFilePath);
    }
    productdata.image = imagesnamearray;

    // add to mongodb
    // const updateproduct = await sitedata.updateOne(
    const updateproduct = await testdata.updateOne(
      {},
      {
        $push: {
          [`data.${category}.subcat.${subcategory}.products`]: productdata,
        },
      }
    );

    if (updateproduct.modifiedCount == 0) {
      return NextResponse.json({ message: "Unable to update" });
    }
    return NextResponse.json({ message: "Updated successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error" });
  }
}

const saveBufferToFile = (buffer, filename) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, buffer, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(filename);
      }
    });
  });
};
