function isPalindrome(str) {
    let lowarcase = str.toLowerCase()

    let remove = lowarcase.replace(/[^a-zA-Z0-9]/g, "");

    let revars = remove.split("").reverse().join("")

    if (remove === revars) {
        return true
    } else {
        return false
    }
}





