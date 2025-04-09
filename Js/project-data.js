/**
 * Project Data
 * Contains information about all projects displayed on the portfolio
 * 
 * INSTRUCTIONS:
 * 1. Replace these example projects with your own
 * 2. Each project should have a unique ID that matches the data-project attribute in your HTML
 * 3. For each project, you can customize:
 *    - title: The name of your project
 *    - subtitle: A short description or tagline
 *    - description: Detailed information about the project (supports HTML)
 *    - images: Array of image paths for the gallery
 *    - videos: Array of video objects with title and URL
 *    - details: Array of key information as title/content pairs
 *    - links: Array of buttons to add to the project modal
 */

// Helper function to properly format YouTube URLs for embedding
function getYouTubeEmbedUrl(url) {
    if (!url) return '';
    
    // Extract video ID from various YouTube URL formats
    let videoId = '';
    
    if (url.includes('youtube.com/watch')) {
        videoId = new URL(url).searchParams.get('v');
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('youtube.com/embed/')[1].split('?')[0];
    }
    
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Return original URL if no pattern matched
    return url;
}

// Project Data Object - Replace with your own projects
const projectData = {
    // Featured Games Section - Example projects
    'game1': {
        title: 'EXAMPLE: Pixel Dungeon',
        subtitle: 'A Roguelike Dungeon Crawler',
        description: `
            <p>This is an example project. Replace with details about your game.</p>
            <p>In this section, you can describe:</p>
            <ul>
                <li>The game concept and story</li>
                <li>Key gameplay mechanics</li>
                <li>Technical challenges you solved</li>
                <li>Your specific contributions to the project</li>
            </ul>
            <p>You can include multiple paragraphs and HTML formatting.</p>
        `,
        images: [
            'images/project1.jpg',
            // Add more image paths here
        ],
        videos: [
            {
                title: 'Gameplay Trailer',
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with your video
            }
        ],
        details: [
            {
                title: 'TEAM SIZE',
                content: '3 People'
            },
            {
                title: 'DEVELOPMENT TIME',
                content: '16 Weeks'
            },
            {
                title: 'ENGINE',
                content: 'Unity, C#'
            },
            {
                title: 'PLATFORM',
                content: 'PC, Mobile'
            },
            {
                title: 'ROLE',
                content: 'Lead Developer'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: '#'
            },
            {
                text: 'VIEW SOURCE',
                url: '#'
            }
        ]
    },
    
    // Technical Projects Section - Example project
    'pcg-project': {
        title: 'EXAMPLE: Procedural Generation System',
        subtitle: 'Advanced Algorithm Implementation',
        description: `
            <p>This is an example technical project. Replace with details about your own work.</p>
            <p>Here you can describe the technical aspects of your project:</p>
            <ul>
                <li>The problem you were solving</li>
                <li>The approach you took</li>
                <li>Algorithms and techniques you implemented</li>
                <li>Results and what you learned</li>
            </ul>
        `,
        images: [
            'images/tech1.jpg',
            // Add more image paths
        ],
        videos: [],
        details: [
            {
                title: 'TECHNOLOGIES',
                content: 'C#, Unity'
            },
            {
                title: 'ALGORITHMS',
                content: 'Perlin Noise, BSP Trees'
            },
            {
                title: 'DEVELOPMENT TIME',
                content: '8 Weeks'
            }
        ],
        links: [
            {
                text: 'VIEW CODE',
                url: '#'
            },
            {
                text: 'DEMO',
                url: '#'
            }
        ]
    },
    
    // Game Jam Section - Example project
    'jam1': {
        title: 'EXAMPLE: Game Jam Project',
        subtitle: '48-Hour Challenge',
        description: `
            <p>This is an example game jam project. Replace with details about your own jam submissions.</p>
            <p>Game jams are great to showcase your ability to work under pressure and create something playable in a short time.</p>
            <p>Describe the theme of the jam, your interpretation, and how you implemented it in the available time.</p>
        `,
        images: [
            'images/jam1.jpg',
            // Add more images
        ],
        videos: [],
        details: [
            {
                title: 'JAM',
                content: 'Ludum Dare 48'
            },
            {
                title: 'THEME',
                content: 'Deeper and deeper'
            },
            {
                title: 'DURATION',
                content: '48 Hours'
            },
            {
                title: 'TEAM',
                content: 'Solo'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: '#'
            }
        ]
    }
    
    // Add your own projects following the same structure
};