function findFreeTime(bookedIntervals, workingHours) {
  const [workStart, workEnd] = workingHours;

  // Step 1: Filter and clip bookings to working hours
  const bookings = bookedIntervals
    .filter(([start, end]) => end > workStart && start < workEnd)
    .map(([start, end]) => [
      Math.max(start, workStart),
      Math.min(end, workEnd)
    ])
    .sort((a, b) => a[0] - b[0]);

  // Step 2: Merge overlapping bookings
  const merged = [];

  for (const [start, end] of bookings) {
    if (merged.length === 0 || start > merged[merged.length - 1][1]) {
      merged.push([start, end]);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        end
      );
    }
  }

  // Step 3: Find free time intervals
  const freeTime = [];
  let currentTime = workStart;

  for (const [start, end] of merged) {
    if (currentTime < start) {
      freeTime.push([currentTime, start]);
    }

    currentTime = Math.max(currentTime, end);
  }

  // Step 4: Check remaining time
  if (currentTime < workEnd) {
    freeTime.push([currentTime, workEnd]);
  }

  return freeTime;
}