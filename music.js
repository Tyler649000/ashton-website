document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-audio");
    const btn = document.getElementById("start-music");
    
    btn.addEventListener("click", () => {
        btn.style.opacity = 0;
        audio.play();
        setTimeout(() => {
            btn.style.display = "none";
        }, 250);
    });
});