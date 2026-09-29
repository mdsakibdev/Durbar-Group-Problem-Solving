/**
 * * 2024 সালের May মাসের 11 তারিখ কোন weekday? 
*/

function getDayOfWeek(year, month, day) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(year, month - 1, day);

  let dayNumber = date.getDay();

  return weekdays[dayNumber];
}
