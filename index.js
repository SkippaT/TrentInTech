// Set the hash portion of the URL to an empty string
window.location.hash = '';

// ---------------------------------------------------------------------------------------------
//                                       SUB HEADING
// ---------------------------------------------------------------------------------------------

// Slogans for subheading
const slogans = ["Engineering Student", "Tech Hobbyist", "Circuitry Connoisseur", "Code Whisperer"]; // Add as many slogans as you want
var currentSloganIndex = 0;

function changeSlogan() {
    var sloganElement = document.getElementById("sub-heading");
    sloganElement.style.opacity = 0; // Fade out

    setTimeout(function () {
        sloganElement.innerHTML = slogans[currentSloganIndex]; // Change the slogan
        sloganElement.style.opacity = 1; // Fade in
        currentSloganIndex = (currentSloganIndex + 1) % slogans.length; // Move to the next slogan
    }, 1000); // Wait for the fade out to finish before changing the slogan
}

setInterval(changeSlogan, 4000); // Change the slogan every 4 seconds

// ---------------------------------------------------------------------------------------------
//                                       SKILLS SECTION
// ---------------------------------------------------------------------------------------------

const skillsDictionary = new Map();
skillsDictionary.set("Teamwork", "Developed through collaborative university projects and tech hackathons. I believe in the power of collective intelligence and understand the importance of working harmoniously to achieve common goals.");
skillsDictionary.set("Leadership", "Cultivated as a project lead in several university assignments. I motivate and guide my team towards our objectives, understanding that effective leadership is key to the success of any project.");
skillsDictionary.set("Communication", "Honed through group presentations and interactions during my double degree. I effectively convey complex technical concepts to diverse audiences, a crucial skill for collaboration and mutual understanding.");
skillsDictionary.set("Problem Solving", "Gained through tackling coding challenges and troubleshooting tech issues. I enjoy finding solutions to complex problems, a skill that's vital in the ever-evolving tech industry.");
skillsDictionary.set("Work Ethic", "Demonstrated through my dedication to my studies and tech projects. I believe in delivering high-quality work consistently, understanding that a strong work ethic is the foundation of professional success.");
skillsDictionary.set("Project Management", "Developed by overseeing various tech projects, from inception to completion. I effectively plan, organise, and manage resources, recognising that good project management leads to timely and successful project outcomes.");
skillsDictionary.set("Adaptability", "Cultivated by keeping up with the fast-paced tech world. I quickly learn and apply new technologies, a necessary skill in an industry that's always advancing.");
skillsDictionary.set("Organisation", "Proven by balancing my studies, tech projects, and personal interests effectively. I manage my time well, recognising that good organisation enhances productivity and reduces stress.");
skillsDictionary.set("Passion for Learning", "I have a strong passion for learning.");

