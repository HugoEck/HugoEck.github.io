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
            <br>
            <h3>My Part</h3>
            <p>
                I developed a modular and extensible ability system using a clean interface-based architecture that follows the Command Pattern, allowing for:
            </p>
            <ul style="margin-left: 20px; padding-left: 20px;">
                <li>Decoupling ability logic from player controllers</li>
                <li>Easy implementation of new abilities without modifying existing code</li>
                <li>Runtime ability swapping and combination</li>
            </ul>
            
            <p>At the core of the system is the IAbility interface that provides a consistent contract:</p>
            
            <pre><code>public interface IAbility
{
    public void UseAbility();
}</code></pre>
            
            <p>This simple yet powerful approach ensures all abilities can be triggered through a consistent API while allowing for unique implementations.</p>
            
            <p>The system includes various ability types (Cone, Projectile, Shield, and Swing), each implementing the IAbility interface while providing unique gameplay mechanics. Rather than creating a monolithic ability controller, each ability is encapsulated in its own class, promoting:</p>
            <ul style="margin-left: 20px; padding-left: 20px;">
                <li>Single Responsibility: Each ability handles only its specific behavior</li>
                <li>Extensibility: New abilities can be added without modifying existing code</li>
                <li>Configurability: Designer-friendly parameters exposed via Unity's Inspector</li>
                <li>Reusability: Core ability components can be mixed and matched for new effects</li>
            </ul>

            <p><strong>Physics Integration</strong></p>
            <p>The ability system leverages Unity's physics engine for gameplay mechanics:</p>
            <ul style="margin-left: 20px; padding-left: 20px;">
                <li>Spatial awareness through physics raycasting and overlap detection</li>
                <li>Layer-based filtering for targeted ability effects</li>
                <li>Physics-based movement and collision handling</li>
            </ul>

            <p><strong>Cooperative Mechanics</strong></p>
            <p>The system supports the game's unique cooperative gameplay through abilities that:</p>
            <ul style="margin-left: 20px; padding-left: 20px;">
                <li>React to the dynamic chain connecting players</li>
                <li>Allow players to affect each other's positioning and protection</li>
                <li>Create emergent gameplay through combined ability effects</li>
            </ul>

            <p><strong>Developer Experience</strong></p>
            <p>The system includes tools that enhance development efficiency:</p>
            <ul style="margin-left: 20px; padding-left: 20px;">
                <li>Real-time visual debugging through custom Gizmos</li>
                <li>Extensive parameter customization via Inspector</li>
                <li>Clear entry points for extending and modifying abilities</li>
            </ul>

            <p>The ability system was developed using an iterative approach:</p>
            <ol style="margin-left: 20px; padding-left: 20px;">
                <li>Core interface design to establish the foundation</li>
                <li>Implementation of basic ability prototypes</li>
                <li>Testing and refinement of physics interactions</li>
                <li>Integration with damage systems and enemy behaviors</li>
                <li>Visual polish and effect implementation</li>
            </ol>

            <p><strong>Technical Challenges & Solutions</strong></p>
            
            <p><strong>Physics & Gameplay Integration</strong></p>
            <ul style="margin-left: 20px; padding-left: 20px;">
                <li>Challenge: Balancing realistic physics with responsive gameplay mechanics</li>
                <li>Solution: Created a hybrid approach using selective physics manipulation and custom movement calculations</li>
            </ul>

            <p><strong>State Management</strong></p>
            <ul style="margin-left: 20px; padding-left: 20px;">
                <li>Challenge: Maintaining consistent ability states across networked players</li>
                <li>Solution: Implemented a robust state tracking system with appropriate flags to prevent conflicting ability activations</li>
            </ul>

            <p><strong>Performance Optimization</strong></p>
            <ul style="margin-left: 20px; padding-left: 20px;">
                <li>Challenge: Ensuring ability effects remained performant even with many actors</li>
                <li>Solution: Utilized efficient physics queries and object pooling for projectiles and visual effects</li>
            </ul>

            <p>The resulting ability system provides players with diverse combat options while maintaining code quality through:</p>
            <ul style="margin-left: 20px; padding-left: 20px;">
                <li>High cohesion within each ability class</li>
                <li>Low coupling between system components</li>
                <li>Extensive configurability through Unity's Inspector</li>
                <li>Scalable architecture for adding new abilities</li>
            </ul>

            <p>This system demonstrates my approach to game systems programming with a focus on maintainable code, gameplay-driven design, and effective use of Unity's physics and rendering capabilities.</p>
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