let rootContEl = document.getElementById("rootCont");

let colorContEl = document.createElement("div");
colorContEl.style.width = "500px";
colorContEl.style.height = "600px";
colorContEl.style.backgroundColor = "rgb(175, 107, 238)";
colorContEl.style.display = "flex";
colorContEl.style.flexDirection = "column";
colorContEl.style.justifyContent = "center";
colorContEl.style.alignItems = "center";
rootContEl.appendChild(colorContEl);

let imageEl = document.createElement("img");
imageEl.style.width = "300px";
imageEl.style.height = "300px";
imageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png";
colorContEl.appendChild(imageEl);

let headingEl = document.createElement("h1");
headingEl.textContent = "PALASH NINAWE";
headingEl.style.marginTop = "20px";
headingEl.style.color = "white";
colorContEl.appendChild(headingEl);

let ageEl = document.createElement("h1");
ageEl.textContent = "Age : 26";
ageEl.style.marginTop = "10px";
ageEl.style.color = "white";
colorContEl.appendChild(ageEl);

