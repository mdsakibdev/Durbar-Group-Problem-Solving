function classifyPassword(password) {
    // TODO
}

// password
//    ↓
// loop দিয়ে character check
//    ↓
// uppercase আছে?
// lowercase আছে?
// number আছে?
// special আছে?
//    ↓
// কয়টা condition true?
//    ↓
// ৪টা + length >= 8 ?
//    ↓
// Strong
//    ↓ না
// ২টা বা বেশি + length >= 6 ?
//    ↓
// Medium
//    ↓ না
// Weak

// let password = "Password1!"
let password = "pass123"

let hasUppercase = false;
let hasLowercase = false;
let hasNumber = false;
let hasSpecial = false;

for (let i = 0; i <password.length;  i++){
    let special = "!@#$%^&*";
    if(password[i] >= "a" && password[i] <= "z"){
        hasLowercase = true
    }
    if(password[i] >= "A" && password[i] <= "Z"){
        hasUppercase = true
    }
    if(password[i] >= "0" && password[i] <= "9"){
        hasNumber = true
    }
    if(special.includes(password[i])){
        hasSpecial = true
    }
}

let count = 0;

if(hasLowercase){
    count++
}if(hasUppercase){
    count++
}if(hasNumber){
    count++
}if(hasSpecial){
    count++
}

if(password.length >= 8 && count === 4){
    return "Strong"
}else if(password.length >= 6 && count >= 2){
    return "Medium"
}else {
    return "Weak";
}