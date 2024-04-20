var slogans = ["Engineering Student", "Tech Hobbyist", "Circuitry Connoisseur"]; // Add as many slogans as you want
var currentSloganIndex = 0;

function changeSlogan() {
  var sloganElement = document.getElementById("sub-heading");
  sloganElement.style.opacity = 0; // Fade out

  setTimeout(function() {
    sloganElement.innerHTML = slogans[currentSloganIndex]; // Change the slogan
    sloganElement.style.opacity = 1; // Fade in
    currentSloganIndex = (currentSloganIndex + 1) % slogans.length; // Move to the next slogan
  }, 1000); // Wait for the fade out to finish before changing the slogan
}

setInterval(changeSlogan, 4000); // Change the slogan every 3 seconds