document.addEventListener("DOMContentLoaded", function () {
    const skillCards = document.querySelectorAll(".skill-card");
    var expansion;
    var description;
    const expansions = document.querySelectorAll(".skills-section .expansion");
    const skillsSection = document.querySelector(".about-me-section");
    var currentExpansion = null;
    var currentSkill = null;

    skillCards.forEach(card => {
        card.addEventListener("mouseenter", event => {
            // Get the name of the skill
            const targetCard = event.currentTarget;
            const skill = targetCard.querySelector("h4").textContent;

            // Get the relevant expansion and description
            if (skill === "Teamwork" || skill === "Leadership" || skill === "Communication") {
                expansion = document.getElementById("expansion1");
                description = document.getElementById("description1");
            } else if (skill === "Problem Solving" || skill === "Work Ethic" || skill === "Project Management") {
                expansion = document.getElementById("expansion2");
                description = document.getElementById("description2");
            } else {
                expansion = document.getElementById("expansion3");
                description = document.getElementById("description3");
            }

            // Toggle the expansion if the same card is pressed twice in a row
            if (skill !== currentSkill) {
                // Apply blur to all cards except the clicked one
                skillCards.forEach(card => {
                    if (card !== targetCard) {
                        card.classList.add("blur");
                    } else {
                        card.classList.remove("blur");
                    }
                });
            }

            // Close the current expansion if it"s open
            if (currentExpansion) {
                currentExpansion.style.height = "0";
            }

            // Change height of expansion
            expansion.style.height = "100px"; // Set the height as per your requirement
            event.stopPropagation(); // Stop event propagation

            description.textContent = skillsDictionary.get(skill);

            // Update the current expansion
            currentExpansion = expansion;
            currentSkill = skill;
        });
        card.addEventListener("click", event => {
            // Get the name of the skill
            const targetCard = event.currentTarget;
            const skill = targetCard.querySelector("h4").textContent;

            // Get the relevant expansion and description
            if (skill === "Teamwork" || skill === "Leadership" || skill === "Communication") {
                expansion = document.getElementById("expansion1");
                description = document.getElementById("description1");
            } else if (skill === "Problem Solving" || skill === "Work Ethic" || skill === "Project Management") {
                expansion = document.getElementById("expansion2");
                description = document.getElementById("description2");
            } else {
                expansion = document.getElementById("expansion3");
                description = document.getElementById("description3");
            }

            // Toggle the expansion if the same card is pressed twice in a row
            if (skill !== currentSkill) {
                // Apply blur to all cards except the clicked one
                skillCards.forEach(card => {
                    if (card !== targetCard) {
                        card.classList.add("blur");
                    } else {
                        card.classList.remove("blur");
                    }
                });
            }

            // Close the current expansion if it"s open
            if (currentExpansion) {
                currentExpansion.style.height = "0";
            }

            // Change height of expansion
            expansion.style.height = "100px"; // Set the height as per your requirement
            event.stopPropagation(); // Stop event propagation

            description.textContent = skillsDictionary.get(skill);

            // Update the current expansion
            currentExpansion = expansion;
            currentSkill = skill;
        });

        // Clse the expansion area when the mouse leaves the card
        card.addEventListener("mouseleave", event => {
            // Reset height of expansion
            expansions.forEach(expansion => {
                expansion.style.height = "0"; // Set height to 0
            });
            // Remove blur from all cards
            skillCards.forEach(card => {
                card.classList.remove("blur");
            });
            currentExpansion = null; // Reset currentExpansion
            currentSkill = null;
        });
    });

    skillsSection.addEventListener("click", function () {
        // Reset height of expansion
        expansions.forEach(expansion => {
            expansion.style.height = "0"; // Set height to 0
        });
        // Remove blur from all cards
        skillCards.forEach(card => {
            card.classList.remove("blur");
        });
        currentExpansion = null; // Reset currentExpansion
        currentSkill = null;
    });
});





// ---------------------------------------------------------------------------------------------
//                                       MENU
// ---------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuButton = document.querySelector('.toggle-menu');
    const linksContainer = document.querySelector('.links');

    toggleMenuButton.addEventListener('click', () => {
        linksContainer.classList.toggle('show');
    });

    // Add event listener to window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            linksContainer.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all 'a' elements inside the div with class 'links'
    // Loop through each 'a' element and attach a click event listener
    var links = document.querySelectorAll(".nav-link").forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Your click event handling code goes here
            // For example, you can get the href attribute of the clicked link
            var href = link.getAttribute('href');

            const target = document.querySelector(this.getAttribute('href'));
            const offset = 68; // Adjust this value to your preference

            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});


// ---------------------------------------------------------------------------------------------
//                                         CAROUSELS
// ---------------------------------------------------------------------------------------------

// Set the time for the automatic sliding.
const time = 3   // In seconds

// Get the arrows and carousels
const prevArrows = document.querySelectorAll(".prev");
const nextArrows = document.querySelectorAll(".next");
const carousels = document.querySelectorAll(".carousel");

var isCarouselTranisitioning = {};  // This dictionary maintains which of the carousels are in the middle of a transition
var carouselSectionIndex = {};      // This keeps track of the section index for each carousel
var carouselDirection = {}          // This keeps track of the carousel directions
var carouselIntervaleID = {}        // This keeps track of the interval IDs for the carousels
var carouselNumberOfSections = {}   // This keeps track of how many sections each carousel has
var carouselVideoPlaying = {}       // This keeps track of if a carousel is playing a video

// Set the default parameters for each carousel
carousels.forEach(function(element) {
    isCarouselTranisitioning[element.id] = false;
    carouselSectionIndex[element.id] = 0;
    carouselDirection[element.id] = -1;    // 1 = previous;    -1 = next
    carouselIntervaleID[element.id] = 0;
    var slider = element.querySelector('.slider');
    carouselNumberOfSections[element.id] = slider.childElementCount;
    slider.style.width = slider.childElementCount*100 + "%";
    carouselVideoPlaying[element.id] = false;

    // Get all the videos in the carousel section and add a listener for when the finish
    var videos = element.querySelectorAll("video");
    videos.forEach(function(video) {
        video.addEventListener('ended', () => {
            // video.currentTime = 0;
            carouselVideoPlaying[element.id] = false;
        });
    });
});


