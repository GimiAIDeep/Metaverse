// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Modal Handling
const watchVideoBtn = document.getElementById('watchVideoBtn');
const videoModal = document.getElementById('videoModal');
const closeVideoModal = document.getElementById('closeVideoModal');

watchVideoBtn.addEventListener('click', () => {
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeVideoModal.addEventListener('click', () => {
    videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside content
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Component Modals
const readMoreLinks = document.querySelectorAll('.read-more');
const modals = document.querySelectorAll('.modal');
const closeModalButtons = document.querySelectorAll('.close-modal');

readMoreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Form Submission Handling
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// Platform Tooltip Animation
const platforms = document.querySelectorAll('.platform');

platforms.forEach(platform => {
    platform.addEventListener('mouseenter', () => {
        const tooltip = platform.querySelector('.platform-tooltip');
        tooltip.style.bottom = '-50px';
        tooltip.style.opacity = '1';
    });
    
    platform.addEventListener('mouseleave', () => {
        const tooltip = platform.querySelector('.platform-tooltip');
        tooltip.style.bottom = '-40px';
        tooltip.style.opacity = '0';
    });
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-content, .component-card, .platform, .timeline-item, .faq-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.about-content, .component-card, .platform, .timeline-item, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);