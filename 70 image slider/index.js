// IMAGE SLIDER 

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// Initialize slider when DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {   
        showSlide(slideIndex); // Ensures the first slide is displayed
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0; // Reset to first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Go to last slide
    } else {
        slideIndex = index; // Update slide index properly
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId); // Stop auto-slide when manually clicking
    showSlide(slideIndex - 1);
    intervalId = setInterval(nextSlide, 5000); // Restart auto-slide
}

function nextSlide() {
    clearInterval(intervalId); // Stop auto-slide when manually clicking
    showSlide(slideIndex + 1);
    intervalId = setInterval(nextSlide, 5000); // Restart auto-slide
}
