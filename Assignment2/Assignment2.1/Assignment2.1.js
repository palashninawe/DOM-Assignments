let seasonImageEl = document.getElementById("seasonImage");
let buttonSpringEl = document.getElementById("buttonSpring");
let buttonSummerEl = document.getElementById("buttonSummer");
let buttonAutumnEl = document.getElementById("buttonAutumn");
let buttonWinterEl = document.getElementById("buttonWinter");

function clickSpringBtn(){
     seasonImageEl.src = "Springimage.jpg";
};

function clickSummerBtn(){
     seasonImageEl.src = "Summerimage.jpg";
};

function clickAutumnBtn(){
     seasonImageEl.src = "Autumnimage.jpg";
};

function clickWinterBtn(){
     seasonImageEl.src = "Winterimage.jpg";
};

buttonSpringEl.addEventListener("click",clickSpringBtn);
buttonSummerEl.addEventListener("click",clickSummerBtn);
buttonAutumnEl.addEventListener("click",clickAutumnBtn);
buttonWinterEl.addEventListener("click",clickWinterBtn);