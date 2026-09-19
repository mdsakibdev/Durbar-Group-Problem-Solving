function titleCaseSentence(str) {
  // Step 1: lowercase
  let strLowercase = str.toLowerCase;

  // Step 2: split into words
  let strSplite = strLowercase.trim().split(/\s+/);

  // Step 3: প্রতিটি word পরিবর্তন
  // map()
  let titleWords = strSplite.map((word) => {
    let firstIndex = word[0].toUpperCase();
    let secoudIndex = word.slice(1).toLowerCase();
    return firstIndex + secoudIndex;
  });

  // Step 4: words আবার sentence বানানো
  // join()
  let joind = titleWords.join(" ");

  // Step 5: return
  return joind
}

console.log(titleCaseSentence("   hELLo    WoRLD   "))




// let str = "hELLo WoRLD";
// let strLowercase = str.toLocaleLowerCase();

// let strSplite = strLowercase.trim().split(/\s+/);

// let titleWords = strSplite.map((word) => {
//   let firstIndex = word[0].toUpperCase();
//   let secoudIndex = word.slice(1).toLowerCase();
//   return firstIndex + secoudIndex;
// });

// let joind = titleWords.join(" ");

// console.log(joind);
