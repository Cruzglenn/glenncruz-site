export function initModal() {
    document.querySelectorAll('.project-image img').forEach(image => {
        image.addEventListener('click', function() {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const captionText = document.getElementById('caption');
            
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.textContent = this.alt; // Use the image's alt attribute as caption
        });
    });

    document.querySelector('.modal .close').addEventListener('click', function() {
        document.getElementById('imageModal').style.display = 'none';
    });
}
