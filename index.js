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
    skillsDictionary.set("Problem Solving", "asdf");
    skillsDictionary.set("Work Ethic", "adf");
    skillsDictionary.set("Project Management", "asdf");
    skillsDictionary.set("Adaptability", "asdf");
    skillsDictionary.set("Organisation", "asdf");
    skillsDictionary.set("Technical Skills", "asdf");

document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    var expansion;
    var description;
    const expansions = document.querySelectorAll(".expansion");
    const skillsSection = document.querySelector('.about-me-section');

    skillCards.forEach(card => {
        card.addEventListener('click', event => {
            // Get the name of the skill
            const skill = event.currentTarget.querySelector('h4').textContent;
            console.log(skill);

            // Get the relevant expansion and description
            if (skill === "Teamwork" || skill === "Leadership" || skill === "Communication") {
                expansion = document.getElementById('expansion1');
                description = document.getElementById("description1");
            } else {
                expansion = document.getElementById('expansion2');
                description = document.getElementById("description2");
            }

            // Change height of expansion
            expansion.style.height = '100px'; // Set the height as per your requirement
            event.stopPropagation(); // Stop event propagation

            description.textContent = skillsDictionary.get(skill);
        });
    });

    skillsSection.addEventListener('click', function() {
        // Reset height of expansion
        expansions.forEach(expansion => {
            expansion.style.height = '0'; // Set height to 0
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const skillsRow = document.querySelector('.skills-row');
    const expansion = document.querySelector('.expansion');

    // Set the initial width of the expansion to match the skills row
    expansion.style.width = skillsRow.offsetWidth + 'px';

    // Add event listener to adjust the width dynamically on window resize
    window.addEventListener('resize', function() {
        expansion.style.width = skillsRow.offsetWidth + 'px';
    });
});