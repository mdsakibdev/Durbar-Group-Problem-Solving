
function findSecondLargest(numbers) {
    let uniqueNumbers = [];

    // Step 1: Duplicate বাদ দিয়ে unique numbers বের করা
    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueNumbers.includes(numbers[i])) {
            uniqueNumbers.push(numbers[i]);
        }
    }

    // Step 2: অন্তত 2টা unique number আছে কিনা check
    if (uniqueNumbers.length < 2) {
        return null;
    }

    // Step 3: ছোট থেকে বড় সাজানো
    uniqueNumbers.sort((a, b) => a - b);

    // Step 4: Second largest return করা
    return uniqueNumbers[uniqueNumbers.length - 2];
}

console.log(findSecondLargest([10, 5, 20, 5, 15]));
console.log(findSecondLargest([-10, -5, -20, -5]));
console.log(findSecondLargest([]));