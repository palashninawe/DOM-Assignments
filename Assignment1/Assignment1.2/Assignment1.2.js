let buttonStopEl = document.getElementById("buttonStop");
let buttonReadyEl = document.getElementById("buttonReady");
let buttonGoEl = document.getElementById("buttonGo");
let colorStopEl = document.getElementById("colorStop");
let colorReadyEl = document.getElementById("colorReady");
let colorGoEl = document.getElementById("colorGo");

function clickButtonStop(){
     buttonStopEl.style.backgroundColor = "red";
     colorStopEl.style.backgroundColor = "red";
     buttonReadyEl.style.backgroundColor = "rgb(30, 30, 61)";
     colorReadyEl.style.backgroundColor = "gray";
     buttonGoEl.style.backgroundColor = "rgb(30, 30, 61)";
     colorGoEl.style.backgroundColor = "gray";
};

function clickButtonReady(){
     buttonReadyEl.style.backgroundColor = "gold";
     colorReadyEl.style.backgroundColor = "gold";
     buttonStopEl.style.backgroundColor = "rgb(30, 30, 61)";
     colorStopEl.style.backgroundColor = "gray";
     buttonGoEl.style.backgroundColor = "rgb(30, 30, 61)";
     colorGoEl.style.backgroundColor = "gray";
};

function clickButtonGo(){
     buttonGoEl.style.backgroundColor = "green";
     colorGoEl.style.backgroundColor = "green";
     buttonStopEl.style.backgroundColor = "rgb(30, 30, 61)";
     colorStopEl.style.backgroundColor = "gray";
     buttonReadyEl.style.backgroundColor = "rgb(30, 30, 61)";
     colorReadyEl.style.backgroundColor = "gray";
};

buttonStopEl.addEventListener("click",clickButtonStop);

buttonReadyEl.addEventListener("click",clickButtonReady);

buttonGoEl.addEventListener("click",clickButtonGo);