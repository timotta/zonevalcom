/* Basic mobile navigation toggle */
const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        // Simple toggle: Add/remove a class to the nav to show/hide it.
        // CSS would need to handle the actual display logic based on this class.
        nav.classList.toggle('nav-visible'); 
        // You might want to change the toggle icon (e.g., hamburger to X)
        if (nav.classList.contains('nav-visible')) {
            navToggle.setAttribute('aria-expanded', 'true');
            navToggle.innerHTML = '✕'; // Change to 'X' icon
        } else {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.innerHTML = '☰'; // Change back to hamburger
        }
    });
}

// Add styles in style.css for .nav-visible if implementing the toggle fully
