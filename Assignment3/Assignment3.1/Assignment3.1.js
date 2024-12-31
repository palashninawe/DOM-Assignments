let numberFirstEl = document.getElementById("numberFirst");
let numberSecondEl = document.getElementById("numberSecond");
let inputNumEl = document.getElementById("inputNum");
let buttonCheckEl = document.getElementById("buttonCheck");
let buttonRestartEl = document.getElementById("buttonRestart");
let divErrorEl = document.getElementById("divError");
let alertShowEl = document.getElementById("alertShow");

let randomNumber1 = Math.ceil(Math.random()*100);
let randomNumber2 = Math.ceil(Math.random()*100);

numberFirstEl.textContent = randomNumber1;
numberSecondEl.textContent = randomNumber2;

let randomNumber3;
let randomNumber4;

function onClickCheck(){
     let total = randomNumber1 + randomNumber2;  
     let total1 = randomNumber3 + randomNumber4;  
     let numInput = parseInt(inputNumEl.value);
     if(numInput === total){
          
          alertShowEl.innerText = "Congratulations! You got it Right";
          divErrorEl.style.backgroundColor = "green"
     }
     else if(numInput === total1){
          alertShowEl.innerText = "Congratulations! You got it Right";
          divErrorEl.style.backgroundColor = "green"
     }
     else{
          alertShowEl.innerText = "Please Try Again!";
          divErrorEl.style.backgroundColor = "red"
     }

};

function onClickRestart(){

     randomNumber3 = Math.ceil(Math.random()*100);
     randomNumber4 = Math.ceil(Math.random()*100);
     
     numberFirstEl.textContent = randomNumber3;
     numberSecondEl.textContent = randomNumber4;

     inputNumEl.value = "";
     alertShowEl.innerText = "";

};

buttonCheckEl.addEventListener("click",onClickCheck);
buttonRestartEl.addEventListener("click",onClickRestart);