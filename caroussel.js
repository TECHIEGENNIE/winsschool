let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showSlide(index) {
    const carouselWidth = document.querySelector('.carousel').offsetWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(${-index * carouselWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showSlide(currentIndex);
}

// Auto-slide functionality (optional)
setInterval(nextSlide, 3000); // Slide every 3 seconds





