function repeatedDigitSum(n) {
    while (n > 9) {

        let count = 0

        while (n !== 0) {
            let bigNumber = n % 10
            count += bigNumber
            n = Math.floor(n / 10)
        }

        n = count
    }
    return n
}

console.log(repeatedDigitSum(123))





