// function compressCharacters(str) {

    // let result = "";
    // let count = 1;

    // for (let i = 0; i < str.length; i++) {

        // current character এবং next character compare করো

        // একই হলে count বাড়াও

        // আলাদা হলে result-এর মধ্যে character যোগ করো
        // count 1 হলে শুধু character
        // count > 1 হলে character + count

        // এরপর count reset করো
    // }

    // শেষে result return করো
// }

let  str = "hello"

let result = "";
let count = 1;

for(let i = 0; i < str.length; i++){
    if(str[i] === str[i+1]){
        count++
    }else {
        if(count === 1){
           result += str[i]
        }else if (count > 1){
            result += str[i] + count
        }
    }
    count = 1
}