// This function sets the selected indicator
function setIndex(carousel, index) {

    carousel.querySelector(".controls .selected").classList.remove("selected");
    carousel.querySelectorAll(".controls li")[index].classList.add("selected");
}


/**
 * 
 * The below function is for the indicators on the bottom of the sliders.
 * This function allows them to be clicked and take the user to the selected
 * slide in the carousel.
 * It is not working. :(
 * 
 */
// document.querySelectorAll(".controls li").forEach(function(indicator, ind) {
//     indicator.addEventListener("click", function() {
//         // console.log(indicator)
//         // console.log(indicator.parentElement)
//         // console.log(indicator.parentElement.parentElement)
//         // console.log(indicator.parentElement.parentElement.parentElement)
//         carousel = indicator.parentElement.parentElement.parentElement;
//         console.log("ind: " + ind);
//         carouselSectionIndex[carousel] = ind;
//         setIndex(carouselSectionIndex[carousel]);
//         indicator.classList.add("selected");
//         // Get the slider inside the carousel
//         const slid = carousel.querySelector('.slider');
//         slid.style.transform = 'translate(' + (carouselSectionIndex[carousel]) * -25 + '%)';
//     });
// });


function startShow(carousel) {
    // The show is the automatic sliding of a carousel

    // Get the slider inside the carousel
    const slider = carousel.querySelector('.slider');
    carouselIntervaleID[carousel.id] = setInterval(function() {
        if (!carouselVideoPlaying[carousel.id]) {
            // Move to the next slide in the carousel, if the end is reached, go round to the start
            carouselSectionIndex[carousel.id] = (carouselSectionIndex[carousel.id] < carouselNumberOfSections[carousel.id]-1) ? carouselSectionIndex[carousel.id] + 1 : 0;
            // Update the indicators
            setIndex(carousel, carouselSectionIndex[carousel.id]);
            // Update the direction
            if (carouselDirection[carousel.id] === 1) {
                slider.prepend(slider.lastElementChild);
                carouselDirection[carousel.id] = -1;
            }
            // Do the transform
            carousel.style.justifyContent = "flex-start";
            const translatePercentage = 100/carouselNumberOfSections[carousel.id];
            slider.style.transform = "translate(-" + translatePercentage + "%)";
        }
    }, time*1000);
}

prevArrows.forEach(function(element) {
    element.addEventListener("click", function() {
        // This is for whenever the "previous arrow" is clicked

        // Get the carousel the arrow is inside
        const carousel = element.parentElement.parentElement;
        // Get the slider inside the carousel
        const slider = carousel.querySelector('.slider');

        if (!isCarouselTranisitioning[carousel.id]) {      // Check if not currently transitioning
            isCarouselTranisitioning[carousel.id] = true;  // Set transitioning flag
            // Move to the previous slide in the carousel, loop if necessary
            carouselSectionIndex[carousel.id] = (carouselSectionIndex[carousel.id] > 0) ? carouselSectionIndex[carousel.id] - 1 : carouselNumberOfSections[carousel.id]-1;
            // Update the indicators
            setIndex(carousel, carouselSectionIndex[carousel.id]);
            // Update the direction
            if (carouselDirection[carousel.id] === -1) {
                slider.appendChild(slider.firstElementChild);
                carouselDirection[carousel.id] = 1;
            }
            // Do the transform
            carousel.style.justifyContent = "flex-end";
            const translatePercentage = 100/carouselNumberOfSections[carousel.id];
            slider.style.transform = "translate(" + translatePercentage + "%)";
            setTimeout(function() {
                isCarouselTranisitioning[carousel.id] = false; // Reset transitioning flag after transition
            }, 500);
        }
    });
});

nextArrows.forEach(function(element) {
    element.addEventListener("click", function() {
        // This is for whenever the "next arrow" is clicked
        
        // Get the carousel the arrow is inside
        const carousel = element.parentElement.parentElement;
        // Get the slider inside the carousel
        const slider = carousel.querySelector('.slider');
    

        if (!isCarouselTranisitioning[carousel.id]) {      // Check if not currently transitioning
            isCarouselTranisitioning[carousel.id] = true;  // Set transitioning flag
            // Move to the next slide in the carousel, loop if necessary
            carouselSectionIndex[carousel.id] = (carouselSectionIndex[carousel.id] < carouselNumberOfSections[carousel.id]-1) ? carouselSectionIndex[carousel.id] + 1 : 0;
            // Update the indicators
            setIndex(carousel, carouselSectionIndex[carousel.id]);
            // Update the direction
            if (carouselDirection[carousel.id] === 1) {
                slider.prepend(slider.lastElementChild);
                carouselDirection[carousel.id] = -1;
            }
            // Do the transfrom
            carousel.style.justifyContent = "flex-start";
            const translatePercentage = 100/carouselNumberOfSections[carousel.id];
            slider.style.transform = "translate(-" + translatePercentage + "%)";
            setTimeout(function() {
                isCarouselTranisitioning[carousel.id] = false; // Reset transitioning flag after transition
            }, 500);
        }
    });
});

