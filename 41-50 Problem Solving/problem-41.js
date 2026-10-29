

function formatCountdown(totalSeconds){
  const hours = Math.floor(totalSeconds / 3600);

  const remainingSeconds = totalSeconds % 3600;

  const minutes = Math.floor(remainingSeconds / 60);

  const seconds = totalSeconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(formatCountdown(3661)); // "01:01:01"
console.log(formatCountdown(59));   // "00:00:59"
console.log(formatCountdown(0));    // "00:00:00"