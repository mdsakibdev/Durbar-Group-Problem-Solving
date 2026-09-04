
function firstUniqueCharacter(s) {
    let count = {};

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === undefined) {
            count[s[i]] = 1;
        } else {
            count[s[i]] = count[s[i]] + 1;
        }
    }

    // Step 2: প্রথম যে character-এর count 1, সেটি return করা
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return s[i];
        }
    }

    return -1;
}

console.log(firstUniqueCharacter("aajxjjbzbcdeff"));
console.log(firstUniqueCharacter("aabb"));
console.log(firstUniqueCharacter("affabggb"));