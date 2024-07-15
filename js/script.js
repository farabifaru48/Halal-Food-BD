document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { // Adjust the scroll value as needed
                document.querySelector('.navigation-wrap').classList.add('scrolled');
            } else {
                document.querySelector('.navigation-wrap').classList.remove('scrolled');
            }
        });
    });

