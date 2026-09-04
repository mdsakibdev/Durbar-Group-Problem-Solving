function findLongestWord(sentence) {
    let arr = sentence.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");

    let boroword = ""

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > boroword.length) {
            boroword = arr[i]
        }
    }
    return boroword
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

