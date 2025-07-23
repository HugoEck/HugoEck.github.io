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
            <p>
                Chained-2-Violence is a cooperative combat game where players are physically chained together while fighting through waves of enemies.
                Built in Unity using C#, the game features a diverse range of combat abilities including projectile attacks, area-of-effect abilities, defensive shields, and unique cooperative mechanics that leverage the core chained-character concept.
            </p>
            <br></br>
            <h3>My Part</h3>
            <p>
                I developed a modular and extensible ability system using a clean interface-based architecture that follows the Command Pattern. At the core of the system is the IAbility interface that provides a consistent contract for all abilities, ensuring they can be triggered through a consistent API while allowing for unique implementations.
            </p>
            <p>
                The system includes various ability types (Cone, Projectile, Shield, and Swing), each implementing the IAbility interface while providing unique gameplay mechanics. Rather than creating a monolithic ability controller, each ability is encapsulated in its own class, promoting single responsibility, extensibility, configurability through Unity's Inspector, and reusability where core components can be mixed and matched for new effects.
            </p>
            <p>
                I integrated the ability system deeply with Unity's physics engine, implementing spatial awareness through physics raycasting and overlap detection, layer-based filtering for targeted ability effects, and physics-based movement and collision handling. The system supports the game's unique cooperative gameplay through abilities that react to the dynamic chain connecting players, allow players to affect each other's positioning and protection, and create emergent gameplay through combined ability effects.
            </p>
            <p>
                I also created extensive development tools including real-time visual debugging through custom Gizmos, extensive parameter customization via Inspector, and clear entry points for extending and modifying abilities. The development process was iterative, starting with core interface design, then implementing basic ability prototypes, testing and refining physics interactions, integrating with damage systems and enemy behaviors, and finally adding visual polish and effects.
            </p>
            <p>
                The biggest technical challenges included balancing realistic physics with responsive gameplay mechanics (solved with a hybrid approach using selective physics manipulation), maintaining consistent ability states across networked players (solved with robust state tracking and conflict prevention flags), and ensuring performance with many actors (solved through efficient physics queries and object pooling for projectiles and visual effects).
            </p>
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