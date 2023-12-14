// Assign a varible to the placement UI
const placementUI = document.getElementById("zappar-placement-ui");
// Assign a varible to the replacement UI
const replacementUI = document.getElementById("zappar-replacement-ui");

// Assign a varible to the Zappar instant tracking group
const instantGroup = document.getElementById("instant-group");

// Assign varibles to information icon
const earthInfoIcon = document.getElementById('earthInfoIcon');
const sunInfoIcon = document.getElementById('sunInfoIcon');
// Make our information icons invisible at first
earthInfoIcon.setAttribute("visible", "false");
sunInfoIcon.setAttribute("visible", "false");

// Assign variables to our information boxes
const sunInfo = document.getElementById('sunInfo');
const earthInfo = document.getElementById('earthInfo');

// Assign a variable to our cancel UI
const cancelUi = document.getElementById("cancelUi");

// When the user taps on the placement UI
placementUI.addEventListener("click", function() {
    // Set placement-mode to false on the instant tracker group
    instantGroup.setAttribute("zappar-instant", "placement-mode: false");

    // Hide the placement UI
    placementUI.classList.remove("visible");
    placementUI.classList.add("hidden");
    // Show the replacement UI
    replacementUI.classList.remove("hidden");
    replacementUI.classList.add("visible");

    // Make our icons visible
    earthInfoIcon.setAttribute("visible", "true");
    sunInfoIcon.setAttribute("visible", "true");
    // Add our custom components to allow the icons to be clicked/interactive
    earthInfoIcon.setAttribute("show-earth-info", "");
    sunInfoIcon.setAttribute("show-sun-info", "");
});

// When the user taps on the replacement UI
replacementUI.addEventListener("click", function() {
    // Set placement-mode to true on the instant tracker group
    instantGroup.setAttribute("zappar-instant", "placement-mode: true");

    // Make our icons invisible
    earthInfoIcon.setAttribute("visible", "false");
    sunInfoIcon.setAttribute("visible", "false");

    // Hide the replacement UI
    replacementUI.classList.remove("visible");
    replacementUI.classList.add("hidden");
    // Show the placement UI
    placementUI.classList.remove("hidden");
    placementUI.classList.add("visible");
});

// When the user taps on the cancel UI
cancelUi.addEventListener('click', function() {
    // If the earthInfo box is present...
    if (earthInfo) {
        // Hide the earthinfo box
        earthInfo.classList.remove("visible");
        earthInfo.classList.add("hidden");

        // Hide the cancel UI
        cancelUi.classList.remove("visible");
        cancelUi.classList.add("hidden");
    }
    // If the sunInfo box is present...
    if (sunInfo) {
        // Hide the sunInfo box
        sunInfo.classList.remove("visible");
        sunInfo.classList.add("hidden");

        // Hide the cancel UI
        cancelUi.classList.remove("visible");
        cancelUi.classList.add("hidden");
    }

    // Show the replacement UI
    replacementUI.classList.remove("hidden");
    replacementUI.classList.add("visible");
});

// Update our feather icons
feather.replace();