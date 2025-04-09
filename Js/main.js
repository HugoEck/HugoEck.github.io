/**
 * Main JavaScript
 * General site functionality
 */

// DOM Elements
const menuToggle = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const projectCards = document.querySelectorAll('.project-card, .featured-project-card');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle burger menu animation
    const lines = menuToggle.querySelectorAll('div');
    lines.forEach(line => line.classList.toggle('active'));
});

// Project Card Click Handlers
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Add scroll animations and other functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add animations to elements when they scroll into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-up');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.9) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial check and add scroll listener
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Skills Section Functionality
    const skillButtons = document.querySelectorAll('.skill-btn');
    const descriptionContainer = document.getElementById('skillDescriptionContainer');
    const descriptions = document.querySelectorAll('.skill-description');
    
    // Function to deactivate all elements
    function deactivateAll() {
        skillButtons.forEach(btn => btn.classList.remove('active'));
        descriptions.forEach(desc => desc.classList.remove('active'));
        descriptionContainer.classList.remove('active');
    }
    
    // Add click handlers to buttons
    skillButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent event from propagating to document
            e.stopPropagation();
            
            const skillType = this.getAttribute('data-skill');
            const description = document.getElementById(`${skillType}-description`);
            
            // If this button is already active, deactivate everything
            if (this.classList.contains('active')) {
                deactivateAll();
                return;
            }
            
            // Otherwise, activate this button and description
            deactivateAll();
            this.classList.add('active');
            description.classList.add('active');
            descriptionContainer.classList.add('active');
        });
    });
    
    // Close descriptions when clicking elsewhere
    document.addEventListener('click', function(e) {
        // If the click wasn't on a skill button or inside the description container
        if (!e.target.closest('.skill-btn') && !e.target.closest('.skill-description-container')) {
            deactivateAll();
        }
    });
});