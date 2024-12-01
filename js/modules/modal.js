export function initModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    if (!modal || !modalImg) {
        console.error('Modal elements not found!');
        return;
    }
 
    document.querySelectorAll('.project-image img').forEach(image => {
        image.addEventListener('click', function () {
            modal.classList.add('show'); 
            modal.style.display = 'flex'; 
            modalImg.src = this.src; 
        });
    });

    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { 
            closeModal();
        }
    });

 
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    
    function closeModal() {
        modal.classList.remove('show'); 
        setTimeout(() => {
            modal.style.display = 'none'; 
            modalImg.src = ''; 
        }, 300); 
    }
}
