document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to handle smooth scrolling
    function smoothScroll(target, duration) {
        var targetSection = document.querySelector(target);
        var targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Function to handle adding and removing active class
    function handleActiveClass(event) {
        navLinks.forEach(nav => {
            if (nav !== event.target) {
                nav.classList.remove('active');
            }
        });

        event.target.classList.add('active');

        // Smooth scroll to the clicked section
        var targetSection = event.target.getAttribute('href');
        smoothScroll(targetSection, 1000); // Adjust duration as needed
    }

    // Event listeners for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            handleActiveClass(e);
        });
    });

    // Scroll event listener to add scrolled class to navigation-wrap
    window.addEventListener('scroll', function() {
        const navigationWrap = document.querySelector('.navigation-wrap');
        if (window.scrollY > 50) {
            navigationWrap.classList.add('scrolled');
        } else {
            navigationWrap.classList.remove('scrolled');
        }
    });

    // Initialize Bootstrap ScrollSpy
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '.navigation-wrap',
        offset: 100
    });
});
 // Select the navbar element
 const navbar = document.querySelector('.navbar');

 // Function to toggle navbar background color on scroll
 window.addEventListener('scroll', () => {
     if (window.scrollY > 50) { // Adjust the scrollY value based on your design
         navbar.classList.add('navbar-scroll');
     } else {
         navbar.classList.remove('navbar-scroll');
     }
 });
