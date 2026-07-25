const wrongItems = document.querySelectorAll(".wrong");
const elf = document.getElementById("elf");
const overlay = document.getElementById("overlay");
const container = document.querySelector(".container");

const replacements = [
    "🍄","🦋","🧸","🪻","🦆","🌵","🍌","🐧","🌸","🫐","🪼","🍀"
];

// Wrong clicks
wrongItems.forEach(item => {

    item.addEventListener("click", () => {

        item.classList.add("flip");

        setTimeout(() => {

            const random =
                replacements[Math.floor(Math.random() * replacements.length)];

            item.textContent = random;

            item.classList.remove("flip");

        },220);

    });

});

// Correct click
elf.addEventListener("click", () => {

    // Prevent clicking twice
    elf.style.pointerEvents = "none";

    // Flip the elf
    elf.classList.add("flip");

    setTimeout(() => {

        // Reveal your picture
        elf.textContent = "";

        elf.style.backgroundImage = "url('images/Us.png')";
        elf.style.backgroundSize = "cover";
        elf.style.backgroundPosition = "center";
        elf.style.backgroundRepeat = "no-repeat";

        elf.classList.remove("flip");

        // Highlight the picture
        elf.style.transform = "scale(1.18)";
        elf.style.border = "3px solid #8B5CF6";
        elf.style.boxShadow = "0 0 35px rgba(139,92,246,.9)";

        // Fade other icons a little
        wrongItems.forEach(item=>{

            item.style.opacity=".35";

        });

        // Give him time to look at the picture
        setTimeout(()=>{

            // Blur page
            container.classList.add("blur");

            // Show ending
            overlay.classList.add("show");

        },3000);

    },250);

});