// Reduce


//const prices = [5, 30 , 10 ,25, 15, 20];

//const total = prices.reduce();

//console.log(`$${total.toFixed(2)}`);


//function sum(previous, next){
    //return previous + element;
//}




const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);

const minimum = grades.reduce(getMin);

console.log(maximum);

function getMax(accumulator , element){
    return Math.max(accumulator , element);
}

function getMin(accumulator , element){
    return Math.min(accumulator , element);
}