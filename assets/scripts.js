// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    
    // Toggle aria-expanded attribute
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    
    // Change icon based on state
    const menuIcon = mobileMenuButton.querySelector('svg');
    if (!isExpanded) {
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
    } else {
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuButton.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
    });
});

// Rest of your existing scripts...

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active-nav', 'text-gray-800');
                link.classList.add('text-gray-600');
            });
            
            this.classList.add('active-nav', 'text-gray-800');
            this.classList.remove('text-gray-600');
        }
    });
});

// Mobile menu toggle (would need additional HTML for mobile menu)
// const mobileMenuButton = document.querySelector('.md\\:hidden');
// mobileMenuButton.addEventListener('click', () => {
//     // This would toggle a mobile menu (not implemented in this example)
//     console.log('Mobile menu clicked');
// });

// // Add to cart animation
// document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         // Animation effect
//         this.textContent = 'Added!';
//         this.classList.remove('bg-green-600', 'hover:bg-green-700');
//         this.classList.add('bg-green-500');
        
//         setTimeout(() => {
//             this.textContent = 'Add to Cart';
//             this.classList.remove('bg-green-500');
//             this.classList.add('bg-green-600', 'hover:bg-green-700');
//         }, 2000);
//     });
// });
