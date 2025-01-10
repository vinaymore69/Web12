let lastTouchEnd = 0;

document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault(); // Prevent zoom out on double-tap
    }
    lastTouchEnd = now;
}, false);

window.addEventListener('gesturestart', function(event) {
    // Prevent zooming out by stopping the gesture event
    if (event.scale < 1) {
        event.preventDefault();
    }
}, { passive: false });






// // Run updateSelectionStyle on page load and window resize
// document.addEventListener('DOMContentLoaded', updateSelectionStyle);
// window.addEventListener('resize', updateSelectionStyle);



// // Hide and show header on scroll
// let lastScrollTop = 0;
// const header = document.querySelector('.header');

// if (header) { // Ensure the header element exists
//     window.addEventListener('scroll', function () {
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         if (scrollTop > lastScrollTop) {
//             // Scroll Down - Hide header
//             header.style.top = '-95px'; // Move it off screen
//         } else {
//             // Scroll Up - Show header
//             header.style.top = '0'; // Move it back to the top
//         }

//         lastScrollTop = scrollTop;
//     });
// } else {
//     console.error('Header element not found');
// }






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

    




// var loader = document.getElementById("pre-loader");
// window.addEventListener("load",function(){
//     // loader.style.display='none';
// })




// Array of predefined colors with 20 colors wich are suitable for white text and pastel light colors
const colors = [
  '#FFC0CB', // Pink
  '#FFA07A', // Light Salmon
  '#FFD700', // Gold
  '#FF6347', // Tomato
  '#FF4500', // OrangeRed
  '#FF8C00', // Dark Orange
  '#FF69B4', // Hot Pink
  '#FF1493', // Deep Pink
  '#FF00FF', // Fuchsia
  '#FF00FF', // Magenta
  '#FF0000', // Red
  '#DC143C', // Crimson
  '#DB7093', // PaleVioletRed
  '#DA70D6', // Orchid
  '#BA55D3', // MediumOrchid
  '#9932CC', // DarkOrchid
  '#9400D3', // DarkViolet
  '#8A2BE2', // BlueViolet
  '#800080', // Purple
  '#4B0082', // Indigo
];

// Function to select a random color from the array
function getRandomColorFromArray() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Select all elements with the class 'thiss'
const elements = document.querySelectorAll('.language');

// Loop through each element and add a hover effect
elements.forEach((element) => {
  element.addEventListener('mouseover', function() {
    element.style.backgroundColor = getRandomColorFromArray();
  });

  // Reset the background color when mouse leaves
  element.addEventListener('mouseout', function() {
    element.style.backgroundColor = '';  // Restore original background
  });
});



function detectZoom() {
    const zoomLevel = Math.round(window.outerWidth / window.innerWidth * 100);
    if (zoomLevel < 100) {
        document.body.style.transform = 'scale(1)';
        document.body.style.transformOrigin = '0 0';
    }
}

window.addEventListener('resize', detectZoom);
window.addEventListener('load', detectZoom);



  
// Function to play audio on hover
function playHoverSound() {
    // Create an audio object
    const audio = new Audio('hover1.mp3');
    // Play the audio
    audio.play();
}

// Select all the language div elements
const languageDivs = document.querySelectorAll('.language');

// Add hover event listeners to each language div
languageDivs.forEach((div) => {
    div.addEventListener('mouseover', playHoverSound);
});


