"use server";
// site data
import { sitedata } from "./mongodb";

let cachedData = null;
let lastFetchedTime = null;

export async function Data() {
  const currentTime = new Date().getTime();
  const oneHour = 60 * 60 * 1000;
  if (
    !cachedData ||
    !lastFetchedTime ||
    currentTime - lastFetchedTime >= oneHour
  ) {
    cachedData = await sitedata.findOne({});
    lastFetchedTime = currentTime;
  }

  return cachedData;
}
