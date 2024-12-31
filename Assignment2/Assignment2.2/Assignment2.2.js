let dogImageEl = document.getElementById("dogImage");
let likeIconEl = document.getElementById("likeIcon");
let buttonLikeEl = document.getElementById("buttonLike");

let isChanged = true;

function clickOnButton(){
     if(isChanged === true){
          dogImageEl.src = "https://www.dogster.com/wp-content/uploads/2024/01/white-pomeranian-dog-standing-outdoor_Wirestock-Creators_Shutterstock.jpeg";

          likeIconEl.style.color = "rgb(4, 118, 240)";

          buttonLikeEl.style.backgroundColor = "rgb(4, 118, 240)";

          isChanged = false;
     }
     else{
          dogImageEl.src = "https://www.the-sun.com/wp-content/uploads/sites/6/2023/04/adorable-white-pomeranian-puppy-spitz-809043494.jpg";

          likeIconEl.style.color = "#c3c4c6";

          buttonLikeEl.style.backgroundColor = "#c3c4c6";

          isChanged = true;
     }
     
}

buttonLikeEl.addEventListener("click",clickOnButton);