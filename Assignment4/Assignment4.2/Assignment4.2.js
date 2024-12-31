let rootContEl = document.getElementById("rootCont");
let inputWordEl = document.getElementById("inputWord");



function onAppendWord(word){
     let wordInputEl = document.createElement("div");
     wordInputEl.textContent = userInputWord;
     rootContEl.appendChild(wordInputEl);

}

function onAddWord(){
     let userInputWord = inputWordEl.value;
     rootContEl.appendChild(userInputWord);
}
