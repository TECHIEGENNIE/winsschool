// Select all elements with the 'animate' class
const animatedElements = document.querySelectorAll('.animate');

// Function to check if an element is in the viewport
function isInViewport(element) {
   const rect = element.getBoundingClientRect();
   return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
   );
}

// Add event listener for scroll
window.addEventListener('scroll', () => {
   animatedElements.forEach(element => {
      if (isInViewport(element)) {
         element.classList.add('show');
      }
   });
});
