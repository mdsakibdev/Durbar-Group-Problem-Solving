function reverseEachWord(str) {
    let splite = str.split(" ")

    let total = splite.map(function (word) {
        let splite = word.split("")
        let reverse = splite.reverse().join("")
        return reverse

    })
    return total.join(" ")
}


