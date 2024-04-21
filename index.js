// Set the hash portion of the URL to an empty string
window.location.hash = '';

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


const skillsDictionary = new Map();
skillsDictionary.set("Teamwork", "Developed through collaborative university projects and tech hackathons. I believe in the power of collective intelligence and understand the importance of working harmoniously to achieve common goals.");
skillsDictionary.set("Leadership", "Cultivated as a project lead in several university assignments. I motivate and guide my team towards our objectives, understanding that effective leadership is key to the success of any project.");
skillsDictionary.set("Communication", "Honed through group presentations and interactions during my double degree. I effectively convey complex technical concepts to diverse audiences, a crucial skill for collaboration and mutual understanding.");
skillsDictionary.set("Problem Solving", "Gained through tackling coding challenges and troubleshooting tech issues. I enjoy finding solutions to complex problems, a skill that's vital in the ever-evolving tech industry.");
skillsDictionary.set("Work Ethic", "Demonstrated through my dedication to my studies and tech projects. I believe in delivering high-quality work consistently, understanding that a strong work ethic is the foundation of professional success.");
skillsDictionary.set("Project Management", "Developed by overseeing various tech projects, from inception to completion. I effectively plan, organise, and manage resources, recognising that good project management leads to timely and successful project outcomes.");
skillsDictionary.set("Adaptability", "Cultivated by keeping up with the fast-paced tech world. I quickly learn and apply new technologies, a necessary skill in an industry that's always advancing.");
skillsDictionary.set("Organisation", "Proven by balancing my studies, tech projects, and personal interests effectively. I manage my time well, recognising that good organisation enhances productivity and reduces stress.");
skillsDictionary.set("Technical Skills", "Acquired through my double degree and personal tech projects. I'm proficient in various programming languages and tech tools, skills that are essential in today's digital world.");

document.addEventListener("DOMContentLoaded", function () {
    const skillCards = document.querySelectorAll(".skill-card");
    var expansion;
    var description;
    const expansions = document.querySelectorAll(".expansion");
    const skillsSection = document.querySelector(".about-me-section");
    var currentExpansion = null;
    var currentSkill = null;

    skillCards.forEach(card => {
        card.addEventListener("click", event => {
            // Get the name of the skill
            const clickedCard = event.currentTarget;
            const skill = clickedCard.querySelector("h4").textContent;

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

            console.log("Skill: " + skill);
            console.log("Current skill: " + currentSkill);
            // Toggle the expansion if the same card is pressed twice in a row
            if (skill === currentSkill) {
                console.log("1")
                expansion.style.height = expansion.style.height === "100px" ? "0" : "100px";
                // Remove blur from all cards
                skillCards.forEach(card => {
                    card.classList.remove("blur");
                });
                return;
            } else {
                console.log("2")
                // Apply blur to all cards except the clicked one
                skillCards.forEach(card => {
                    if (card !== clickedCard) {
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
