// DOM Elements
const header = document.querySelector('header');
const contactForm = document.getElementById('contactForm');
const skillBars = document.querySelectorAll('.skill-progress');

// Function to add scroll event listener
function init() {
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        // Add shadow to header on scroll
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        // Animate skill bars on scroll
        animateSkillBars();
    });
    
    // Add form submit event listener
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Initialize animations
    animateSkillBars();
}

// Function to animate skill bars when they come into view
function animateSkillBars() {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
            // Get the width from the inline style (e.g., width: 85%)
            const width = bar.style.width;
            // First set width to 0
            bar.style.width = '0';
            // Then animate to the target width
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}

// Function to handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // If using a backend service or API for form submission, you would send the data here
    // For now, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for header height
                behavior: 'smooth'
            });
        }
    });
});
