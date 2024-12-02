// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
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

// Intersection Observer for button animations
const buttonObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class when in view
            entry.target.classList.remove('hidden'); // Remove hidden class
        } else {
            // Optional: Uncomment below to reset when out of view
            // entry.target.classList.remove('visible');
            // entry.target.classList.add('hidden');
        }
    });
}, {
    threshold: 0.1
});

// Observe all buttons with the "button" class
document.querySelectorAll('.button').forEach(button => {
    button.classList.add('hidden'); // Add hidden class initially
    buttonObserver.observe(button);
});
