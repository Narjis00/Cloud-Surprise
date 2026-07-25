// ----------------------------
// CHANGE THIS
// ----------------------------

const boyfriendName = "Mi Cloud";


// ----------------------------
// ELEMENTS
// ----------------------------

const winnerName = document.getElementById("winnerName");
const winnerText = document.getElementById("winnerText");

const claimBtn = document.getElementById("claimBtn");

const winnerScreen = document.getElementById("winnerScreen");
const scratchScreen = document.getElementById("scratchScreen");
const endScreen = document.getElementById("endScreen");

const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

const progress = document.getElementById("progress");
const ownerText = document.getElementById("ownerText");
const continueBtn = document.getElementById("continueBtn");


// ----------------------------
// INTRO
// ----------------------------

winnerName.innerHTML = "";

winnerText.innerHTML = "";

claimBtn.style.display = "none";


setTimeout(()=>{

    winnerName.innerHTML = "Today's winner is...";

},1200);


setTimeout(()=>{

    winnerText.innerHTML = boyfriendName;

},2500);


setTimeout(()=>{

    claimBtn.style.display = "inline-block";

},3500);


// ----------------------------
// GO TO SCRATCH PAGE
// ----------------------------

claimBtn.addEventListener("click",()=>{

    winnerScreen.classList.add("hidden");

    scratchScreen.classList.remove("hidden");

});


// ----------------------------
// SCRATCH CARD
// ----------------------------

ctx.fillStyle = "#9a9a9a";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#777";

ctx.font="bold 32px Poppins";

ctx.textAlign="center";

ctx.fillText("SCRATCH ME",canvas.width/2,120);

ctx.globalCompositeOperation="destination-out";

let scratching=false;

canvas.addEventListener("mousedown",()=>{

    scratching=true;

});

canvas.addEventListener("mouseup",()=>{

    scratching=false;

    checkScratch();

});

canvas.addEventListener("mouseleave",()=>{

    scratching=false;

});

canvas.addEventListener("mousemove",(e)=>{

    if(!scratching) return;

    const rect=canvas.getBoundingClientRect();

    const x=e.clientX-rect.left;

    const y=e.clientY-rect.top;

    ctx.beginPath();

    ctx.arc(x,y,22,0,Math.PI*2);

    ctx.fill();

});


// ----------------------------
// CHECK HOW MUCH IS SCRATCHED
// ----------------------------

let revealed=false;

function checkScratch(){

    if(revealed) return;

    const imageData=ctx.getImageData(0,0,canvas.width,canvas.height);

    let transparent=0;

    for(let i=3;i<imageData.data.length;i+=4){

        if(imageData.data[i]===0){

            transparent++;

        }

    }

    const percent=transparent/(canvas.width*canvas.height);

    if(percent>0.45){

        revealed=true;

        setTimeout(showEnding,800);

    }

}


// ----------------------------
// END SCREEN
// ----------------------------

function showEnding(){

    scratchScreen.classList.add("hidden");

    endScreen.classList.remove("hidden");

    let width=0;

    const loading=setInterval(()=>{

        width++;

        progress.style.width=width+"%";

        if(width>=100){

            clearInterval(loading);

            ownerText.innerHTML=
            "❤️ Owner: <b>"+boyfriendName+"</b><br><br>Handle with love. 😌";

            continueBtn.style.display="inline-block";

        }

    },25);

}