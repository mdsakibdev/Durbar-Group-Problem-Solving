function countWordFrequencies(sentence) {
  // 1. lowercase
  // 2. sentence থেকে words বের করো
  // 3. empty object বানাও
  // 4. loop চালিয়ে প্রতিটি word count করো
  // 5. object return করো
}

let sentence = "hello    world    hello";

let loweCase = sentence.toLowerCase();
let splite = loweCase.split(/[^a-z0-9]+/);
let frequency = {};

for (let i = 0; i < splite.length; i++) {
  let word = splite[i];
  if (word === "") {
    continue;
  }
    if (frequency[word] === undefined) {
      frequency[word] = 1;
    } else {
      frequency[word] += 1;
    }

}

console.log(frequency);
