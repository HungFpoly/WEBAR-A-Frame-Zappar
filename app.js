let myInstantTracker = document.getElementById("my-instant-tracker");
document.body.addEventListener("click", () => {
    myInstantTracker.setAttribute("zappar-instant", "placement-mode: false;");
})