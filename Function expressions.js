//Function expressions = define a reusable of code
//                  that performs a specific task





//const hello = function(){
    //console.log("Hello")
//}

//hello();


//setTimeout(function(){
    //console.log("Hello");
//}, 3000)




const numbers = [1, 2, 3, 4, 5, 6];
const Squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const CUbes = numbers.map(function(element){
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

const total = numbers.reduce(function(accumulator , element){
    return accumulator + element;
});

console.log(Squares);



