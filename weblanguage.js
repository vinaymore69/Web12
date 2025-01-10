// let userCountry;
// let userLanguage;

// // Get the user's preferred language from the browser
// const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
// userLanguage = browserLanguages[0]; // Use the first preferred language

// // Mapping of countries to languages in multiple languages
// const languageMap = {
//   'China': {
//     'en': 'Mandarin',
//     'es': 'Mandarín',
//     'hi': 'मंदारिन',
//     // Add other languages as needed
//   },
//   'India': {
//     'en': ['Hindi', 'Marathi', 'English'],
//     'es': ['Hindi', 'Maratí', 'Inglés'],
//     'hi': ['हिंदी', 'मराठी', 'अंग्रेजी'],
//     // Add other languages as needed
//   },
//   // Add more countries and languages as needed
// };

// fetch('http://ip-api.com/json/')
//   .then(response => response.json())
//   .then(data => {
//     userCountry = data.country; // Store the country in the variable
//     console.log(`Detected country: ${userCountry}`);

//     // Get the language code (e.g., 'en', 'es', 'hi')
//     const langCode = userLanguage.split('-')[0]; // Extract primary language code

//     // Get the languages for the detected country in the user's preferred language
//     const languages = languageMap[userCountry] ? languageMap[userCountry][langCode] : ['English']; // Default to English
//     console.log(`Detected language(s) for ${userCountry} in ${userLanguage}:`, languages);
//   })
//   .catch(error => console.error('Error fetching geolocation:', error));


//   document.getElementById("Website-language").innerHTML=userLanguage;
