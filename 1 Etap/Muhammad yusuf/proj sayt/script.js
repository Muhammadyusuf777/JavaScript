// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Portfolio Filter
function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Update active button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter items
    portfolioItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.classList.remove('hidden');
            item.style.animation = 'none';
            setTimeout(() => {
                item.style.animation = '';
            }, 10);
        } else {
            item.classList.add('hidden');
        }
    });
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Iltimos, barcha maydonlarni to\'ldiring!');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Iltimos, to\'g\'ri email kiriting!');
            return;
        }

        // Success message
        alert('Rahmat! Xabar muvaffaqiyatli yuborildi. Tez orada siz bilan bog\'lanamiz!');

        // Reset form
        contactForm.reset();

        // In a real application, you would send this data to a server
        console.log('Form Data:', {
            name,
            email,
            subject,
            message
        });
    });
}

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                bar.style.width = bar.parentElement.parentElement.querySelector('span').textContent;
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-item').forEach(skill => {
    observer.observe(skill);
});

// Testimonial carousel (optional animation)
let testimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    testimonialCards.forEach(card => {
        card.style.opacity = '0.5';
    });

    if (testimonialIndex < testimonialCards.length) {
        testimonialCards[testimonialIndex].style.opacity = '1';
        testimonialIndex++;
        if (testimonialIndex >= testimonialCards.length) {
            testimonialIndex = 0;
        }
    }

    setTimeout(rotateTestimonials, 4000);
}

// Start testimonial rotation
rotateTestimonials();

// Initialize skill bars on load
window.addEventListener('load', () => {
    document.querySelectorAll('.skill-item').forEach(skill => {
        observer.observe(skill);
    });
});

// Add scroll reveal animation
const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .about-content');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// Counter animation for statistics
function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                const increment = finalValue / 50;
                let currentValue = 0;

                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue + '+';
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(currentValue) + '+';
                    }
                }, 30);

                statsObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.7
    });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Start counter animation on page load
window.addEventListener('load', animateCounters);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Active nav link highlight on scroll
window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add smooth animations on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Dark mode toggle (optional feature for future enhancement)
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-mode');
}

// Add ripple effect to buttons
document.querySelectorAll('.btn, .filter-btn').forEach(button => {
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
    });
});

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Optimize scroll event
window.addEventListener('scroll', debounce(() => {
    // Add any scroll-dependent logic here
}, 100));

console.log('Website loaded successfully!');