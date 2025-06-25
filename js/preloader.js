window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        preloader.style.opacity = '0';
        
        // After the fade-out transition, set display to none and restore body scroll
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500); // Must match the transition duration in preloader.css
    } else {
        // If preloader isn't found, ensure body scroll is enabled
        document.body.style.overflow = 'auto';
    }
}); 