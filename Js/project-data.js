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
                I developed a modular and extensible ability system using a clean interface-based architecture that follows the Command Pattern. This approach allows for decoupling ability logic from player controllers, easy implementation of new abilities without modifying existing code, and runtime ability swapping and combination.
            </p>
            
            <p>At the core of the system is the IAbility interface that provides a consistent contract:</p>
            
            <pre><code>public interface IAbility
{
    public void UseAbility();
}</code></pre>
            
            <p>This simple yet powerful approach ensures all abilities can be triggered through a consistent API while allowing for unique implementations.</p>
            
            <p>The system includes various ability types such as Cone, Projectile, Shield, and Swing abilities, each implementing the IAbility interface while providing unique gameplay mechanics. Rather than creating a monolithic ability controller, each ability is encapsulated in its own class. This promotes single responsibility where each ability handles only its specific behavior, extensibility allowing new abilities to be added without modifying existing code, configurability through designer-friendly parameters exposed via Unity's Inspector, and reusability where core ability components can be mixed and matched for new effects.</p>
            <br>

            <p><strong style="color: #f08f75;">Physics Integration</strong></p>
            <p>The ability system leverages Unity's physics engine for gameplay mechanics through spatial awareness using physics raycasting and overlap detection, layer-based filtering for targeted ability effects, and physics-based movement and collision handling. This integration ensures that abilities feel responsive and interact naturally with the game world.</p>
            <br>

            <p><strong style="color: #f08f75;">Cooperative Mechanics</strong></p>
            <p>The system supports the game's unique cooperative gameplay through abilities that react to the dynamic chain connecting players, allow players to affect each other's positioning and protection, and create emergent gameplay through combined ability effects. These mechanics make the chain feel like an integral part of the combat system rather than just a visual constraint.</p>
            <br>

            <p><strong style="color: #f08f75;">Developer Experience</strong></p>
            <p>To enhance development efficiency, the system includes real-time visual debugging through custom Gizmos, extensive parameter customization via Inspector, and clear entry points for extending and modifying abilities. These tools made it much easier for the team to iterate on ability designs and balance.</p>
            <br>

            <p>The ability system was developed using an iterative approach, starting with core interface design to establish the foundation, followed by implementation of basic ability prototypes, testing and refinement of physics interactions, integration with damage systems and enemy behaviors, and finally visual polish and effect implementation.</p>
            <br>

            <p><strong style="color: #f08f75;">Technical Challenges & Solutions</strong></p>
            
            <p><strong>Physics & Gameplay Integration:</strong> Balancing realistic physics with responsive gameplay mechanics was challenging, so I created a hybrid approach using selective physics manipulation and custom movement calculations to ensure abilities felt both realistic and responsive.</p>

            <p><strong>State Management:</strong> Maintaining consistent ability states across networked players required implementing a robust state tracking system with appropriate flags to prevent conflicting ability activations, ensuring smooth cooperative gameplay.</p>

            <p><strong>Performance Optimization:</strong> To ensure ability effects remained performant even with many actors on screen, I utilized efficient physics queries and object pooling for projectiles and visual effects, maintaining smooth framerates during intense combat sequences.</p>
            <br>

            <p>The resulting ability system provides players with diverse combat options while maintaining code quality through high cohesion within each ability class, low coupling between system components, extensive configurability through Unity's Inspector, and a scalable architecture for adding new abilities. This system demonstrates my approach to game systems programming with a focus on maintainable code, gameplay-driven design, and effective use of Unity's physics and rendering capabilities.</p>
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
        title: 'Procedural Content Generation Suite',
        subtitle: 'Multi-Algorithm Content Generation System',
        description: `
        <p>A comprehensive procedural generation toolkit implementing three distinct content generation systems, each showcasing different algorithmic approaches to automated content creation.</p>
        
        <br>
        <h3>Maze Generation System</h3>
        <p>Features three classic maze generation algorithms (Depth-First Search, Kruskal's, and Prim's) with an intelligent AI system that dynamically adjusts maze difficulty by randomly opening or closing dead ends. Includes configurable maze dimensions for scalable generation.</p>
        
        <br>
        <h3>Cave System Generator</h3>
        <p>Implemented a cellular automata algorithm to procedurally generate organic 2D cave systems with natural, flowing formations. The system begins with a randomly seeded grid based on configurable fill probability, then applies iterative smoothing rules over multiple generations.</p>
        
        <p>The algorithm analyzes each cell's 8-directional neighbors, applying conditional rules: walls survive with 4+ neighboring walls, while empty spaces become walls when surrounded by 5+ neighbors. This creates realistic cave-like structures through emergent behavior, with parameters for dungeon dimensions (up to 50x50), initial wall density, and iteration count for fine-tuning cave complexity.</p>
        
        <p>Features real-time visualization through Unity's tile instantiation system, automatically generating explorable cave networks with organic branching passages and natural chamber formations.</p>
        
        <br>
        <h3>3D Terrain Generation using Perlin Noise</h3>
        <p>Implements Perlin noise algorithms to create dynamic 3D landscapes with realistic height variations and natural terrain features on a procedurally generated plane.</p>
        
        <p>This project demonstrates mastery of multiple procedural generation paradigms, from graph-based algorithms to noise functions and cellular automation, showcasing the versatility and power of algorithmic content creation.</p>
    `,
        images: [
            'Images/MayzLogo.jpg',
            'Images/Kruskal.png',
            'Images/cellular_automata.png'
        ],
        videos: [],
        details: [
            { title: "LANGUAGE", content: "C# / Unity" },
            { title: "ALGORITHMS", content: "DFS, Kruskal, Prim's, Cellular Automata, Perlin Noise" },
            { title: "DURATION", content: "3 Weeks" },
            { title: "CHALLENGE", content: "Multi-Algorithm Integration & AI Difficulty Scaling" }
        ],
        links: [
            { text: "VIEW CODE", url: "#" },
            { text: "LIVE DEMO", url: "#" }
        ]
    }

    // Add more projects as needed
};