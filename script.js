document.addEventListener("DOMContentLoaded", () => {
    let yesScale = 1;
    let noScale = 1;

    const yes = document.getElementById("yes");
    const no = document.getElementById("no");

    no.addEventListener("click", () => {
        yesScale += 0.25;
        noScale -= 0.25;

        yes.style.transform = `scale(${yesScale})`;
        no.style.transform = `scale(${noScale})`;
    });

    yes.addEventListener("click", () => {
        document.getElementsByClassName("card")[0].style.transform = "scale(0) translateY(1000px) rotateZ(90deg)";
        setTimeout(() => {
            window.location.href = "letter.html";
        }, 500);
    });
});