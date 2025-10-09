// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('#name').value;
            const fatherName = this.querySelector('#fatherName').value;
            const dateOfBirth = this.querySelector('#dateOfBirth').value;
            const country = this.querySelector('#country').value;
            const teacherGender = this.querySelector('#teacherGender').value;
            const teacherLanguage = this.querySelector('#teacherLanguage').value;
            const timing = this.querySelector('#timing').value;
            const skypeZoom = this.querySelector('#skypeZoom').value;
            const email = this.querySelector('#email').value;
            const course = this.querySelector('#course').value;
            const message = this.querySelector('#message').value;
            
            // Simple validation
            if (!name || !fatherName || !dateOfBirth || !country || !teacherGender || !teacherLanguage || !timing || !skypeZoom || !email || !course) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Submit form to backend
            const submitButton = this.querySelector('button');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting Registration...';
            submitButton.disabled = true;
            
            // Send data to backend
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    fatherName,
                    dateOfBirth,
                    country,
                    teacherGender,
                    teacherLanguage,
                    timing,
                    skypeZoom,
                    email,
                    course,
                    message
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Registration submitted successfully! We will contact you soon to confirm your enrollment.');
                    this.reset();
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to submit registration. Please try again later.');
            })
            .finally(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            });
        });
    }
});

// Newsletter Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            // Simulate newsletter signup
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Signing Up...';
            button.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
                button.textContent = originalText;
                button.disabled = false;
            }, 1500);
        });
    }
});

// Course Selection in Discount Section
document.addEventListener('DOMContentLoaded', function() {
    const courseSelect = document.getElementById('course-select');
    const joinNowBtn = document.querySelector('.join-now-btn');
    
    if (courseSelect && joinNowBtn) {
        joinNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (!courseSelect.value) {
                alert('Please select a course first.');
                return;
            }
            
            const selectedCourse = courseSelect.options[courseSelect.selectedIndex].text;
            alert(`You selected: ${selectedCourse}\nRedirecting to registration...`);
            
            // Scroll to registration section
            document.querySelector('#register').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Course Card Interactions - Links work normally, no JavaScript interference needed

// Category Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            alert(`Viewing courses in ${categoryName} category.`);
        });
    });
});

// Social Media Links
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        // Skip WhatsApp links as they have proper href
        if (link.href.includes('wa.me')) {
            return;
        }
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent.trim();
            alert(`Opening ${platform}...`);
        });
    });
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .course-card, .category-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'white';
        header.style.backdropFilter = 'none';
    }
});

// Join Button in Top Bar
document.addEventListener('DOMContentLoaded', function() {
    const topJoinBtn = document.querySelector('.top-bar .join-button');
    
    if (topJoinBtn) {
        topJoinBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Welcome! You want to join our academy. Redirecting to registration...');
            
            // Scroll to registration section
            document.querySelector('#register').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// CTA Button in Hero
document.addEventListener('DOMContentLoaded', function() {
    const heroCtaBtn = document.querySelector('.hero .cta-button');
    
    if (heroCtaBtn) {
        heroCtaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Welcome to our Qaida O Nazra Course! Redirecting to courses...');
            
            // Scroll to courses section
            document.querySelector('#courses').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// View All Courses Button
document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.querySelector('.view-all-btn');
    
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Showing all available courses...');
            
            // You can expand the courses grid or show more courses here
            const coursesGrid = document.querySelector('.courses-grid');
            if (coursesGrid) {
                coursesGrid.style.maxHeight = 'none';
                coursesGrid.style.overflow = 'visible';
            }
        });
    }
});

// Add loading animation for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Remove loading class after page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 500);
    });
});

// Add smooth transitions for better user experience
document.addEventListener('DOMContentLoaded', function() {
    // Add transition styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .loading * {
            transition: all 0.3s ease !important;
        }
        
        .nav-links.active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            padding: 20px;
            z-index: 1000;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    `;
    document.head.appendChild(style);
});
