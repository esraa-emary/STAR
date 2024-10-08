const slides = document.querySelectorAll(".menu-food div");
let slideIndex = 0;
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        showSlides(slideIndex);
        setInterval(nextslide, 3000); 
    }
}

function showSlides(index) {
    slideIndex = index % slides.length;
    slides.forEach(slide => {
        slide.classList.remove("displayslide");
    });

    for (let i = 0; i < 3; i++) {
        const slideToShow = (slideIndex + i) % slides.length;
        slides[slideToShow].classList.add("displayslide");
    }
}

function nextslide() {
    slideIndex ++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}

/////////////////////////////////////////////////////////////////

const slides2 = document.querySelectorAll(".rev div");
let slideIndex2 = 0;
document.addEventListener("DOMContentLoaded", initializeSlider2);

function initializeSlider2() {
    if (slides2.length > 0) {
        showSlides2(slideIndex2);
        setInterval(nextslide2, 3000); 
    }
}

function showSlides2(index) {
    slideIndex2 = index % slides2.length;
    slides2.forEach(slide => {
        slide.classList.remove("displayslide2");
    });

    for (let i = 0; i < 2; i++) {
        const slideToShow2 = (slideIndex2 + i) % slides2.length;
        slides2[slideToShow2].classList.add("displayslide2");
    }
}

function nextslide2() {
    slideIndex2 ++;
    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0;
    }
    showSlides2(slideIndex2);
}

document.querySelector('.navbar__toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
