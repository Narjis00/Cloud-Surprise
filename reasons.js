const cards = document.querySelectorAll(".card");

const finalScreen = document.getElementById("finalScreen");
const finalTitle = document.getElementById("finalTitle");
const finalText = document.getElementById("finalText");
const continueBtn = document.getElementById("continueBtn");
const container = document.querySelector(".container");
const cardsNextBtn = document.getElementById("cardsNextBtn");

let opened = 0;

// ------------------------
// CARD CONTENT
// ------------------------

const reasons = [

{
title:"Mi safe space",
text:"you're the first human i'd go to in absolutely any state im in , cus i know that once i do , i'll feel a sense of relief and happiness",
color:"#B8D8FF"
},

{
title:"How i see you",
text:"You're intelligent and smart , creative and thoughtful , Handsome and gorgeous (DIVA 🫦) , and fucking HOT GADAMIT 😤",
color:"#FFD8B8"
},

{
title:"Our connection.",
text:"we understand each other on a crazy level and in a way we'll never have with anyone else on this earth , forever grateful 😭",
color:"#E6CCFF"
},

{
title:"Ordinary days",
text:"You make any ordinary day feel special , and every moment spent with you feels like absolute heaven",
color:"#FFF3B0"
},

{
title:"Jokey jokey",
text:"Can't forget the way you make laugh and those little cute jokes you make when u know im not feeling good",
color:"#CFFFD6"
},

{
title:"Your love.",
text:"even when you're tired , i do see the times where you still try and find ways to show love and care cus your heart is full of it .",
color:"#FFD6E7"
},

{
title:"You never had to be perfect baby",
text:"You only had to be you.",
color:"#D9B8FF"
}

];

// ------------------------
// OPEN CARD
// ------------------------

cards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        if(card.classList.contains("opened")) return;

        card.classList.add("opened");
        card.classList.add("open");

        opened++;

        const lock = card.querySelector(".lock");
        const title = card.querySelector("h2");
        const text = card.querySelector("p");

        // Remove lock to leave more room
        lock.style.display = "none";

        title.innerHTML = reasons[index].title;
        text.innerHTML = reasons[index].text;

        text.style.display = "block";

        card.style.background = reasons[index].color;

        card.style.color = "#111";
        title.style.color = "#111";
        text.style.color = "#111";

        card.animate(
        [
            {transform:"scale(.85)"},
            {transform:"scale(1.05)"},
            {transform:"scale(1)"}
        ],
        {
            duration:450
        });

        if (opened === 7) {

            cardsNextBtn.style.display = "block";

            cardsNextBtn.animate(
                [
                    { opacity: 0, transform: "translateY(20px)" },
                    { opacity: 1, transform: "translateY(0)" }
                ],
                {
                    duration: 600,
                    fill: "forwards"
                }
            );

        }

    });

});

// ------------------------
// BUTTON AFTER ALL CARDS
// ------------------------

cardsNextBtn.addEventListener("click", () => {

    cardsNextBtn.style.display = "none";

    showFinal();

});
    


// ------------------------
// FINAL
// ------------------------

function showFinal(){

    container.style.opacity="0";

    setTimeout(()=>{

        container.style.display="none";

        finalScreen.classList.remove("hidden");

        setTimeout(()=>{

            finalScreen.classList.add("show");

        },50);

        startStars();

        revealMessage();

    },1000);

}
// ------------------------
// FINAL MESSAGE
// ------------------------

function revealMessage(){

    setTimeout(()=>{

        finalTitle.innerHTML = "The real reason is...";

    },800);

    setTimeout(()=>{

        finalTitle.innerHTML = "Because you're you.";

    },3200);

    setTimeout(()=>{

        finalText.innerHTML = "And I wouldn't change that for anything.<br><br>💜";

    },5600);

 setTimeout(()=>{

    continueBtn.style.display = "inline-block";

    continueBtn.animate(
        [
            {opacity:0,transform:"translateY(15px)"},
            {opacity:1,transform:"translateY(0)"}
        ],
        {
            duration:500,
            fill:"forwards"
        });

},8000);

}

// ------------------------
// FLOATING STARS
// ------------------------

function startStars(){

    const icons = ["☁️","🧝","🌀"];

    setInterval(()=>{

        const star = document.createElement("div");

        star.className = "star";

        star.innerHTML = icons[Math.floor(Math.random()*icons.length)];

        star.style.left = Math.random()*100 + "vw";

        star.style.bottom = "-40px";

        star.style.fontSize = (14 + Math.random()*18) + "px";

        star.style.animationDuration = (5 + Math.random()*4) + "s";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },9000);

    },250);

}