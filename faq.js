const questionWrappers = document.querySelectorAll('.q-wrapper');

questionWrappers.forEach((wrapper) => {
  wrapper.addEventListener('click', showAnswer);
  wrapper.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      showAnswer(e);
    }
  });
});

function showAnswer(e) {
  questionWrappers.forEach((wrapper) => {
    if (wrapper == e.currentTarget) {
      wrapper.firstElementChild.classList.toggle('h3-active');
      wrapper.lastElementChild.classList.toggle('svg-animation');
      wrapper.nextElementSibling.classList.toggle('p-visible');
    } else {
      wrapper.firstElementChild.classList.remove('h3-active');
      wrapper.lastElementChild.classList.remove('svg-animation');
      wrapper.nextElementSibling.classList.remove('p-visible');
    }
  });
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

// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// });

// // Disable keyboard shortcuts commonly used for developer tools
// document.addEventListener('keydown', function (e) {
//   // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, and other combinations
//   if (e.key === 'F12' || 
//       (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
//       (e.ctrlKey && e.key === 'U')) {
//       e.preventDefault();
//   }
// });

// // Detect if developer tools are open
// const detectDevTools = () => {
//   const threshold = 100; // Threshold for detecting the console
//   const devToolsOpen = (
//       window.outerWidth - window.innerWidth > threshold ||
//       window.outerHeight - window.innerHeight > threshold
//   );

//   if (devToolsOpen) {
//       alert('Developer tools detected! Please close it.');
//       window.location.reload(); // Reload the page or take any action
//   }
// };

// // Run the detection periodically
// setInterval(detectDevTools, 1000);