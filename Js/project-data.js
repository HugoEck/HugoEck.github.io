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
            
            Ability System for Chained-2-Violence
Overview
For Chained-2-Violence, I developed a modular and extensible ability system using C# and Unity. The system allows players to wield a diverse range of combat abilities including projectile attacks, area-of-effect abilities, defensive shields, and unique cooperative mechanics that leverage the game's core chained-character concept.
Technical Architecture
Core Design Pattern
The system is built on a clean interface-based architecture that follows the Command Pattern, allowing for:

Decoupling ability logic from player controllers
Easy implementation of new abilities without modifying existing code
Runtime ability swapping and combination

Implementation Details
Interface Foundation
At the core of the system is the IAbility interface that provides a consistent contract:
csharppublic interface IAbility
{
    public void UseAbility();
}
This simple yet powerful approach ensures all abilities can be triggered through a consistent API while allowing for unique implementations.
System Design
The system includes various ability types (Cone, Projectile, Shield, and Swing), each implementing the IAbility interface while providing unique gameplay mechanics. Rather than creating a monolithic ability controller, each ability is encapsulated in its own class, promoting:

Single Responsibility: Each ability handles only its specific behavior
Extensibility: New abilities can be added without modifying existing code
Configurability: Designer-friendly parameters exposed via Unity's Inspector
Reusability: Core ability components can be mixed and matched for new effects

Technical Highlights
Physics Integration
The ability system leverages Unity's physics engine for gameplay mechanics:

Spatial awareness through physics raycasting and overlap detection
Layer-based filtering for targeted ability effects
Physics-based movement and collision handling

Cooperative Mechanics
The system supports the game's unique cooperative gameplay through abilities that:

React to the dynamic chain connecting players
Allow players to affect each other's positioning and protection
Create emergent gameplay through combined ability effects

Developer Experience
The system includes tools that enhance development efficiency:

Real-time visual debugging through custom Gizmos
Extensive parameter customization via Inspector
Clear entry points for extending and modifying abilities

Development Process
The ability system was developed using an iterative approach:

Core interface design to establish the foundation
Implementation of basic ability prototypes
Testing and refinement of physics interactions
Integration with damage systems and enemy behaviors
Visual polish and effect implementation

Technical Challenges & Solutions
Physics & Gameplay Integration

Challenge: Balancing realistic physics with responsive gameplay mechanics
Solution: Created a hybrid approach using selective physics manipulation and custom movement calculations

State Management

Challenge: Maintaining consistent ability states across networked players
Solution: Implemented a robust state tracking system with appropriate flags to prevent conflicting ability activations

Performance Optimization

Challenge: Ensuring ability effects remained performant even with many actors
Solution: Utilized efficient physics queries and object pooling for projectiles and visual effects

Outcome
The resulting ability system provides players with diverse combat options while maintaining code quality through:

High cohesion within each ability class
Low coupling between system components
Extensive configurability through Unity's Inspector
Scalable architecture for adding new abilities

This system demonstrates my approach to game systems programming with a focus on maintainable code, gameplay-driven design, and effective use of Unity's physics and rendering capabilities.
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