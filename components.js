// ===================== REUSABLE COMPONENTS FOR PEACE ONLINE ACADEMY =====================
// Optimized component system for Peace Online Quran Academy

// Top Contact Bar Component
function createTopContactBar() {
  return `
    <!-- Top Contact Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="contact-info">
                <span><i class="fas fa-envelope"></i> peaceonlinequran01@gmail.com</span>
                <span><i class="fas fa-phone"></i> +92 339 6836121</span>
            </div>
            <div class="join-btn">
                <a href="#register" class="join-button">I want to Join...</a>
            </div>
        </div>
    </div>
  `;
}

// Navigation Component
function createNavigation(currentPage = '') {
  return `
    <!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <img src="PICS/logo-removebg-preview.png" alt="Peace Online Academy" class="logo-img">
                <span class="logo-text">Peace Online Quran Academy</span>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                    <li><a href="about.html" class="nav-link ${currentPage === 'about.html' ? 'active' : ''}">About</a></li>
                    <li><a href="index.html#courses" class="nav-link">Courses</a></li>
                    <li><a href="contact.html" class="nav-link ${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
                </ul>
            </nav>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
  `;
}

// Social Media Icons Component
function createSocialIcons() {
  return `
    <div class="social-footer">
        <a href="#" title="Facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://wa.me/923189037132" title="WhatsApp" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        <a href="#" title="Instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" title="YouTube" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
    </div>
  `;
}

// Footer Component
function createFooter() {
  return `
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Peace Online Quran Academy</h4>
                    <p>We are dedicated to providing quality Islamic education through online Quran learning. Our mission is to help students worldwide connect with the Holy Quran through proper recitation, understanding, and spiritual growth.</p>
                    ${createSocialIcons()}
                </div>
                
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <div class="footer-links">
                        <a href="index.html">Home</a>
                        <a href="about.html">About Us</a>
                        <a href="index.html#courses">Courses</a>
                        <a href="contact.html">Contact</a>
                        <a href="#register">Register</a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Courses</h4>
                    <div class="footer-links">
                        <a href="course-details.html">Qaida O Nazra</a>
                        <a href="course-details.html">Hifz e Quran</a>
                        <a href="course-details.html">Tafseer Course</a>
                        <a href="course-details.html">Namaz Course</a>
                        <a href="course-details.html">Arabic Grammar</a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Support</h4>
                    <div class="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">FAQs</a>
                        <a href="#">Help Center</a>
                        <a href="#">Student Portal</a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Peace Online Quran Academy. All Rights Reserved. | Designed with ❤️ for Islamic Education</p>
            </div>
        </div>
    </footer>
  `;
}

// Back to Top Button Component
function createBackToTopButton() {
  return `
    <!-- Back to Top Button -->
    <button id="back-to-top" class="back-to-top-btn" aria-label="Back to top">
        <i class="fas fa-chevron-up"></i>
    </button>
  `;
}

// WhatsApp Floating Button Component
function createWhatsAppFloatingButton() {
  return `
    <!-- WhatsApp Floating Button -->
    <a id="whatsapp-floating" class="whatsapp-floating" href="https://wa.me/923189037132" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
  `;
}

// Course Card Component
function createCourseCard(courseData) {
  return `
    <a href="course-details.html" class="course-card course-card-link">
        <div class="course-image">
            <img src="PICS/${courseData.image}" alt="${courseData.title}" />
            <div class="course-image-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="course-content">
            <h3>${courseData.title}</h3>
            <p>${courseData.description}</p>
            <div class="course-meta">
                <span class="course-duration"><i class="fas fa-clock"></i> ${courseData.duration}</span>
                <span class="course-level"><i class="fas fa-signal"></i> ${courseData.level}</span>
            </div>
            <div class="course-price">
                <span class="price">${courseData.price}</span>
                <span class="currency">PKR</span>
            </div>
        </div>
    </a>
  `;
}

// Testimonial Card Component
function createTestimonialCard(testimonialData) {
  return `
    <div class="testimonial-card">
        <div class="testimonial-content">
            <div class="quote-icon">
                <i class="fas fa-quote-left"></i>
            </div>
            <p>"${testimonialData.content}"</p>
        </div>
        <div class="testimonial-author">
            <div class="author-image">
                <img src="PICS/${testimonialData.image}" alt="${testimonialData.name}">
            </div>
            <div class="author-info">
                <h4>${testimonialData.name}</h4>
                <span>${testimonialData.position}</span>
            </div>
        </div>
    </div>
  `;
}

// Feature Card Component
function createFeatureCard(featureData) {
  return `
    <div class="feature-card">
        <div class="feature-icon">
            <i class="${featureData.icon}"></i>
        </div>
        <h3>${featureData.title}</h3>
        <p>${featureData.description}</p>
    </div>
  `;
}

// ===================== COMPONENT INITIALIZATION FUNCTIONS =====================

