const slider = document.querySelector(".film-track");

slider.addEventListener("touchstart", () => {
    slider.style.animationPlayState = "paused";
});

slider.addEventListener("touchend", () => {
    slider.style.animationPlayState = "running";
});

slider.addEventListener("touchcancel", () => {
    slider.style.animationPlayState = "running";
});


// 

