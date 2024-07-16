document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to handle the active class
    function handleActiveClass(event) {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        event.target.classList.add('active');
    }
    
    // Attach click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', handleActiveClass);
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { 
                document.querySelector('.navigation-wrap').classList.add('scrolled');
            } else {
                document.querySelector('.navigation-wrap').classList.remove('scrolled');
            }
        });
    });

