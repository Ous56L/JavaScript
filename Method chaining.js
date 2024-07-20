// Method chaining


let username = window.prompt("Enter your username :");

// NO METHOD CHAINING



//username = username.trim();OSAMA YASIN
//let letter = username.charAt(0);
 //letter = letter.toUpperCase();


//let extraChars = username.slice(1);o
//extraChars = extraChars.toLocaleUpperCase();

//username = letter + extraChars;

// console.log(username);


// ...... METHOD CHAINING ......


username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);