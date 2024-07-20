// DOM navigation = The process of navigation through the structure
//                  of an HTML document using JavaScript.


// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//-------------------------------------

//const element = document.getElementById("fruits");
//const firstChild = element.firstElementChild;

//firstChild.style.backgroundColor = "yellow";

//=================================================

//const ulElements = document.querySelectorAll("ul");

//ulElements.forEach(ulElement => {
  //  const firstChild = ulElement.firstElementChild;
    //firstChild.style.backgroundColor = "yellow";
//});

//===================================================

//const element = document.getElementById("fruits");
//const lastChild = element.lastElementChild;
//lastChild.style.backgroundColor = "lightgreen";

//===================================================

//const ulElements = document.querySelectorAll("ul");

//ulElements.forEach(ulElement => {
  //  const lastChild = ulElement.lastElementChild;
    //lastChild.style.backgroundColor = "lightgreen";
//});


//<<>>---------------- .nextElementSibling --------------------<<>>

//const element = document.getElementById("watermelon");
//const nextSibling = element.nextElementSibling;

//nextSibling.style.backgroundColor = "lightblue";


//<<>>--------------- .previousElementSibling --------------------<<>>

//const element = document.getElementById("vegetables");
//const prevSibling = element.previousElementSibling;

//prevSibling.style.backgroundColor = "lightpink";

//<<>>------------------ .parentElement ----------------------------<<>>

//const element = document.getElementById("watermelon");
//const parent = element.parentElement;
//parent.style.backgroundColor = "pink";

//<<>>------------------ .children ----------------------------<<>>

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "pink";
});

