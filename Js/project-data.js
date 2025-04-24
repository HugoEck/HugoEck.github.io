/**
 * Project Data
 * Contains information about all projects displayed on the portfolio
 */

// Project Data Object - Your project details
const projectData = {
    // Featured Games Section
    'game1': {
        title: 'Chained-2-Violence',
        subtitle: 'Co-op Combat Game',
        description: `
            <p>This project is a 2-player co-op game where players must work together while being physically chained to each other. I served as the group leader for this project and was primarily responsible for developing the combat and ability systems.</p>
            
            <p>Key features I implemented include:</p>
            <ul>
                <li>Real-time combat mechanics with multiple weapon types</li>
                <li>Special abilities system with cooldowns and resource management</li>
                <li>Chain physics that affect player movement and combat strategies</li>
                <li>Enemy AI behavior patterns that respond to player positioning</li>
            </ul>
            
            <p>The most challenging aspect was designing the chain mechanics to feel restrictive enough to create interesting gameplay decisions, while not frustrating players. We solved this through extensive playtesting and refining the physics parameters.</p>
        `,
        images: [
            'Images/c2v.jpg',
            // Add more screenshots here - use actual paths to your images
            // 'images/c2v-screenshot2.jpg',
            // 'images/c2v-screenshot3.jpg'
        ],
        videos: [
            // Add videos if you have them
            {
                title: 'Gameplay Demo',
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual video URL or remove if no video
            }
        ],
        details: [
            { title: "ENGINE", content: "Unity" },
            { title: "GENRE", content: "Co-op Action" },
            { title: "TEAM SIZE", content: "5 People" },
            { title: "DURATION", content: "10 Weeks" },
            { title: "MY ROLE", content: "Team Lead, Combat Programmer" }
        ],
        links: [
            { text: "PLAY DEMO", url: "#" }, // Replace with actual URL if available
            { text: "VIEW SOURCE", url: "https://github.com/HugoEck/Chained-2-Violence" } // Replace with actual GitHub URL
        ]
    },
    
    // Game 2
    'game2': {
        title: 'Game Title 2',
        subtitle: 'Brief Game Description',
        description: `
            <p>Replace this with a detailed description of your second game project. Include information about the concept, gameplay mechanics, technical challenges, and your specific contributions.</p>
            
            <p>This section supports HTML formatting, so you can use:</p>
            <ul>
                <li>Bullet points for key features</li>
                <li>Multiple paragraphs for detailed explanations</li>
                <li>Formatting like <strong>bold text</strong> for emphasis</li>
            </ul>
            
            <p>Explain what made this project unique and what you learned from working on it.</p>
        `,
        images: [
            'images/project2.jpg',
            // Add more screenshots here
        ],
        videos: [],
        details: [
            { title: "ENGINE", content: "Unity/Unreal" },
            { title: "GENRE", content: "Genre" },
            { title: "TEAM SIZE", content: "X People" },
            { title: "DURATION", content: "X Weeks" },
            { title: "MY ROLE", content: "Your Role" }
        ],
        links: [
            { text: "PLAY DEMO", url: "#" },
            { text: "VIEW SOURCE", url: "#" }
        ]
    },
    
    // Technical Projects
    'pcg-project': {
        title: 'Technical Project 1',
        subtitle: 'Advanced Technical Implementation',
        description: `
            <p>Replace this with a detailed description of your technical project. This could be a procedural generation system, custom physics engine, AI implementation, or any other technical achievement you want to showcase.</p>
            
            <p>For technical projects, focus on:</p>
            <ul>
                <li>The problem you were trying to solve</li>
                <li>Your approach and methodology</li>
                <li>Technologies and algorithms you implemented</li>
                <li>Results and performance metrics</li>
                <li>What you learned from the experience</li>
            </ul>
        `,
        images: [
            'images/tech1.jpg',
            // Add more screenshots here
        ],
        videos: [],
        details: [
            { title: "LANGUAGE", content: "C#/C++" },
            { title: "TECHNOLOGY", content: "Relevant Technologies" },
            { title: "DURATION", content: "X Weeks" },
            { title: "CHALLENGE", content: "Main Technical Challenge" }
        ],
        links: [
            { text: "VIEW CODE", url: "#" },
            { text: "DEMO", url: "#" }
        ]
    }
    
    // Add more projects as needed
};