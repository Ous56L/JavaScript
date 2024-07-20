// Checked property


const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subresult = document.getElementById("subresult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subresult.textContent = "You are subscribed !";
    }
    else{
        subresult.textContent = "You are Not subscribed !";
    }

    if(visaBtn.checked){
        paymentResult.textContent ="You are paying with Visa";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = "You are paying with Master Card";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "You are paying with PayPal";
    }
    else{
        paymentResult.textContent = " You must select a payment method";
    }
}
