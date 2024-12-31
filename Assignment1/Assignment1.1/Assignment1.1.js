let mainContBackgroundEl = document.getElementById("mainContBackground");
let button1El = document.getElementById("button1");
let button2El = document.getElementById("button2");
let button3El = document.getElementById("button3");
let button4El = document.getElementById("button4");
let colorFontEl = document.getElementById("colorFont");

function clickButton1(){
     mainContBackgroundEl.style.backgroundColor = "#e0e0e0";
     colorFontEl.textContent = "#e0e0e0";
     colorFontEl.style.color = "#e0e0e0";
}

function clickButton2(){
     mainContBackgroundEl.style.backgroundColor = "#6fcf97";
     colorFontEl.textContent = "#6fcf97";
     colorFontEl.style.color = "#6fcf97";
}

function clickButton3(){
     mainContBackgroundEl.style.backgroundColor = "#56ccf2";
     colorFontEl.textContent = "#56ccf2";
     colorFontEl.style.color = "#56ccf2";
}

function clickButton4(){
     mainContBackgroundEl.style.backgroundColor = "#bb6bd9";
     colorFontEl.textContent = "#bb6bd9";
     colorFontEl.style.color = "#bb6bd9";
}

button1El.addEventListener("click",clickButton1);
button2El.addEventListener("click",clickButton2);
button3El.addEventListener("click",clickButton3);
button4El.addEventListener("click",clickButton4);

