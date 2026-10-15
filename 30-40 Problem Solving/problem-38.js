// ** Calculate Days Between Dates

function daysBetweenDates(date1, date2) {
    const [year1, month1, day1] = date1.split("-").map(Number);
    const [year2, month2, day2] = date2.split("-").map(Number);

    const timestamp1 = Date.UTC(year1, month1 - 1, day1);
    const timestamp2 = Date.UTC(year2, month2 - 1, day2);

    const difference = Math.abs(timestamp1 - timestamp2);

    const days = difference / (1000 * 60 * 60 * 24);

    return days;
}