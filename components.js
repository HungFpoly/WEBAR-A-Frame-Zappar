// Register our show-earth-info component
AFRAME.registerComponent('show-earth-info', {
    init: function () {
        this.el.addEventListener('click', () => {
            // Show the earthInfo UI
            earthInfo.classList.remove("hidden");
            earthInfo.classList.add("visible");

            // Hide the sunInfo UI
            sunInfo.classList.remove("visible");
            sunInfo.classList.add("hidden");

            // Hide the replacement UI
            replacementUI.classList.remove("visible");
            replacementUI.classList.add("hidden");

            // Show the cancelUi UI
            cancelUi.classList.remove("hidden");
            cancelUi.classList.add("visible");
        });
    },
});

// Register our show-sun-info component
AFRAME.registerComponent('show-sun-info', {
    init: function () {
        this.el.addEventListener('click', () => {
            // Show the sunInfo UI
            sunInfo.classList.remove("hidden");
            sunInfo.classList.add("visible");

            // Hide the earthInfo UI
            earthInfo.classList.remove("visible");
            earthInfo.classList.add("hidden");

            // Hide the replacement UI
            replacementUI.classList.remove("visible");
            replacementUI.classList.add("hidden");
            
            // Show the cancelUi UI
            cancelUi.classList.remove("hidden");
            cancelUi.classList.add("visible");
        });
    },
});

AFRAME.registerComponent('billboard', {
    init: function () {
        if (this.el.object3D) {
            billboardGroup.add(this.el.object3D);
        }
    }
});