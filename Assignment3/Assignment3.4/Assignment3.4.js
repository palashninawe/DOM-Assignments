let buttonAboutEl = document.getElementById("buttonAbout");
let buttonTimeEl = document.getElementById("buttonTime");
let buttonAttractionEl = document.getElementById("buttonAttraction");
let paragraphDetailsEl = document.getElementById("paragraphDetails");


function onClickChangeAbout(){
     paragraphDetailsEl.textContent = `Varanasi is one of the oldest living cities in the world. Its Prominence in Hindu mythology is virtually unrevealed. Mark Twain, the English author and literature, who was enthralled by the legend and sanctity of Banaras, once wrote, "Banaras is older  than history, older than tradition, older even than legend and looks twice as old as all of them put together"`;

     buttonAboutEl.style.backgroundColor = "white";

     buttonTimeEl.style.backgroundColor = "#e0e0e0";

     buttonAttractionEl.style.backgroundColor = "#e0e0e0";
     
};

function onClickChangeTime(){
     paragraphDetailsEl.textContent = `October to March is the best time to visit Varanasi because most of the fairs here are held during this time of the year. Festivities begin with Diwali and continue to Dev Diwali celebrated on the 15th day from Diwali. In between, there is also Annakut. During this time, the ghats are lit with lights and diyas. Earthen lamps adorn the staircase of the ghats and are also afloat in the river. Firecrackers burn through the night, and it's a sight no one should miss.`;

     buttonAboutEl.style.backgroundColor = "#e0e0e0";

     buttonTimeEl.style.backgroundColor = "white";

     buttonAttractionEl.style.backgroundColor = "#e0e0e0";

};

function onClickChangeAttraction(){
     paragraphDetailsEl.textContent = `When visiting Varanasi, one comes across plenty of ghats, but among them, Dashashwamedh Ghat is said to be one of the oldest and most important. This ghat, leading to the Ganges, is located close to the famous old Vishwanath temple in Kashi (today's Banaras). Another famous attraction is River Ganges which is the holiest river by the Hindus and many more..`;

     buttonAboutEl.style.backgroundColor = "#e0e0e0";

     buttonTimeEl.style.backgroundColor = "#e0e0e0";

     buttonAttractionEl.style.backgroundColor = "white";
};

buttonAboutEl.addEventListener("click",onClickChangeAbout);
buttonTimeEl.addEventListener("click",onClickChangeTime);
buttonAttractionEl.addEventListener("click",onClickChangeAttraction);

