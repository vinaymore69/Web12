gsap.registerPlugin(ScrollTrigger);

const progressBar = document.querySelector('.progress-bar');

gsap.to(progressBar, {
  width: '100%',
  ease: 'none',
  scrollTrigger: {
    trigger: document.body, // Track the whole document
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    marker:true
  }
});