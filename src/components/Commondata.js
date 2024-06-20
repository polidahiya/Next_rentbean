// sitename
export const sitename = "rentbean.in";

// locations
export const listoflocation = [
  "Delhi",
  "Noida",
  "Gurgaon",
  "Ghaziabad",
  "Faridabad",
];

// types of prices
export const typeofprices = {
  0: {
    time: [1, 3, 6, 12],
    suffix: "mo",
    fullsuffix: ["month", "months"],
    name: "Monthly Rent",
    reactname: "1, 3, 6, 12 months",
  }, // month
  1: {
    time: [1, 3, 7, 30],
    suffix: "day",
    fullsuffix: ["day", "days"],
    name: "Daily Rent",
    reactname: "1, 3, 7, 30 days",
  }, //days
  2: {
    time: [1, 3, 6],
    suffix: "mo",
    fullsuffix: ["month", "months"],
    name: "Monthly Rent",
    reactname: "1, 3, 6 months",
  }, //laptops
  3: {
    time: [6],
    suffix: "mo",
    fullsuffix: ["month", "months"],
    name: "Monthly Rent",
    reactname: "6 months",
  }, //ac coolers
  4: {
    time: [1, 3, 7],
    suffix: "day",
    fullsuffix: ["day", "days"],
    name: "Daily Rent",
    reactname: "1,3,7 days",
  }, //upto week
};

// login time
export const logintime = [3600 * 24 * 2, "48h"];
