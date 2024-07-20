
const PI = 3.14159;
let radius;
let cricumference;



document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    cricumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = cricumference + "cm";
}