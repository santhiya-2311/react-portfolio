// Typing animation (optional control)
document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.querySelector(".typing");

    if (typingText) {
        const text = typingText.innerText;
        typingText.innerHTML = "";

        let i = 0;

        function typeEffect() {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeEffect, 50);
            }
        }

        typeEffect();
    }

});

// Smooth scroll navigation
document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });

});