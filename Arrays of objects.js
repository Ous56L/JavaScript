// Arrays of objects =


const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "mango", color: "yellow", calories: 100}, 
                {name: "berry", color: "blue", calories: 20}, 
                {name: "kiwi", color: "green", calories: 35},
                {name: "pineapple", color: "yellow", calories: 40}];



fruits.push({name: "grapes", color: "purple", calories: 105});


// --------- forEach() ----------

//fruits.forEach(fruit => console.log(fruit.name));


// --------- map() ----------

//const fruitNames = fruits.map(fruit => fruit.name);
//const fruitColors = fruits.map(fruit => fruit.color);
//const fruitCalories = fruits.map(fruit => fruit.calories);

//console.log(fruitNames);
//console.log(fruitColors);
//console.log(fruitCalories);


// ---------- filter() ----------

//const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
//const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
//const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

//console.log(yellowFruits);
//console.log(lowCalFruits);
//console.log(highCalFruits);


// ---------- reduce() ----------

const maxFruits = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);


const minFruits = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit : min);

console.log(maxFruits);
console.log(minFruits);
