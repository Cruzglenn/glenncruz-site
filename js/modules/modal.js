export function initModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    if (!modal || !modalImg) {
        console.error('Modal elements not found!');
        return;
    }

    // Open modal and apply zoom effect
    document.querySelectorAll('.project-image img').forEach(image => {
        image.addEventListener('click', function () {
            modal.classList.add('show'); // Add class for zoom effect
            modal.style.display = 'flex'; // Show modal
            modalImg.src = this.src; // Set clicked image as modal content
        });
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // Ensure it's not a click on the image itself
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Function to close modal with smooth effect
    function closeModal() {
        modalImg.style.opacity = '0'; // Optional: smooth fade-out for the image
        modal.classList.remove('show'); // Remove zoom class
        setTimeout(() => {
            modal.style.display = 'none'; // Hide modal after transition
            modalImg.src = ''; // Clear the image source
        }, 300); // Match transition duration in CSS
    }
}
