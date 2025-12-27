
const texts = [
    "Frontend Developer",
    "Web Designer",
    "UI/UX Learner",
    "Freelancer"
];

let speed = 120;
let index = 0;
let char = 0;

function typeEffect() {
    if (char < texts[index].length) {
        document.querySelector(".typing-text").textContent += texts[index].charAt(char);
        char++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (char > 0) {
        document.querySelector(".typing-text").textContent = texts[index].substring(0, char - 1);
        char--;
        setTimeout(eraseEffect, 60);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 150);
    }
}

window.onload = typeEffect;


let bars = document.querySelectorAll(".progress-line span");
let section = document.querySelector("#skills");
let animated = false;

window.addEventListener("scroll", ()=>{
    let secPos = section.getBoundingClientRect().top;
    if(secPos < window.innerHeight - 100 && !animated){
        bars.forEach(bar=>{
            let percent = bar.getAttribute("data-percent");
            bar.style.width = percent;
        });
        animated = true;
    }
});

// Circle Percent Animation
const radialBars = document.querySelectorAll(".radial-bar");
let start = false;

function animateRadials(){
    let sectionPos = document.querySelector(".pro-skills-section").getBoundingClientRect().top;
    let screenPos = window.innerHeight - 100;

    if(sectionPos < screenPos && !start){
        radialBars.forEach(bar=>{
            bar.classList.add("animate");
            let percent = bar.getAttribute("data-percent");
            let progress = bar.querySelector(".progress");
            let value = bar.querySelector(".percentage");
            let startValue = 0;

            let counter = setInterval(()=>{
                startValue++;
                value.textContent = startValue + "%";
                progress.style.background = `conic-gradient(#00e1ff ${startValue * 3.6}deg, #0b2733 0deg)`;
                if(startValue == percent) clearInterval(counter);
            },20);
        });
        start = true;
    }
}
window.addEventListener("scroll", animateRadials);





const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", ()=>{
    cards.forEach(card=>{
        let position = card.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            card.classList.add("show");
        }
    });
});





// Scroll animation for cards
const certiCards = document.querySelectorAll(".certi-card");
window.addEventListener("scroll", ()=>{
    certiCards.forEach(card=>{
        let pos = card.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            card.classList.add("show");
        }
    });
});

// POPUP IMAGE VIEW
let popup = document.getElementById("popup");
let popupImg = document.getElementById("popupImg");
let closeBtn = document.getElementById("closePopup");

document.querySelectorAll(".certi-img").forEach(img=>{
    img.addEventListener("click", function(){
        popup.style.display = "flex";
        popupImg.src = this.src;
    });
});

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
});

// Click outside image to close
popup.addEventListener("click", (e)=>{
    if(e.target === popup){ popup.style.display = "none"; }
});


const form = document.querySelector(".contact-form");
  form.addEventListener("submit", () => {
    alert("Your message has been sent! I will contact you soon.");
  });