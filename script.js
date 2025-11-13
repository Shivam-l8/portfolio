// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            const offsetTop = aboutSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Initialize EmailJS (you'll need to replace these with your own credentials)
// Sign up at https://www.emailjs.com/ (free tier available)
(function() {
    // Initialize EmailJS with your public key
    // Replace 'YOUR_PUBLIC_KEY' with your EmailJS public key
    if (typeof emailjs !== 'undefined') {
        emailjs.init('YOUR_PUBLIC_KEY'); // You'll get this from EmailJS dashboard
    }
})();

// Anonymous form submission handler
const anonymousForm = document.getElementById('anonymousForm');
if (anonymousForm) {
    anonymousForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const message = document.getElementById('anonymousMessage').value;
        const submitButton = anonymousForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            // Check if EmailJS is available and configured
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS not loaded. Please check the script tag.');
            }
            
            // Send email using EmailJS
            // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual values
            const response = await emailjs.send(
                'YOUR_SERVICE_ID',      // Service ID from EmailJS
                'YOUR_TEMPLATE_ID',     // Template ID from EmailJS
                {
                    to_email: 'shivam73825@gmail.com',
                    message: message,
                    from_name: 'Anonymous',
                    reply_to: 'anonymous@portfolio.com'
                },
                'YOUR_PUBLIC_KEY'       // Public key from EmailJS
            );
            
            // Success
            alert('Thank you for your anonymous message! I\'ll receive it shortly.');
            anonymousForm.reset();
            
        } catch (error) {
            console.error('Error sending message:', error);
            
            // Check if it's a configuration error
            if (error.text && error.text.includes('Invalid') || 
                typeof emailjs === 'undefined' ||
                error.message?.includes('YOUR_')) {
                alert('Email service is not configured yet. For now, your message has been logged. Please contact me directly via email: shivam73825@gmail.com');
                console.log('Anonymous message received:', message);
                console.log('To enable email sending, set up EmailJS. See EMAILJS_SETUP.md for instructions.');
            } else {
                // Other errors
                alert('There was an error sending your message. Please try emailing me directly at shivam73825@gmail.com');
                console.log('Anonymous message received:', message);
            }
            anonymousForm.reset();
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Uncomment below to enable typing effect on page load
// window.addEventListener('load', () => {
//     const nameElement = document.querySelector('.name');
//     if (nameElement) {
//         const originalText = nameElement.textContent;
//         typeWriter(nameElement, originalText, 100);
//     }
// });

// ============================================
// FOOTBALL THEME - INTERACTIVE MOUSE EFFECTS
// ============================================

// Mouse interaction effect - moves elements around cursor
let mouseX = 0;
let mouseY = 0;
let isMouseMoving = false;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMouseMoving = true;
    
    // Reset flag after a delay
    clearTimeout(window.mouseMoveTimeout);
    window.mouseMoveTimeout = setTimeout(() => {
        isMouseMoving = false;
    }, 100);
});

// Function to calculate distance and angle from mouse to element
function getDistanceAndAngle(element, mouseX, mouseY) {
    const rect = element.getBoundingClientRect();
    const elementX = rect.left + rect.width / 2;
    const elementY = rect.top + rect.height / 2;
    
    const deltaX = mouseX - elementX;
    const deltaY = mouseY - elementY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX);
    
    return { distance, angle, elementX, elementY };
}

// Apply magnetic effect to elements
function applyMagneticEffect() {
    if (!isMouseMoving) return;
    
    // Select all interactive elements
    const interactiveElements = document.querySelectorAll(
        '.project-card, .skill-category, .stat-item, .skill-tag, .btn, .contact-item, .nav-link, .social-links a'
    );
    
    interactiveElements.forEach(element => {
        // Skip if element is being hovered (let CSS handle it)
        if (element.matches(':hover')) {
            return;
        }
        
        const { distance, angle, elementX, elementY } = getDistanceAndAngle(element, mouseX, mouseY);
        
        // Only apply effect if mouse is within a certain range (200px)
        const maxDistance = 200;
        if (distance < maxDistance) {
            // Calculate movement strength (stronger when closer)
            const strength = (1 - distance / maxDistance) * 15;
            
            // Calculate new position
            const moveX = Math.cos(angle) * strength;
            const moveY = Math.sin(angle) * strength;
            
            // Apply transform
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
            element.style.transition = 'transform 0.1s ease-out';
        } else {
            // Reset position when mouse is far
            element.style.transform = 'translate(0, 0)';
            element.style.transition = 'transform 0.3s ease-out';
        }
    });
}

// Animate on mouse move
let animationFrame;
function animate() {
    applyMagneticEffect();
    animationFrame = requestAnimationFrame(animate);
}

// Start animation loop
animate();

// Add pulse animation to football icon on hover
document.addEventListener('DOMContentLoaded', () => {
    const footballIcon = document.querySelector('.football-animation');
    if (footballIcon) {
        footballIcon.addEventListener('mouseenter', () => {
            footballIcon.style.animation = 'rotateFootball 0.5s ease-in-out infinite, bounceFootball 0.3s ease-in-out infinite';
        });
        
        footballIcon.addEventListener('mouseleave', () => {
            footballIcon.style.animation = 'rotateFootball 3s ease-in-out infinite, bounceFootball 2s ease-in-out infinite';
        });
    }
    
    // Add entrance animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroDescription) {
        heroDescription.style.opacity = '0';
        heroDescription.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            heroDescription.style.transition = 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s';
            heroDescription.style.opacity = '1';
            heroDescription.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            heroButtons.style.transition = 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s';
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 400);
    }
});

// Add ripple effect on button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

