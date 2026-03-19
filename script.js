// ================= MOBILE MENU =================

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ================= TYPING EFFECT =================

const typing = document.querySelector(".typing");

if (typing) {

    const words = ["Data Analyst", "SQL Developer", "Power BI Enthusiast"];
    let i = 0;
    let j = 0;

    function type() {

        if (i >= words.length) {
            i = 0;
        }

        typing.textContent = words[i].slice(0, j++);

        if (j > words[i].length) {
            i++;
            j = 0;
            setTimeout(type, 1200);
        } else {
            setTimeout(type, 100);
        }
    }

    type();
}


// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if (top < trigger) {
            section.classList.add("show");
        }

    });

});