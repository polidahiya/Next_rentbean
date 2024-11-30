import { MongoClient, ObjectId } from "mongodb";

const db_link = process.env.DB_LINK;

const client = new MongoClient(db_link);

client.connect();
const db = client.db("rentbeen");
const data = db.collection("data");
const orders = db.collection("orders");
const sitedata = db.collection("sitedata");
const testdata = db.collection("testdata");
const users = db.collection("users");
export { data, orders, sitedata, users, testdata, ObjectId };
