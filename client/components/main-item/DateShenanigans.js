let today = new Date();
let twoDayShipping = new Date(today.setDate(today.getDate() + 2));
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[twoDayShipping.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export let month = months[twoDayShipping.getMonth()];
export let twoDaysFromNow = twoDayShipping.getDate();
let midnight = structuredClone(today);
midnight.setHours(24, 0, 0, 0);
let timeLeft = new Date(midnight-today);
export let hoursLeft = Math.floor(timeLeft / 3600 / 1000);
export let minLeft = Math.floor((timeLeft / 60 / 1000) % 60);

export default day