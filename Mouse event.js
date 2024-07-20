// Mouse event;

// Eventlistener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                         .addEventListener(event, callback);


const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton")

myButton.addEventListener("click",function(event){
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});

//>>>>>>>>>> MouseOver <<<<<<<<<<<<<<

myButton.addEventListener("mouseover", event =>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 😥";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😊";
});