document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider-author");
    const prevButton = document.querySelector(".prev-author");
    const nextButton = document.querySelector(".next-author");

    let startX = 0;
    let isDragging = false;
    let sliderLeft = slider.scrollLeft;
    
    slider.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        sliderLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    slider.addEventListener("mouseup", () => {
        isDragging = false;
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = sliderLeft - walk;
    });

    slider.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].clientX - slider.getBoundingClientRect().left;
        sliderLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchend", () => {
        isDragging = false;
    });

    slider.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX - slider.getBoundingClientRect().left;
        const walk = (x - startX) * 2;
        slider.scrollLeft = sliderLeft - walk;
    });

    nextButton.addEventListener("click", function () {
        slider.scrollLeft += 404;
    });

    prevButton.addEventListener("click", function () {
        slider.scrollLeft -= 404;
    });
});
