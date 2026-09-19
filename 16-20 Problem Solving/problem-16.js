

// toLowerCase() filter() test() sort() join()

// Step 1: s1 এবং s2 lowercase করো
// Step 2: শুধু alphabetic characters রাখো
// Step 3: characters-কে array বানাও
// Step 4: দুইটা array sort করো
// Step 5: দুইটা sorted result compare করো
// Step 6: true অথবা false return করো

let s1 = "listen";
let s2 = "silent";

let lowerS1 = s1.toLowerCase();
let lowerS2 = s2.toLowerCase();

const cleanS1 = [...lowerS1].filter(character => /[a-z]/.test(character))
const cleanS2 = [...lowerS2].filter(character => /[a-z]/.test(character))

cleanS1.sort();
cleanS2.sort();

const resultS1 = cleanS1.join("");
const resultS2 = cleanS2.join("");


console.log(resultS1 === resultS2)