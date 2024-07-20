// Destructuring = extract values from arrays and objects,
//              them assign them to variables in a conveninet way

//              [] = to perform array destructuring
//              {} = to perform object destructuring
//               5 examples

// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

//let a = 1;
//let e = 2;

//[a, b] = [b, a];

//console.log(a);
//console.log(b);

//<><>========================================================================

// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

//const colors = ["red","green","blue","purple","yellow"];

//[colors[0], colors[4]] = [colors[4], colors[0]];

//console.log(colors);

//<><>=================================================================================

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

//const colors = ["red","green","blue","purple","yellow"];

//const [firstColor, secoundColor, thirdColor, ...extraColors] = colors;


//console.log(firstColor);
//console.log(secoundColor);
//console.log(thirdColor);
//console.log(extraColors);

//<><>==================================================================================

// ----------   EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

//const person1 = {
    //firstName: "Monkey.D.",
    //lastName : "Luffy",
    //age : 20,
    //job : "Great Pirate",
//}

//const person2 = {
    //firstName: "Roronoa",
    //lastName : "Zoro",
    //age : 21,
//}

//const {firstName, lastName , age , job = "Unemployed"} = person1;

//console.log(firstName);
//console.log(lastName);
//console.log(age);
//console.log(job);

//<><>=============================================================================

// ---------- EXAMPLE 5 ----------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age ,job = "Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const person1 = {
    firstName: "Monkey.D.",
    lastName : "Luffy",
    age : 20,
    job : "Great Pirate",
}

const person2 = {
    firstName: "Roronoa",
    lastName : "Zoro",
    age : 21,
}

displayPerson(person1);
