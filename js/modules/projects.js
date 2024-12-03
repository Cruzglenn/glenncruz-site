export function initProjectLinks() {
    const viewLiveButtons = document.querySelectorAll('.project-links .button');
    
    viewLiveButtons.forEach(button => {
        if (button.textContent.trim() === 'View Live') {
            button.addEventListener('click', async (e) => {
                e.preventDefault();
                const loaderOverlay = document.querySelector('.loader-overlay');
                
                // Show loader
                loaderOverlay.classList.remove('hidden');
                
                try {
                    // Get the href from the button
                    const href = button.getAttribute('href');
                    
                    // Small delay to show loading state
                    await new Promise(resolve => setTimeout(resolve, 500));
                    
                    // Navigate to the project
                    window.location.href = href;
                } catch (error) {
                    console.error('Error loading project:', error);
                } finally {
                    // Hide loader if navigation fails
                    loaderOverlay.classList.add('hidden');
                }
            });
        }
    });
}