// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize animations
    initAnimations();

    // Initialize tracking forms
    initTrackingForms();

    // Initialize shipping form
    initShippingForm();

    // Initialize booking forms
    initBookingForms();

    // Initialize contact form
    initContactForm();

    // Initialize back to top button
    initBackToTop();

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize counter animation
    initCounterAnimation();

    // Initialize map animation
    initMapAnimation();

    // Initialize FAQ accordion
    initFaqAccordion();

    // Initialize testimonial slider
    initTestimonialSlider();

    // Initialize team hover effects
    initTeamHoverEffects();

    // Initialize newsletter form
    initNewsletterForm();
});

// Initialize animations using anime.js
function initAnimations() {
    // Hero section animations
    anime({
        targets: '.hero-section h1, .hero-section p, .hero-section .btn',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(200, {start: 300}),
        easing: 'easeOutQuad',
        duration: 800
    });

    // Hero image animation
    anime({
        targets: '.hero-image-container',
        opacity: [0, 1],
        translateX: [100, 0],
        easing: 'easeOutQuad',
        duration: 1000,
        delay: 500
    });

    // Floating cards animation
    anime({
        targets: '.floating-card',
        translateY: [-20, 0],
        opacity: [0, 1],
        delay: anime.stagger(200, {start: 1000}),
        easing: 'easeOutQuad',
        duration: 800,
        complete: function () {
            // Add continuous floating animation
            anime({
                targets: '.floating-card',
                translateY: [0, -15],
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                duration: 3000
            });
        }
    });

    // Hero shapes animation
    anime({
        targets: '.hero-shapes .shape',
        scale: [0, 1],
        opacity: [0, 0.3],
        delay: anime.stagger(200),
        easing: 'easeOutQuad',
        duration: 1500
    });

    // Service cards animation on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    easing: 'easeOutQuad',
                    duration: 800
                });
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Feature cards animation on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    easing: 'easeOutQuad',
                    duration: 800
                });
                featureObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    featureCards.forEach(card => {
        featureObserver.observe(card);
    });

    // Step items animation on scroll
    const stepItems = document.querySelectorAll('.step-item');
    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    easing: 'easeOutQuad',
                    duration: 800,
                    delay: 300 * Array.from(stepItems).indexOf(entry.target)
                });
                stepObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    stepItems.forEach(item => {
        stepObserver.observe(item);
    });

    // Booking features animation on scroll
    const bookingFeatures = document.querySelectorAll('.booking-feature-item');
    const bookingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateX: [-30, 0],
                    easing: 'easeOutQuad',
                    duration: 800,
                    delay: 200 * Array.from(bookingFeatures).indexOf(entry.target)
                });
                bookingObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    bookingFeatures.forEach(feature => {
        bookingObserver.observe(feature);
    });

    // Section titles animation on scroll
    const sectionTitles = document.querySelectorAll('.section-title, .section-subtitle');
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    easing: 'easeOutQuad',
                    duration: 800
                });
                titleObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    sectionTitles.forEach(title => {
        titleObserver.observe(title);
    });

    // Tracking card animation
    anime({
        targets: '.tracking-card',
        opacity: [0, 1],
        translateY: [30, 0],
        easing: 'easeOutQuad',
        duration: 800,
        delay: 300
    });

    // App mockup animation
    const appMockup = document.querySelector('.app-mockup-container');
    if (appMockup) {
        const appObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                anime({
                    targets: '.app-mockup',
                    opacity: [0, 1],
                    translateX: [100, 0],
                    easing: 'easeOutQuad',
                    duration: 1000
                });

                anime({
                    targets: '.app-mockup-shape',
                    opacity: [0, 0.5],
                    translateX: [50, 0],
                    easing: 'easeOutQuad',
                    duration: 1000,
                    delay: 300
                });

                anime({
                    targets: '.app-feature',
                    opacity: [0, 1],
                    translateY: [20, 0],
                    delay: anime.stagger(100),
                    easing: 'easeOutQuad',
                    duration: 600
                });

                appObserver.unobserve(entries[0].target);
            }
        }, {threshold: 0.2});

        appObserver.observe(appMockup);
    }
}

