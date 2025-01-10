var pos = document.documentElement;
pos.addEventListener('mousemove', e => {
    let scrollX = window.scrollX || document.documentElement.scrollLeft;
    let scrollY = window.scrollY || document.documentElement.scrollTop;
    pos.style.setProperty('--x', e.clientX + scrollX + 'px');
    pos.style.setProperty('--y', e.clientY + scrollY + 'px');
});


// var loader = document.getElementById("pre-loader");
// window.addEventListener("load",function(){
//     loader.style.display="none";
// })

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

gsap.from("#name", {
    scrollTrigger: {
        trigger: "#name",
        scroller:'body',
        start: "top 80%", 
        
    },
    x: 20,
    opacity: 0,
    duration: 1.5,
    delay: 2 
});


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable keyboard shortcuts commonly used for developer tools
document.addEventListener('keydown', function (e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, and other combinations
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});

// Detect if developer tools are open
const detectDevTools = () => {
    const threshold = 100; // Threshold for detecting the console
    const devToolsOpen = (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
    );

    if (devToolsOpen) {
        alert('Developer tools detected! Please close it.');
        window.location.reload(); // Reload the page or take any action
    }
};

// Run the detection periodically
setInterval(detectDevTools, 1000);



// locomotive js

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main[data-scroll-container]'),
    smooth: true
});

// Scroll to the top of the page




gsap.registerPlugin(ScrollTrigger);

// Select the main container and the scrollable container
const main = document.querySelector('.main');
const scrollContainer = document.querySelector('.scroll-container');

// Set the height of the main container to match the scrollable container
gsap.set(main, { height: scrollContainer.offsetHeight });

// Create a smooth scroll effect using GSAP
gsap.to(scrollContainer, {
    y: () => -(scrollContainer.offsetHeight - window.innerHeight), // Move the container up
    ease: 'none',
    scrollTrigger: {
        trigger: main,
        start: 'top top',
        end: () => scrollContainer.offsetHeight, // End when the scroll reaches the bottom
        scrub: 1, // Smooth scroll effect
        invalidateOnRefresh: true, // Recalculate on resize
    }
});

