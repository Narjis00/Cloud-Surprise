const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelopeContainer");

const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const smallEnding = document.getElementById("smallEnding");


// --------------------
// LETTER CONTENT
// --------------------

const message = `
Mission complete.

You found every clue.

But the biggest thing you've done is make someone's life so much brighter and lighter just by being yourself.

Thank you for being you. Thank you for sharing all those moments with me, for caring, and for loving me.

I love you more than yesterday, and even more tomorrow.

Forever and infinitely ever Num num .

<span class="signature">~ Your wifey 🤍</span>`;


// --------------------
// OPEN LETTER
// --------------------

envelope.addEventListener("click",()=>{

    envelopeContainer.style.display = "none";

    letter.classList.remove("hidden");

    // Show the whole letter immediately
    letterText.innerHTML = message;

    // Show the little note underneath
   setTimeout(()=>{

    smallEnding.classList.remove("hidden");

    const ps = document.getElementById("psMessage");

    setTimeout(()=>{

        ps.innerHTML =
        "P.S : Can't wait to make countless more memories with you 🤍";

        ps.classList.add("show");

    },2500);

},500);
});


// --------------------
// FLOATING CLOUDS
// --------------------

const floating = [

    "☁️",
    "☁️",
    "☁️",
    "☁️",
    "🧝🏻‍♀️"

];

setInterval(()=>{

    const item = document.createElement("div");

    item.className = "cloud";

    item.innerHTML = floating[Math.floor(Math.random()*floating.length)];

    item.style.left = Math.random()*100 + "vw";

    item.style.fontSize = (24 + Math.random()*28) + "px";

    item.style.animationDuration = (8 + Math.random()*6) + "s";

    item.style.opacity = .8;

    document.body.appendChild(item);

    setTimeout(()=>{

        item.remove();

    },15000);

},700);