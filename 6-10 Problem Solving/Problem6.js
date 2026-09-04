function convertToCamelCase(sentence) {

    let trime = sentence.trim();

    let splite = trime.split(" ");

    let pastWord = "";

    for (let i = 0; i < splite.length; i++) {

        if (i === 0) {

            pastWord = splite[i].toLowerCase();

        } else {

            pastWord +=
                splite[i].charAt(0).toUpperCase() +
                splite[i].slice(1).toLowerCase();
        }
    }

    return pastWord;
}

let polapol = convertToCamelCase("   Java script is fun  factory ");

console.log(polapol);