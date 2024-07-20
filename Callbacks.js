// Callbacks = a function that is passed as an 
//              argument to another function .

//            used to handle asynchronous operations :
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases


//            "Hey, you're done, call this next."

//hello(goodbye);

//function hello(Callback){
    //console.log("Hello!");
    //Callback();
//}
//function Wait(){
    //console.log("Wait!!");
//}
//function leave (){
    //console.log("Leave!");
//}
//function goodbye(){
    //console.log("GoodBye!");
//}

sum(displayPage , 1 , 2);

function sum(callback , x , y){
    let result = x + y ;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}