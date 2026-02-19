
const texts = ["Web Developer", "Full Stack Developer", "Software Programmer"];
const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const navbar = document.getElementById("navbar");
const navProfile = document.getElementById("navProfile");

window.addEventListener("scroll", () => {

    if(window.scrollY > 150){
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }

});

function typeEffect() {

    const currentText = texts[textIndex];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1500);
        }

    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;
            if (textIndex === texts.length) {
                textIndex = 0;
            }
        }
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
}

typeEffect();


// Scroll Animation
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
entry.target.querySelectorAll(".progress-bar").forEach(bar=>{
bar.style.width=bar.getAttribute("data-width");
});
}
});
});
document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));
