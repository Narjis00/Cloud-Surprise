const intro = document.getElementById("intro");
const story = document.getElementById("story");
const line = document.getElementById("line");

const ending = document.getElementById("ending");
const endingText = document.getElementById("endingText");
const continueBtn = document.getElementById("continueBtn");

const yesBtn = document.getElementById("yesBtn");

// ------------------------
// STORY
// ------------------------

const storyLines = [

"Life gets messy sometimes",

"We'll get tired",

"We'll argue and fight ",

"We'll have difficult days",

"But...",

"I'd still choose you",

"Every single day",

"Again.",

"again.",

"Again.",

"Again.",

"Again.",

"Again.",

"Again.",

"Again.",

"...I can literally do this all day.",

"Fine. I'll stop. 😔",

"Even on the days you don't feel enough...",

"You'll always be enough for me, my sweet little honeybun 🤍"
];

// ------------------------
// YES BUTTON
// ------------------------

yesBtn.addEventListener("click",()=>{

    intro.classList.add("hidden");
    story.classList.remove("hidden");

    let index = 0;

    function nextSentence(){

        // Finished
        if(index >= storyLines.length){
            return;
        }

        line.style.opacity = "0";

        setTimeout(()=>{

            line.innerHTML = storyLines[index];
            line.style.opacity = "1";

            // Remove previous button
            const oldBtn = document.getElementById("storyNextBtn");
            if(oldBtn){
                oldBtn.remove();
            }

            // Create button
            const nextBtn = document.createElement("button");
            nextBtn.id = "storyNextBtn";
            nextBtn.innerHTML = "AND";

            story.appendChild(nextBtn);

            nextBtn.animate(
                [
                    {opacity:0, transform:"translateY(15px)"},
                    {opacity:1, transform:"translateY(0)"}
                ],
                {
                    duration:500,
                    fill:"forwards"
                }
            );

            nextBtn.addEventListener("click",()=>{

                nextBtn.remove();

                // LAST sentence
                if(index === storyLines.length - 1){

                    story.classList.add("hidden");

                    ending.classList.remove("hidden");

                    endingText.innerHTML =
                    "I'll choose you.<br><br>Every single day. 🤍";

                    return;
                }

                index++;
                nextSentence();

            });

        },400);

    }

    nextSentence();

});

// ------------------------
// CONTINUE
// ------------------------

continueBtn.addEventListener("click",()=>{

    window.location.href = "last.html";

});

// ------------------------
// FLOATING STARS
// ------------------------

const icons = ["🧝‍♀️","☁️","🌀"];

setInterval(()=>{

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    star.style.left = Math.random()*100 + "vw";

    star.style.fontSize = (16 + Math.random()*18) + "px";

    star.style.animationDuration = (5 + Math.random()*4) + "s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },9000);

},350);