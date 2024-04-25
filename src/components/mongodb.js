import { MongoClient, ObjectId } from "mongodb";

const db_link =
  "mongodb+srv://polidahiya830:12er56ui90%40Poli@cluster0.pvrgiqn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(db_link);

await client.connect();
const db = client.db("rentbeen");
const data = db.collection("data");
const orders = db.collection("orders");
const sitedata = db.collection("sitedata");
export { data, orders, sitedata, ObjectId };
//order,verified,running,completed 