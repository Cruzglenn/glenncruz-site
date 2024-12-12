// Enhanced slide-in animation using Intersection Observer
export function initSlideIn() {
    const slideElements = document.querySelectorAll('[data-slide]');
    
    const options = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    slideElements.forEach(element => {
        observer.observe(element);
    });
}