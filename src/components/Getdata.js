"use server";
// site data
import { sitedata } from "./mongodb";

let cachedData = null;
let lastFetchedTime = null;

export async function Data() {
  const currentTime = new Date().getTime();
  const cachetime = 10 * 60 * 1000;
  if (
    !cachedData ||
    !lastFetchedTime ||
    currentTime - lastFetchedTime >= cachetime
  ) {
    cachedData = await sitedata.findOne({});
    lastFetchedTime = currentTime;
  }
  delete cachedData._id;

  return cachedData;
}
