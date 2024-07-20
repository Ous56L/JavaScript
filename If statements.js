// If statements 


// let age = 45;

// if(age >=18){
    //console.log("You are old enough to enter this site");
//}
// else{
    // console.log("You must be 18+ to enter this site");
//}


// let time =9;

//if(time <12){
    //console.log("Good morning");
//}
//else{
    //console.log("Good afternoon");
//}



//let isStudent = false;

//if(isStudent){
    //console.log("You are a student");
//}
//else{
    //console.log("You are Not a student")
//}


//let age = 25;
//let haslicence = false;

//if(age >=16){
    //console.log("You are old enough to drive");

    //if(haslicence){
        //console.log("You have a licence");
    //}
    //else{
        //console.log("You do not have ypur licence yet");
    //}
//}
//else{
    //console.log("You must be 16+ to have a licence");
//}


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultelements = document.getElementById("resultelements");
let age = 18;


mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultelements.textContent = "You are TOO OLD to enter this site";
    }
    else if(age == 0){
        resultelements.textContent = "You can't enter. You were just born";
    }
   else if(age >=18){

        resultelements.textContent ='You are old enough to enter this site';
    }
    else if(age < 0){

        resultelements.textContent ="Your age can't be below 0"; 
    }
    else{

        resultelements.textContent ="You must be 18+ to enter this site";
    }
}


