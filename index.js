document.addEventListener('DOMContentLoaded', function () {
    var mixer = mixitup('.container');

    let filterButtons = document.querySelectorAll('.dish-categories button');

    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var filterValue = this.getAttribute('data-filters');
            if (filterValue === 'All') {
                mixer.filter('.mix');
            } else {
                mixer.filter(filterValue);
            }
        });
    });

    let bar = document.querySelector(".navigation .fa-bars");
    let menu = document.querySelector(".navigation ul");

    bar.addEventListener("click", function() {
        menu.classList.toggle("showmenu");
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Add click event listeners to all navigation links
    const navLinks = document.querySelectorAll('.navigation ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const sectionId = this.getAttribute('href').substring(1); // Remove #
            scrollToSection(sectionId); // Scroll to corresponding section
            menu.classList.remove("showmenu"); // Close menu on link click (for mobile)
        });
    });

    // Add click event listener to categories link when menu is expanded
    const categoriesLink = document.querySelector('.navigation .nav-button-2');
    categoriesLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('categories'); // Scroll to categories section
        menu.classList.remove("showmenu"); // Close menu on link click (for mobile)
    });

    var swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 20, // Adjusted space between images
        autoplay: {
            delay: 1200
        },
        speed: 2000,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1100: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1100: {
                slidesPerView: 4,
                spaceBetween: 100
            }
        }
    });

});
