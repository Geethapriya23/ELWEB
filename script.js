const card = document.querySelectorAll(".review-card");
let current = 0;

function card() {
    card.forEach(card => {
        card.classList.remove("active");
    });

    card[current].classList.add("active");

    current++;
    if (current >= card.length) {
        current = 0;
    }
}

card();
setInterval(card, 3000);