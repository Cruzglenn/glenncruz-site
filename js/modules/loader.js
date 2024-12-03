export function initLoader() {
    const loaderOverlay = document.querySelector('.loader-overlay');
    
    // Show loader only on initial page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loaderOverlay.classList.add('hidden');
        }, 1000);
    });
}

// Utility function to show loader for specific elements
export function showLoaderFor(element, callback) {
    const loaderOverlay = document.querySelector('.loader-overlay');
    
    element.addEventListener('click', async (e) => {
        e.preventDefault();
        loaderOverlay.classList.remove('hidden');
        
        try {
            await callback();
        } finally {
            setTimeout(() => {
                loaderOverlay.classList.add('hidden');
            }, 500);
        }
    });
}