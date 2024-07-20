// DOM = DOCUMENT OBJECT MODEL;
//       OBJECT{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access th DOM to dynamically
//       change the content, structure, and style of a web page.


const username = "Kurumi";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username == "" ? 'Guest' : username;