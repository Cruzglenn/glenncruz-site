// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active'); // Optional: Remove active class when out of view
        }
    });
}, {
    threshold: 0.1
});

// Observe all elements with slide-in class
document.querySelectorAll('.slide-in').forEach((element) => {
    observer.observe(element);
});

// Add animation delay to skills
document.querySelectorAll('.skill').forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.1}s`;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Observe all buttons with the class 'button' for mobile animations
document.querySelectorAll('.project-links .button').forEach((button) => {
    observer.observe(button);
});