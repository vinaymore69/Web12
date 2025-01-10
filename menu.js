

function openMenuDrawer() {
    var menu = document.getElementById("overlay"); 
    menu.classList.add("active"); // Add the "active" class to show the overlay
    document.body.style.overflow = 'hidden'; // Disable scroll when the menu is open
}

function closeMenuDrawer() {
    var menu = document.getElementById("overlay"); 
    menu.classList.remove("active"); // Remove the "active" class to hide the overlay
    document.body.style.overflow = ''; // Re-enable scroll when the menu is closed
}


// Hide and show header on scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');

if (header) { // Ensure the header element exists
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll Down - Hide header
            header.style.top = '-95px'; // Move it off screen
        } else {
            // Scroll Up - Show header
            header.style.top = '0'; // Move it back to the top
        }

        lastScrollTop = scrollTop;
    });
} else {
    console.error('Header element not found');
}

