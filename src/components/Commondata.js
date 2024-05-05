// sitename
export const sitename = "rentbean.in";

// locations
export const listoflocation = ["Delhi", "Noida", "Gurgaon"];

// types of prices
export const typeofprices = {
  0: {
    time: [1, 3, 6, 12],
    suffix: "mo",
    fullsuffix: ["month", "months"],
    name: "Monthly Rent",
  }, // month
  1: {
    time: [1, 3, 7, 30],
    suffix: "day",
    fullsuffix: ["day", "days"],
    name: "Daily Rent",
  }, //days
  2: {
    time: [1, 3, 6],
    suffix: "mo",
    fullsuffix: ["month", "months"],
    name: "Monthly Rent",
  }, //laptops
  3: {
    time: [6],
    suffix: "mo",
    fullsuffix: ["month", "months"],
    name: "Monthly Rent",
  }, //ac coolers
  4: {
    time: [1, 3, 7],
    suffix: "day",
    fullsuffix: ["day", "days"],
    name: "Daily Rent",
  }, //upto week
};

// site data
import { sitedata } from "./mongodb";

let cachedData = null;
let lastFetchedTime = null;

export async function Data() {
  "use server";
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

  // Return cached data
  return cachedData;
}
