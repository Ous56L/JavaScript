// setTimeout() = function in JavaScript that allows you to scheduele
//               the execution of a function after an amount of time (milliseconds)
//               Times are approximate ( varies based on the workload of the Javascript runtime env.)

//               setTimeout(callback, delay);
//               clearTimeout(timeoutID) = can cancel timeout before it triggers.


//function sayHello(){
  //  window.alert("hello");
//}

//const timeoutID = setTimeout(sayHello, 3000);

//clearTimeout(timeoutID);

let timeoutID;

function startTimer(){
    timeoutID = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutID);
    console.log("CLEARED");
}

