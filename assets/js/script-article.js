const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let count = 0;

function nextSlide() {
    count++;
    if (count >= slider.children.length) {
        count = 0;
    }
    updateSlider();
}

function prevSlide() {
    count--;
    if (count < 0) {
        count = slider.children.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    const offset = -count * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

setInterval(nextSlide, 3000);