// Functions


//function happyBirthday(username , age){
    //console.log("Happy birthday to you!");
    //console.log("Happy birthday to you!");
    //console.log(`Happy birthday dear ${username}!`);
    //console.log("Happy birthday to you!");
    //console.log(`You are ${age} years old`);
//}

//happyBirthday("Osama yasin" , 22);
//happyBirthday("Luffy" , 20);


function add(x , y){
    return x + y;
}
function subtract(x , y){
    return x - y ;
}
function multiply(x , y){
    return x * y ;
}
function divide(x , y){
    return x / y ;
}
function isEver(number){

    return number % 2 === 0 ? true : false ;
}
function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("NiggaisFake@gmail.com"));