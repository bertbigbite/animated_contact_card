// ANIMATE ON HOVER
document.addEventListener("DOMContentLoaded", function () {
    const contactImage = document.querySelector(".contact-image");
    const flap = document.querySelector(".top-fold"); // Get the envelope flap element
  
    // When hovering over the contact image, trigger the flap to open
    contactImage.addEventListener("mouseenter", function () {
        flap.classList.remove("close");  // Remove "close" class (if present)
        flap.classList.add("open");      // Add "open" class to start the opening animation
    });

    // When hovering away from the contact image, trigger the flap to close
    contactImage.addEventListener("mouseleave", function () {
        flap.classList.remove("open");   // Remove "open" class (if present)
        flap.classList.add("close");     // Add "close" class to start the closing animation
    });

    contactImage.addEventListener("mouseenter", function () {
        contactImage.classList.add("stop-animate");
    });

    contactImage.addEventListener("mouseleave", function () {
        // Remove the animation class after it completes
        setTimeout(() => {
            contactImage.classList.remove("stop-animate");
        }, 500); // Same duration as the CSS animation
    });
});