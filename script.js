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

const tracks = document.querySelectorAll(".film-track");

tracks.forEach(track => {

    track.addEventListener("touchstart", () => {
        track.style.animationPlayState = "paused";
    });

    track.addEventListener("touchend", () => {
        track.style.animationPlayState = "running";
    });

});