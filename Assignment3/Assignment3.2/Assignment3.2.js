let buttonClickMeEl = document.getElementById("buttonClickMe");
let colorChangeEl = document.getElementById("colorChange");


let arrayColors = ["red","blue","yellow","green","pink","brown","orange","black","white","lightblue","lightgreen","gold"];

buttonClickMeEl.addEventListener("click",() =>{
     let colorChange = Math.ceil(Math.random()*10);
     // console.log(colorChange);
     colorChangeEl.style.backgroundColor = arrayColors[colorChange];
});

// function onClickColorChange(){
//      let r = Math.ceil(Math.random()*150);
//      let g = Math.ceil(Math.random()*175);
//      let b = Math.ceil(Math.random()*200);
//      colorChangeEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// };

// buttonClickMeEl.addEventListener("click",onClickColorChange);



















//------------------------------------------------------------------------------------
//Chatgpt
// function getRandomInt(min,max){
//      return Math.ceil(Math.random()*(max - min + 1)) + min;
// }

// function getRandomColor(){
//      let r = getRandomInt(0, 225);
//      let g = getRandomInt(0, 225);
//      let b = getRandomInt(0, 225);
//      return `rgb(${r}, ${g}, ${b})`;
// }
//----------------------------------------------------------------------------------

// function getRandomColor(){
//      let r = Math.ceil(Math.random()*200);
//      let g = Math.ceil(Math.random()*100);
//      let b = Math.ceil(Math.random()*150);
//      return `rgb(${r}, ${g}, ${b})`;
// }
//-------------------------------------------------------------------------------------