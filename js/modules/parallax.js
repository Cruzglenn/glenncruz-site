// Enhanced parallax scrolling effect
export function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    function updateParallax() {
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallaxSpeed || 0.5;
            const rect = element.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
    }

    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(updateParallax);
    });

    // Initial update
    updateParallax();
}