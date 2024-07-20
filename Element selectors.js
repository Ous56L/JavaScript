// Element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()        // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName()  // HTML COLLECTION
// 4. document.querySelector()         // ELEMENT OR NULL
// 5. document.querySelectorAll()      // NODELIST


// <1. document.getElementById()>;

//-const myHeading = document.getElementById("my-Heading");

//-myHeading.style.backgroundColor = "yellow";
//-myHeading.style.textAlign = "center";

//---------------------------------------------------------------

// <<2. document.getElementsClassName()>>;

//-const fruits = document.getElementsByClassName("fruits");

//console.log(fruits);

//--fruits[0].style.backgroundColor = "yellow";


//--Array.from(fruits).forEach(fruit => {
    //-fruit.style.backgroundColor = "yellow";
//--});


//-----------------------------------------------------------------------

// <<<3. document.getElementsByTagName()>>>;

//const h4Elements = document.getElementsByTagName("h4");
//const liElements = document.getElementsByTagName("li");


//for(let h4Element of h4Elements){
  //  h4Element.style.backgroundColor = "yellow";
//}

//for(let liElement of liElements){
  //  liElement.style.backgroundColor = "lightgreen";
//}


//---------------------------------------------------------------------

//<<<<4. document.querySelector()>>>>;

//const element = document.querySelector(".fruits");

//element.style.backgroundColor = "lightgreen";


//---------------------------------------------------------------------

//<<<<<5. document.querySelectorAll()>>>>>;

const foods = document.querySelectorAll(".fruits");

//foods[0].style.backgroundColor = "orange";

foods.forEach(food => {
    food.style.backgroundColor = "orange";
});