carousels.forEach(function(element) {
    // Start the show for each carousel
    startShow(element);
    // Stop the automatic sliding when hovered over
    element.addEventListener("mouseover", function() {
        clearInterval(carouselIntervaleID[element.id]);
    });
    // Restart the automatic sliding when the mouse leaves
    element.addEventListener("mouseout", function() {
        startShow(element);
    });

    // Add a listener for the slider to update after a transition
    const slider = element.querySelector(".slider");
    slider.addEventListener("transitionend", function() {
        // Get the carousel
        const carousel = slider.parentElement
        if (carouselDirection[element.id] === -1) {
            slider.appendChild(slider.firstElementChild);
            var video = slider.querySelectorAll("section")[0].querySelector("video");
            if (video !== null) {
                // If the section is a video, play it and stop the slideshow
                if (isElementInViewport(video)) {
                    video.play();
                    carouselVideoPlaying[element.id] = true;
                }
                
            }
        } else {
            slider.prepend(slider.lastElementChild);
            var video = slider.lastElementChild.querySelector("video");
            if (video !== null) {
                // If the section is a video, play it and stop the slideshow
                if (isElementInViewport(video)) {
                    video.play();
                    carouselVideoPlaying[element.id] = true;
                }
                
            }
        }


        // Get the current face of the slider
        var face;
        if (carouselDirection[element.id] === -1) {
            face = slider.querySelectorAll("section")[0].querySelector("img, video");
        } else {
            face = slider.lastElementChild.querySelector("img, video");
        }

        // Go through each video and pause it
        slider.querySelectorAll("video").forEach(function(video) {
            if (video !== face) {
                video.pause();
                video.currentTime = 0;
                carouselVideoPlaying[element.id] = false;
            }
            if (face.nodeName === "VIDEO" && isElementInViewport(video)) {
                carouselVideoPlaying[element.id] = true;
            }
        });
    
        slider.style.transition = "none";
        slider.style.transform = "translate(0)";
        setTimeout(function() {
            slider.style.transition = "all 0.3s ease";
        });
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= -100 &&
        rect.bottom <= 75 + (window.innerHeight || document.documentElement.clientHeight)
    );
}


// ---------------------------------------------------------------------------------------------
//                                         EXPAND PROJECT
// ---------------------------------------------------------------------------------------------

// Get all the project expand buttons
var expandButtons = document.querySelectorAll(".project .expansion .expand");

// Add an event listener to each
expandButtons.forEach(function(element) {
    element.addEventListener("click", function() {
    
        var totalHeight = 35;
        var button = this;

        // Get the "expansion" section this button is in
        var expansionElement = button.parentNode;

        // Get the splitter inside the expansion
        var splitter = expansionElement.querySelector(".splitter");

        // Get the length of the splitter that is hidden
        totalHeight += splitter.offsetHeight
    
        expansionElement.style.height = totalHeight + "px";
        expansionElement.style.maxHeight = totalHeight + "px"

        // Get the project this expansion element is in
        project = expansionElement.parentNode;
        const contractButton = project.querySelector(".contract");
        
        button.style.display = "none";
        contractButton.style.display = "block";
        
        return false;
    });
});

// Get all the project contract buttons
var contractButtons = document.querySelectorAll(".project .contract");

// Add an event listener to each
contractButtons.forEach(function(element) {
    element.addEventListener("click", function() {

        var button = this;
        const height = 150;

        // Get the projec this button is in
        var project = button.parentNode;

        // Get the expansion inside the project
        var expansionElement = project.querySelector(".expansion");

        // Get the splitter inside the expansion
        var splitter = expansionElement.querySelector(".splitter");
    
        expansionElement.style.height = height + "px";
        // expansionElement.style.maxHeight = height + "px"
    
        // Get the expand button
        const expandButton = expansionElement.querySelector(".expand");
        
        button.style.display = "none";
        expandButton.style.display = "block";
        
        return false;

    })
});
