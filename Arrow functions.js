// Arrow functions




// ARROW FUNCTION;

//const hello = (name,age) => {console.log(`Hello ${name}`)
 //                        console.log(`You are ${age} years old`);};

//hello("osama", 22);



setTimeout(() => console.log("Hello"), 3000);


const numbers = [1, 2, 3, 4, 5, 6];

const Squares = numbers.map((element) => Math.pow(element , 2));
const Cubes = numbers.map((element) => Math.pow(element , 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator , element) => accumulator + element);


console.log(total);