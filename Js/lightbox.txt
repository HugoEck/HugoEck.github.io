/**
 * Lightbox Functionality
 * For viewing images in a larger format
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get lightbox elements
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    // If lightbox doesn't exist in the DOM, create it
    if (!lightbox) {
        const lightboxHTML = `
            <div class="lightbox">
                <div class="lightbox-content">
                    <button class="lightbox-close">X</button>
                    <img class="lightbox-image" src="" alt="Project Screenshot">
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        
        // Re-select elements
        const lightbox = document.querySelector('.lightbox');
        const lightboxImage = document.querySelector('.lightbox-image');
        const lightboxClose = document.querySelector('.lightbox-close');
        
        // Add event listeners
        setupLightboxListeners(lightbox, lightboxImage, lightboxClose);
    } else {
        // Add event listeners
        setupLightboxListeners(lightbox, lightboxImage, lightboxClose);
    }
});

// Set up event listeners for the lightbox
function setupLightboxListeners(lightbox, lightboxImage, lightboxClose) {
    // Open lightbox when clicking on gallery images
    document.addEventListener('click', function(e) {
        const galleryImg = e.target.closest('.gallery-item img');
        if (galleryImg) {
            lightboxImage.src = galleryImg.src;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
    
    // Close lightbox when clicking the close button
    lightboxClose.addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
}