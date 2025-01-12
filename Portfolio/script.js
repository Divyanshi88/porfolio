// AOS Initialization for smooth animations
AOS.init({
    offset: 200, // Start animation when element is 200px away from the top
    duration: 800, // Animation duration
    easing: 'ease-in-out',
    delay: 100, // Delay before animation starts
});

// Project Filtering Logic
function filterProjects(category) {
    const allProjects = document.querySelectorAll('.project-item');
    allProjects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Form Submission (mockup)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
});

// Swiper Initialization for Project Carousel (with smooth transitions)
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'fade', // Smooth fade effect
    autoplay: {
        delay: 5000, // Automatically change project slides every 5 seconds
        disableOnInteraction: false, // Keep autoplay running even after interaction
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop - 50, // Adjust for fixed header
            behavior: 'smooth' // Smooth scroll behavior
        });
    });
});

// Scroll Animation for Hero Section (optional for adding effects as you scroll down)
document.addEventListener('scroll', function() {
    const heroSection = document.getElementById('hero');
    if (window.scrollY > heroSection.offsetHeight) {
        heroSection.classList.add('scrolled'); // Adds a class to animate the hero section on scroll
    } else {
        heroSection.classList.remove('scrolled');
    }
});

// Optional: Scroll to top button (to make it more user-friendly for one-page scroll)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

// Show button when scrolled down and go back to top
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block'; // Show button after 300px scroll
    } else {
        scrollToTopBtn.style.display = 'none'; // Hide button if at the top
    }
});