// Function to load components into page
function loadComponents(currentPage = '') {
  // Load top contact bar
  const topBarContainer = document.querySelector('#top-bar-container');
  if (topBarContainer) {
    topBarContainer.innerHTML = createTopContactBar();
  }

  // Load navigation
  const navContainer = document.querySelector('#nav-container');
  if (navContainer) {
    navContainer.innerHTML = createNavigation(currentPage);
    initializeNavigation();
  }

  // Load footer
  const footerContainer = document.querySelector('#footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = createFooter();
  }

  // Load back to top button
  const backToTopContainer = document.querySelector('#back-to-top-container');
  if (backToTopContainer) {
    backToTopContainer.innerHTML = createBackToTopButton();
    initializeBackToTop();
  }

  // Load WhatsApp floating button
  const whatsappContainer = document.querySelector('#whatsapp-container');
  if (whatsappContainer) {
    whatsappContainer.innerHTML = createWhatsAppFloatingButton();
    initializeWhatsAppFloating();
  }

  // Load social icons in Connect section
  const connectSocialContainer = document.querySelector('#connect-social-icons');
  if (connectSocialContainer) {
    connectSocialContainer.innerHTML = createSocialIcons();
  }
}

// ===================== NAVIGATION INITIALIZATION =====================
function initializeNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===================== BACK TO TOP INITIALIZATION =====================
function initializeBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });

    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ===================== WHATSAPP FLOATING INITIALIZATION =====================
function initializeWhatsAppFloating() {
  const whatsappButton = document.getElementById('whatsapp-floating');
  
  if (whatsappButton) {
    // Make button visible after a short delay
    setTimeout(function() {
      whatsappButton.classList.add('show');
    }, 2000);
  }
}

// ===================== UTILITY FUNCTIONS =====================

// Function to determine current page
function getCurrentPage() {
  let currentPath = window.location.pathname;
  let currentPage = '';
  
  if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/')) {
    currentPage = 'index.html';
  } else if (currentPath.includes('about') || currentPath.includes('about.html')) {
    currentPage = 'about.html';
  } else if (currentPath.includes('contact') || currentPath.includes('contact.html')) {
    currentPage = 'contact.html';
  } else if (currentPath.includes('course-details') || currentPath.includes('course-details.html')) {
    currentPage = 'course-details.html';
  } else {
    const pathParts = currentPath.split('/');
    currentPage = pathParts[pathParts.length - 1] || 'index.html';
  }
  
  return currentPage;
}

// Function to create course data
function getCourseData() {
  return [
    {
      title: "Qaida O Nazra",
      description: "Learn the basics of Quran reading with proper pronunciation and Tajweed rules.",
      image: "nazira course.jpg",
      duration: "3 Months",
      level: "Beginner",
      price: "2,500"
    },
    {
      title: "Taharat Course",
      description: "Understanding the importance of cleanliness and purity in Islam.",
      image: "thaharah course.jpg",
      duration: "1 Month",
      level: "Beginner",
      price: "1,500"
    },
    {
      title: "Tajweed Course",
      description: "Master the art of beautiful Quran recitation with proper Tajweed rules.",
      image: "thajweed course.jpg",
      duration: "6 Months",
      level: "Intermediate",
      price: "3,500"
    },
    {
      title: "Namaz Course",
      description: "Learn the correct way to perform Salah with proper postures and recitations.",
      image: "namaz course.jpg",
      duration: "2 Months",
      level: "Beginner",
      price: "2,000"
    },
    {
      title: "Hadith Course",
      description: "Study the sayings and teachings of Prophet Muhammad (PBUH).",
      image: "Quran - Copy.jpg",
      duration: "4 Months",
      level: "Intermediate",
      price: "3,000"
    },
    {
      title: "Quran with Tarjuma and Tafseer",
      description: "Deep understanding of Quran with translation and interpretation.",
      image: "tharjuma course.jpg",
      duration: "12 Months",
      level: "Advanced",
      price: "5,000"
    }
  ];
}

// Function to create testimonial data
function getTestimonialData() {
  return [
    {
      name: "Ahmed Ali",
      position: "Student",
      content: "The online Quran classes have been amazing. The teachers are very patient and knowledgeable.",
      image: "pic1.jpeg"
    },
    {
      name: "Fatima Khan",
      position: "Parent",
      content: "My children have learned so much in such a short time. Highly recommended!",
      image: "pic 2.jpeg"
    },
    {
      name: "Muhammad Hassan",
      position: "Student",
      content: "The flexible timing and quality education make this academy the best choice.",
      image: "pic 3.jpeg"
    }
  ];
}

// Function to create feature data
function getFeatureData() {
  return [
    {
      icon: "fas fa-users",
      title: "Expert Teachers",
      description: "Learn from qualified and experienced Islamic scholars"
    },
    {
      icon: "fas fa-clock",
      title: "Flexible Timing",
      description: "Choose your preferred time slots for classes"
    },
    {
      icon: "fas fa-laptop",
      title: "Online Learning",
      description: "Study from the comfort of your home"
    },
    {
      icon: "fas fa-certificate",
      title: "Certification",
      description: "Get certified upon course completion"
    }
  ];
}

// ===================== AUTO-INITIALIZATION =====================

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = getCurrentPage();
  loadComponents(currentPage);
});

// Load components immediately if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    const currentPage = getCurrentPage();
    loadComponents(currentPage);
  });
} else {
  const currentPage = getCurrentPage();
  loadComponents(currentPage);
}

// Export functions for global use
window.createCourseCard = createCourseCard;
window.createTestimonialCard = createTestimonialCard;
window.createFeatureCard = createFeatureCard;
window.getCourseData = getCourseData;
window.getTestimonialData = getTestimonialData;
window.getFeatureData = getFeatureData;
