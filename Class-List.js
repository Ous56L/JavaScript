//Class-List = Element property in JavaScript used to interact
//             with an element's list of classes for many elements
//             across your webpage.

// add()
// remove()
// toggle(Remove if present Add if not)
// replace(oldClass, newClass)
// contains()

//<<>> ADD & REMOVE() ;

//const myH1 = document.getElementById("myH1");
//myH1.classList.add("enabled");

//const myButton = document.getElementById("myBtn");
//myButton.classList.add("enabled");

//myButton.addEventListener("mouseover", event => {
  //  event.target.classList.add("hover");
//});

//--------------------------------------------------

//<<>> TOGGLE() ;

//myButton.addEventListener("mouseover", event => {
  //  event.target.classList.toggle("hover");
//});

//myButton.addEventListener("mouseover", event => {
  //  event.target.classList.toggle("hover");
//});

//------------------------------------------------------

//<> REPLACE() ;

//myButton.addEventListener("click", event =>{
  //  event.target.classList.replace("enabled", "disabled");
//});

//----------------------------------------------------------

//<<>> CONTAIN() ;

//myButton.addEventListener("click", event =>{

  //  if(event.target.classList.contains("disabled")){
    //    event.target.textContent += "😡";
    //}
    //else{

    //}event.target.classList.replace("enabled", "disabled");
//});


//----------------------------------------------------------------

//myH1.addEventListener("click", event =>{

  //  if(event.target.classList.contains("disabled")){
    //    event.target.textContent += "😡";
    //}
    //else{

    //}event.target.classList.replace("enabled", "disabled");
//});

//-----------------------------------------------------------------

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "💀";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }

        event.target.classList.replace("enabled", "disabled");
    })
})