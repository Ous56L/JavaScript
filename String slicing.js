// String slicing


const fullName = "Osama yasin";

// let firstName = fullName.slice(0,5);
// let lastName = fullName.slice(6,11);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1);


// let firstName = fullName.slice(0,fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" "));



//console.log(firstName);
//console.log(lastName);
//console.log(fistChar);


const email = "osama@gmail.com";

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);