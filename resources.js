
    const text = "Resources";
    const heading = document.querySelector(".heading");
    let index = 0;

    const typingEffect = () => {
        if (index < text.length) {
            heading.textContent += text[index];
            index++;
            setTimeout(typingEffect,150);
        } else {
            // Add blinking cursor effect
            gsap.to(".heading", { 
                borderRightColor: "transparent", 
                duration: 1, 
                repeat: -1, 
                yoyo: true 
            });
        }
    };


    function showContent(language) {
        // Hide all tab contents
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => content.style.display = 'none');
      
        // Show the selected language tab content
        const selectedTab = document.getElementById(language);
        selectedTab.style.display = 'block';
      }
      


    function openMenuDrawer() {
        var menu = document.getElementById("overlay"); 
        menu.classList.add("active"); // Add the "active" class to show the overlay
        document.body.style.overflow = 'hidden'; // Disable scroll when the menu is open
    }
    
    function closeMenuDrawer() {
        var menu = document.getElementById("overlay"); 
        menu.classList.remove("active"); 
        document.body.style.overflow = ''; 
    }

    
    heading.textContent = ""; 
    typingEffect();



    function open_Book(id) {
        var BooksURL = {
            CPP: [
                "https://docs.google.com/presentation/d/1kS54MyXuHVdvOzacTgFMFdiUbnRwLcSZ/edit?usp=sharing&ouid=104515354741511227667&rtpof=true&sd=true",
                "https://drive.google.com/file/d/1yDctQsgHSwR8RKsRLesNs2u-ikEhnmi2/view?usp=sharing"
            ],
            Python: [
                "https://drive.google.com/file/d/1yDctQsgHSwR8RKsRLesNs2u-ikEhnmi2/view?usp=sharing",
                "https://drive.google.com/file/d/1yDctQsgHSwR8RKsRLesNs2u-ikEhnmi2/view?usp=sharing"
            ]
        };
    
        const [topic, chapter] = id.split("_"); 
    
        if (BooksURL[topic]) {
            const chapterIndex = parseInt(chapter) - 1; 
    
            if (BooksURL[topic][chapterIndex]) {
                
                window.open(BooksURL[topic][chapterIndex], "_blank");
            } else {
                console.error("Invalid chapter number: " + chapter);
            }
        } else {
            console.error("Invalid topic: " + topic);
        }
    }
    
    var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });

    