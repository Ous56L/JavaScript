// TEMPERATURE CONVERSION

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelesius = document.getElementById("toCelesius");
const result = document.getElementById("result");

let Temp;


function convert(){
    if(toFahrenheit.checked){
        Temp = Number(textBox.value);
        Temp = Temp * 9 / 5 + 32;
        result.textContent = Temp.toFixed(1)+ "°F"
    }
    else if(toCelesius.checked){
        Temp = Number(textBox.value);
        Temp = (Temp - 32) * (5/9);
        result.textContent = Temp.toFixed(1)+ "°C"   
    }
    else{
        result.textContent = "Select a unit"
    }
}