// Filter


//let numbers = [1, 2, 3, 4, 5, 6, 7];
//let evenNums = numbers.filter(isEven);
//let oddNums = numbers.filter(isOdd);

//function isEven(element){
    //return element % 2 === 0 ;
//}

//function isOdd(element){
    //return element % 2 !== 0 ;
//}



//const ages = [16, 17, 18 , 18 , 19 ,20 ,60];
//const adults = ages.filter(isAdult);
//const children = ages.filter(isChild);

//console.log(adults);


//function isAdult(element){
    //return element >= 18;
//}

//function isChild(element){
    //return element < 18;
//}




const names = [" Fudo Yusei","Jack","Crow","Aki","Ruka","Rua"];

const shortNames = names.filter(getShortNames);

const longNames = names.filter(getLongtNames);

console.log(longNames);



function getShortNames(element){
    return element.length <= 6;
}

function getLongtNames(element){
    return element.length > 6;
}