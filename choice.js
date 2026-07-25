const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const buttons = document.getElementById("buttons");

const container = document.querySelector(".container");

const resultScreen = document.getElementById("resultScreen");

const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const continueBtn = document.getElementById("continueBtn");


// ----------------------
// NO BUTTON RUNS AWAY
// ----------------------

function moveNoButton(){

    const maxX = 220;
    const maxY = 120;

    const x = Math.random()*maxX-maxX/2;
    const y = Math.random()*maxY-maxY/2;

    noBtn.style.transform=`translate(${x}px,${y}px)`;

}

noBtn.addEventListener("mouseenter",moveNoButton);
noBtn.addEventListener("click",moveNoButton);


yesBtn.addEventListener("click",()=>{

    container.classList.add("fadeOut");

    setTimeout(()=>{

        container.classList.remove("fadeOut");

        document.querySelector(".small").style.display = "none";
        subtitle.style.display = "none";
        buttons.style.display = "none";

        title.innerHTML = "RIGHT ANSWER! 😌";

        // Leave enough time to read it
        setTimeout(()=>{

           document.body.style.opacity = "0";

setTimeout(() => {

    window.location.href = "prize.html";

}, 700);

        },3000);

    },500);

});

