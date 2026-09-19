


function truncateString(str, maxLength) {
  // String already fits within maxLength
  if (str.length <= maxLength) {
    return str;
  }

  // Not enough space for content + "..."
  if (maxLength <= 3) {
    return "...";
  }

  // Keep enough characters so final length is maxLength
  return str.slice(0, maxLength - 3) + "...";
}