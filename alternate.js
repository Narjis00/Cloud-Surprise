const title = document.getElementById("title");
const status = document.getElementById("status");

const loadingSection = document.getElementById("loadingSection");
const loadingText = document.getElementById("loadingText");
const progress = document.getElementById("progress");

const main = document.getElementById("main");
const ending = document.getElementById("ending");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const continueBtn = document.getElementById("continueBtn");


// ----------------------------
// START
// ----------------------------

setTimeout(() => {

    title.innerHTML = "What if we never met?";

}, 800);


// ----------------------------
// FIRST PART
// ----------------------------

const lines = [

    "No late-night conversations.",

    "No numi numi.",

    "No random laughter and silly jokes.",

    "No us."

];

setTimeout(showMessages, 3000);


function showMessages(){

    let i = 0;

    function next(){

        if(i >= lines.length){

            // Leave "No us." on screen
            setTimeout(startLoading,3000);

            return;

        }

        status.className = "";
        status.classList.add("fadeIn");
        status.innerHTML = lines[i];

        i++;

        setTimeout(next,2200);

    }

    next();

}


// ----------------------------
// LOADING
// ----------------------------

function startLoading(){

    status.innerHTML = "";

    loadingSection.classList.remove("hidden");

    loadingText.innerHTML = "Searching every possible universe...";

    let width = 0;

    const load = setInterval(()=>{

        width++;

        progress.style.width = width+"%";

        if(width >= 100){

            clearInterval(load);

            loadingText.innerHTML = "Checking alternate timeline...";

            setTimeout(showError,2000);

        }

    },30);

}


// ----------------------------
// ERROR SEQUENCE
// ----------------------------

function showError(){

    status.className = "error fadeIn";

    status.innerHTML = "ERROR";

    setTimeout(()=>{

        status.innerHTML = "Attempting to repair timeline...";

    },2000);

    setTimeout(()=>{

        status.innerHTML = "Repair failed.";

    },4500);

    setTimeout(()=>{

        status.innerHTML = "Reason:<br>Relationship not found.";

    },7000);

    setTimeout(()=>{

        status.innerHTML = "⚠ TIMELINE COLLAPSED ⚠";

        document.body.classList.add("shake");

    },9500);

    setTimeout(()=>{

        document.body.classList.remove("shake");

        showEnding();

    },12000);

}


// ----------------------------
// ENDING
// ----------------------------

function showEnding(){

    main.style.opacity = "0";

    setTimeout(()=>{

        main.classList.add("hidden");

        ending.classList.remove("hidden");

        revealEnding();

    },1800);

}


// ----------------------------
// FINAL TEXT
// ----------------------------

function revealEnding(){

    setTimeout(()=>{

        line1.innerHTML = "Thankfully...";
        line1.classList.add("fadeIn");

    },600);

    setTimeout(()=>{

        line2.innerHTML = "we did.";
        line2.classList.add("fadeIn");

    },2200);

    setTimeout(()=>{

        line3.innerHTML = ":3";
        line3.classList.add("fadeIn");

    },3800);

    setTimeout(()=>{

        continueBtn.style.display = "inline-block";
        continueBtn.classList.add("fadeIn");

    },5200);

}