// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes


//let buttons = document.querySelectorAll(".myButtons");

//console.log(buttons);

// ADD HTML / CSS PROPERTIES

//--buttons.forEach(button => {
    //button.style.backgroundColor = "lightgreen";
    //button.textContent += "😁";
//})

// CLICK EVENT LISTENER

//--buttons.forEach(button => {
    //--button.addEventListener("click", event => {
        //event.target.style.backgroundColor = "tomato";
    //});
//})

// MOUSEOVER + MOUSEOUT EVENT LISTENER

//buttons.forEach(button => {
  //  button.addEventListener("mouseover", event => {
    //    event.target.style.backgroundColor = "hsl(205, 100%, 40%);"
    //})
//});

//buttons.forEach(button => {
  //  button.addEventListener("mouseout", event => {
    //    event.target.style.backgroundColor = "hsl(205, 100%, 60%);"
    //})
//});

let buttons = document.querySelectorAll(".myButtons");

//ADD AN ELEMENT

const newButton = document.createElement("button");

//newButton.textContent = "button 5"; // STEP2 ;

//newButton.classList = "myButtons"; //STEP3

//document.body.appendChild(newButton); //STEP4

//buttons = document.querySelectorAll("myButtons");

// REMOVE AN ELEMENT 

buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.remove();
    buttons.document.querySelectorAll("myButtons");
  });
});