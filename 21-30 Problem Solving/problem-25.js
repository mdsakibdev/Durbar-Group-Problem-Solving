let rainfall = [2, 5, 3, 3, 7, 4, 4, 6];

let peaks = [];

for (let i = 1; i < rainfall.length - 1; i++) {
  if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
    peaks.push(i + 1);
  }
}

function findRainfallPeaks(rainfall) {
  let peaks = [];

  for (let i = 1; i < rainfall.length - 1; i++) {
    if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
      peaks.push(i + 1);
    }
  }
  return peaks
}
