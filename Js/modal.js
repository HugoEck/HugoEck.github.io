/**
 * Modal Functionality
 * Handles opening, closing, and populating project modals
 */

// DOM Elements
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');

// Open Project Modal
function openProjectModal(projectId) {
    // Get project data or use placeholder
    const project = projectData?.[projectId] || {
        title: "Project Details",
        subtitle: "This is a placeholder for project details",
        description: `
            <p>This is where your project description will appear. You can include:</p>
            <ul>
                <li>The concept behind your game</li>
                <li>Gameplay mechanics</li>
                <li>Your role in development</li>
                <li>Technologies used</li>
                <li>Challenges and solutions</li>
            </ul>
            <p>Replace this with your actual game information.</p>
        `,
        images: [],
        videos: [],
        details: [
            { title: "DEVELOPMENT TIME", content: "Add time period" },
            { title: "ENGINE", content: "Add game engine" },
            { title: "PLATFORM", content: "Add target platforms" },
            { title: "ROLE", content: "Add your role" }
        ],
        links: [
            { text: "PLAY GAME", url: "#" },
            { text: "VIEW SOURCE", url: "#" }
        ]
    };

    // Create gallery items HTML
    let galleryHTML = '';
    if (project.images && project.images.length > 0) {
        project.images.forEach(img => {
            galleryHTML += `
                <div class="gallery-item">
                    <img src="${img}" alt="Project Screenshot">
                </div>
            `;
        });
    } else {
        galleryHTML = `
            <div class="gallery-item">
                <img src="https://via.placeholder.com/600x400?text=Screenshot" alt="Placeholder">
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/600x400?text=Screenshot" alt="Placeholder">
            </div>
        `;
    }

    // Create video items HTML - FIXED TO HANDLE LOCAL MP4 FILES
    let videoHTML = '';
    if (project.videos && project.videos.length > 0) {
        project.videos.forEach((video, index) => {
            // Check if video is a string (file path) or object (with title/url)
            if (typeof video === 'string') {
                // Handle local MP4 files
                const videoName = video.split('/').pop().split('.')[0]; // Extract filename without extension
                const displayName = videoName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Make it readable

                videoHTML += `
                    <div class="video-item">
                        <h4>${displayName}</h4>
                        <div class="video-container">
                            <video 
                                controls 
                                preload="metadata" 
                                style="width: 100%; max-width: 800px; height: auto; border-radius: 8px;"
                                onloadstart="console.log('Video loading: ${video}')"
                                onerror="console.error('Video failed to load: ${video}'); this.parentElement.innerHTML='<div class=video-error>Video could not be loaded: ${video}</div>'"
                                oncanplay="console.log('Video ready: ${video}')">
                                <source src="${video}" type="video/mp4">
                                <p>Your browser doesn't support video playback. <a href="${video}" target="_blank">Download video</a></p>
                            </video>
                            <div class="video-debug" style="font-size: 12px; color: #666; margin-top: 5px; font-family: monospace;">
                                Path: ${video}
                            </div>
                        </div>
                    </div>
                `;
            } else if (video.url && video.title) {
                // Handle embedded videos (YouTube/Vimeo)
                videoHTML += `
                    <div class="video-item">
                        <h4>${video.title}</h4>
                        <div class="video-container">
                            <iframe 
                                width="100%" 
                                height="315" 
                                src="${video.url}" 
                                title="${video.title}"
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                `;
            }
        });
    } else {
        videoHTML = '<p>No videos available for this project.</p>';
    }

    // Create details HTML
    let detailsHTML = '';
    if (project.details && project.details.length > 0) {
        project.details.forEach(detail => {
            detailsHTML += `
                <div class="detail-item">
                    <h4>${detail.title}</h4>
                    <p>${detail.content}</p>
                </div>
            `;
        });
    }

    // Create links HTML
    let linksHTML = '';
    if (project.links && project.links.length > 0) {
        project.links.forEach(link => {
            linksHTML += `
                <a href="${link.url}" class="pixel-btn" target="_blank">${link.text}</a>
            `;
        });
    }

    // Populate modal
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <h3>${project.subtitle}</h3>
        </div>
        <div class="modal-body">
            <div class="project-description">${project.description}</div>
            
            <div class="project-media-tabs">
                <button class="media-tab active" data-tab="screenshots">SCREENSHOTS</button>
                <button class="media-tab" data-tab="videos">VIDEOS</button>
            </div>
            
            <div class="media-content active" id="screenshots-content">
                <div class="project-gallery">${galleryHTML}</div>
            </div>
            
            <div class="media-content" id="videos-content">
                <div class="project-videos">${videoHTML}</div>
            </div>
            
            <h3>PROJECT DETAILS</h3>
            <div class="project-details">${detailsHTML}</div>
            
            <h3>LINKS</h3>
            <div class="project-links">${linksHTML}</div>
        </div>
    `;

    // Show and animate modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal

    // Trigger animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Add tab switching functionality
    const tabs = document.querySelectorAll('.media-tab');
    const contents = document.querySelectorAll('.media-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding content
            const tabName = tab.getAttribute('data-tab');
            document.getElementById(`${tabName}-content`).classList.add('active');
        });
    });

    // Log debugging info for videos
    console.log('Project videos:', project.videos);

    // Test video accessibility after modal loads
    if (project.videos && project.videos.length > 0) {
        setTimeout(() => {
            project.videos.forEach(video => {
                if (typeof video === 'string') {
                    fetch(video, { method: 'HEAD' })
                        .then(response => {
                            if (response.ok) {
                                console.log(`? Video accessible: ${video}`);
                            } else {
                                console.error(`? Video not accessible: ${video} (Status: ${response.status})`);
                            }
                        })
                        .catch(error => {
                            console.error(`? Error testing video: ${video}`, error);
                        });
                }
            });
        }, 100);
    }
}

// Close Modal with animation
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');

    // Wait for animation to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }, 300); // Match this to your transition duration
});

// Same for clicking outside the modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');

        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
});