var footer_code = `<div class="top-footer-content">
    <div class="footer-content2">
        <div class="footer-links-heading">
            <h3>Quick Links</h3>
        </div>
        <div class="footer-links">
            <ul>
                <a href="index.html" style="text-decoration:none;"><li>Home</li></a>
                 <a href="about.html" style="text-decoration:none;"><li>About Us</li></a>
                 <a href="contactus.html" style="text-decoration:none;"><li>Contact Us</li></a>
                 <a href="#" style="text-decoration:none;"><li>Projects</li></a>
                 <a href="resources.html" style="text-decoration:none;"><li>Resources</li></a>
            </ul>
        </div>
    </div>
    <div class="footer-content3">
        <div class="footer-Others-heading">
            <h3>Explore</h3>
        </div>
        <div class="footer-others">
            <ul>
              <a href="privacypolicy.html" style="text-decoration:none;"><li>Privacy Policy</li></a>
                
                <a href="faq.html" style="text-decoration:none;"><li >FAQs</li></a>
                <li>Gallery</li>
            </ul>
        </div>
    </div>
    <div class="footer-content4">
        <div class="footer-Others-heading">
            <h3>Connect</h3>
        </div>
        <h4>Follow Us</h4>
        <div class="footer-social-icons">
            <i class="fa-brands fa-instagram fa-lg"></i>
            <i class="fa-brands fa-twitter fa-lg"></i>
            <i class="fa-brands fa-youtube fa-lg"></i>
            <i class="fa-brands fa-linkedin-in fa-lg"></i>
        </div>
    </div>
</div>
<div class="bottom-footer-content">
    <div class="rights">
        <h5>© 2024 All Rights Reserved</h5>
    </div>
   <div class="Website-language">
       <h5>English</h5>
    </div> 
</div>
`;
var footer= document.getElementById("this-footer");

//solution: check if the element exists before setting the innerHTML
if(footer){
    footer.innerHTML=footer_code;
}
else{
    console.error('Footer element not found');
}

// // Select all elements with the class 'thiss'
// const elements = document.querySelectorAll('.language');



// document.addEventListener("DOMContentLoaded", () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         const userLanguage = navigator.language || navigator.userLanguage; // For older browsers

//         // You can use a simple method to get country from latitude and longitude
//         fetch(
//           `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&key=YOUR_API_KEY`
//         )
//           .then((response) => response.json())
//           .then((data) => {
//             const country = data.countryName || "Unknown Location";
//             const languageDisplay = `${userLanguage}, ${country}`;

//             // Update the <h5> element with the user's language and location
//             const languageElement = document.querySelector(
//               ".Website-language h5"
//             );
//             languageElement.textContent = ` ${languageDisplay}`;
//           })
//           .catch((error) => {
//             console.error("Error fetching location data:", error);
//           });
//       },
//       (error) => {
//         console.error("Error getting location:", error);
//       }
//     );
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }
// });




