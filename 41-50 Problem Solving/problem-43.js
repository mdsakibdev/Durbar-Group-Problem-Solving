

function countFilesInFolder(structure) {
  let count = 0;

  for (const item of structure) {
    if (item.type === "file") {
      count++;
    } else if (item.type === "folder") {
      count += countFilesInFolder(item.children);
    }
  }

  return count;
}