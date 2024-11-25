const backToTop = document.querySelector('.back-to-top');

// Listen for scroll events
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Show icon if scrolled down
        backToTop.classList.add('show');
    } else { // Hide icon if at the top
        backToTop.classList.remove('show');
    }
});
