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
