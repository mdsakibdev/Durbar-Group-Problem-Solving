// ** Convert Object to URL Query String


function toQueryString(params) {
    let result = "";

    for (const entry of Object.entries(params)) {
        const key = entry[0];
        const value = entry[1];

        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(value);

        const pair = encodedKey + "=" + encodedValue;

        if (result !== "") {
            result += "&";
        }

        result += pair;
    }

    return result;
}

console.log(toQueryString({
    search: "hello world",
    page: 1
}));
// "search=hello%20world&page=1"

console.log(toQueryString({
    sort: "asc",
    limit: 10
}));
// "sort=asc&limit=10"

console.log(toQueryString({}));
// ""
