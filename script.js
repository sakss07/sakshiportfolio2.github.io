

// Typing effect
const text = "Hello, I'm Sakshi 👋 | Developer | Creative Thinker";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// Scroll reveal
function reveal() {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        let windowHeight = window.innerHeight;
        let top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
