//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
    document.getElementById("main-nav-ul").classList.toggle("hide-small");
}

//moving to the right
let ballLeft = 0;
let ballTop = 0;

const moveBall = () => {
    const root = document.querySelector(":root");
    root.style.setProperty("--ball-left", ballLeft + "px");
    root.style.setProperty("--ball-top", ballTop + "px");
}

document.getElementById("right-arrow").onclick = () => {
    ballLeft += 10;
    moveBall();
}

document.getElementById("left-arrow").onclick = () => {
    ballLeft -= 10;
    moveBall();
}

document.getElementById("bottom-arrow").onclick = () => {
    ballTop += 10;
    moveBall();
}

document.getElementById("top-arrow").onclick = () => {
    ballTop -= 10;
    moveBall();
}

/* Color Mood Message Generator */
document.getElementById("txt-color").onkeyup = () => {
    const color = document.getElementById("txt-color").value; 
    document.getElementById("color-message").innerHTML = color;
    (document.querySelector("#color-message")).style.setProperty("color", color);
}