// Initialize tracking forms
function initTrackingForms() {
    const trackingForms = document.querySelectorAll('#mobile-tracking-form, #awb-tracking-form, #orderid-tracking-form, #lrn-tracking-form');

    trackingForms.forEach(form => {
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;

                // Simulate API call
                setTimeout(function () {
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-success mt-3';
                    successMessage.innerHTML = '<i class="material-icons me-2">check_circle</i> Tracking request submitted successfully!';

                    form.appendChild(successMessage);

                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;

                    // Remove success message after 5 seconds
                    setTimeout(function () {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            });
        }
    });
}

// Initialize shipping form
function initShippingForm() {
    const shippingForm = document.getElementById('shipping-form');

    if (shippingForm) {
        shippingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(function () {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-3';
                successMessage.innerHTML = '<i class="material-icons me-2">check_circle</i> Shipping request submitted successfully!';

                shippingForm.appendChild(successMessage);

                // Reset form
                shippingForm.reset();

                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Remove success message after 5 seconds
                setTimeout(function () {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        });
    }
}

// Initialize booking forms
function initBookingForms() {
    const bookingForms = document.querySelectorAll('#domestic-booking-form, #international-booking-form');

    bookingForms.forEach(form => {
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;

                // Simulate API call
                setTimeout(function () {
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-success mt-3';
                    successMessage.innerHTML = '<i class="material-icons me-2">check_circle</i> Booking request submitted successfully!';

                    form.appendChild(successMessage);

                    // Reset form
                    form.reset();

                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;

                    // Remove success message after 5 seconds
                    setTimeout(function () {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            });
        }
    });
}

// Initialize contact form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(function () {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-3';
                successMessage.innerHTML = '<i class="material-icons me-2">check_circle</i> Your message has been sent successfully! We will get back to you soon.';

                contactForm.appendChild(successMessage);

                // Reset form
                contactForm.reset();

                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Remove success message after 5 seconds
                setTimeout(function () {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        });
    }
}

// Initialize back to top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');

                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
}

// Initialize counter animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseFloat(target.textContent.replace(/,/g, ''));
                let startValue = 0;
                const duration = 2000;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const easedProgress = easeOutQuad(progress);
                    const currentValue = Math.floor(easedProgress * targetValue);

                    target.textContent = currentValue.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.textContent = targetValue.toLocaleString();
                    }
                }

                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(target);
            }
        });
    }, {threshold: 0.5});

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Easing function
    function easeOutQuad(t) {
        return t * (2 - t);
    }
}

// Initialize map animation
function initMapAnimation() {
    const mapVehicle = document.querySelector('.map-vehicle');

    if (mapVehicle) {
        anime({
            targets: '.map-vehicle',
            translateX: ['0%', '800%'],
            easing: 'linear',
            duration: 8000,
            direction: 'alternate',
            loop: true
        });

        anime({
            targets: '.map-dot',
            scale: [1, 1.3],
            opacity: [0.8, 1],
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: 1500,
            loop: true
        });
    }
}

// Initialize FAQ accordion
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-accordion .accordion-item');

    faqItems.forEach((item, index) => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => {
                    anime({
                        targets: item,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        easing: 'easeOutQuad',
                        duration: 600
                    });
                }, index * 100);
                observer.unobserve(item);
            }
        }, {threshold: 0.1});

        observer.observe(item);
    });
}

// Initialize testimonial slider
function initTestimonialSlider() {
    const testimonialSlider = document.querySelector('.testimonial-slider');

    if (testimonialSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        testimonialSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialSlider.style.cursor = 'grabbing';
            startX = e.pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });

        testimonialSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialSlider.style.cursor = 'grab';
        });

        testimonialSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialSlider.style.cursor = 'grab';
        });

        testimonialSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });

        // Set initial cursor style
        testimonialSlider.style.cursor = 'grab';

        // Animate testimonial cards on scroll
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const testimonialObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        anime({
                            targets: entry.target,
                            opacity: [0, 1],
                            translateY: [50, 0],
                            easing: 'easeOutQuad',
                            duration: 800
                        });
                    }, Array.from(testimonialCards).indexOf(entry.target) * 100);
                    testimonialObserver.unobserve(entry.target);
                }
            });
        }, {threshold: 0.1});

        testimonialCards.forEach(card => {
            testimonialObserver.observe(card);
        });
    }
}

// Initialize team hover effects
function initTeamHoverEffects() {
    const teamCards = document.querySelectorAll('.team-card');

    teamCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => {
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        translateY: [50, 0],
                        easing: 'easeOutQuad',
                        duration: 800
                    });
                }, index * 200);
                observer.unobserve(card);
            }
        }, {threshold: 0.1});

        observer.observe(card);
    });
}

// Initialize newsletter form
function initNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;

                // Simulate API call
                setTimeout(function () {
                    // Create success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-success mt-3';
                    successMessage.innerHTML = '<i class="material-icons me-2">check_circle</i> Thank you for subscribing to our newsletter!';

                    // Add success message after the form
                    form.parentNode.insertBefore(successMessage, form.nextSibling);

                    // Reset form
                    form.reset();

                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;

                    // Remove success message after 5 seconds
                    setTimeout(function () {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            });
        }
    });
}

// Add navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Add hover effects to various elements
document.addEventListener('mouseover', function (e) {
    // Service icons hover effect
    if (e.target.closest('.service-icon')) {
        anime({
            targets: e.target.closest('.service-icon'),
            scale: [1, 1.1],
            rotate: [0, 5],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }

    // Feature icons hover effect
    if (e.target.closest('.feature-card-icon')) {
        anime({
            targets: e.target.closest('.feature-card-icon'),
            scale: [1, 1.1],
            rotate: [0, 10],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }

    // Step icons hover effect
    if (e.target.closest('.step-icon')) {
        anime({
            targets: e.target.closest('.step-icon'),
            scale: [1, 1.1],
            rotate: [0, 10],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }
});

document.addEventListener('mouseout', function (e) {
    // Service icons hover out effect
    if (e.target.closest('.service-icon')) {
        anime({
            targets: e.target.closest('.service-icon'),
            scale: [1.1, 1],
            rotate: [5, 0],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }

    // Feature icons hover out effect
    if (e.target.closest('.feature-card-icon')) {
        anime({
            targets: e.target.closest('.feature-card-icon'),
            scale: [1.1, 1],
            rotate: [10, 0],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }

    // Step icons hover out effect
    if (e.target.closest('.step-icon')) {
        anime({
            targets: e.target.closest('.step-icon'),
            scale: [1.1, 1],
            rotate: [10, 0],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }
});