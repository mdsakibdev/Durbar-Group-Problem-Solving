/**
 * * এখানে মূলত Object.entries() + for...of + dynamic object key ব্যবহার করতে হবে।
 */

let obj = {
    a: "x",
    b: "y"
}

function swapKeysAndValues(obj) {

    let result = {};

    let entries = Object.entries(obj);

    for (let [key, value] of entries) {

        result[value] = key;

    }

    return result;
}