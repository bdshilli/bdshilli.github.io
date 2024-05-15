//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
    document.getElementById("main-nav-ul").classList.toggle("hide-small");
    document.getElementById("up").classList.toggle("hidden");
    document.getElementById("down").classList.toggle("hidden");
}

//toggling exercise one
document.getElementById("toggle-e1").onclick = () => {
    document.getElementById("exercise1").classList.remove("hidden");
    document.getElementById("exercise2").classList.add("hidden");
}

//toggling exercise two
document.getElementById("toggle-e2").onclick = () => {
    document.getElementById("exercise1").classList.add("hidden");
    document.getElementById("exercise2").classList.remove("hidden");
}

//exercise one - color slider
document.getElementById("colorSlider").oninput = () => {
    const val = document.getElementById("colorSlider").value;
    const item = document.getElementById("exercise1");
    const text = document.getElementById("color-text");
    item.style.backgroundColor = "rgb("+ val + ",0,0)";
    switch (true) {
        case val > 250:
            text.innerHTML = "RED HOT!";
            break;
        case val > 180:
            text.innerHTML = "hotter";
            break;
        case val > 90:
            text.innerHTML = "mild";
            break;
        case val <= 90:
            text.innerHTML = "calm";
            break;
        default:
            break;
    }
}

//exercise two - Picture Chooser
function selectPicture(picType) {
    const pic = document.getElementById("picture");
    switch (picType) {
        case "s":
            pic.src = "https://picsum.photos/100/100";
            break;
        case "m":
            pic.src = "https://picsum.photos/200/200";
            break;
        case "l":
            pic.src = "https://picsum.photos/300/300";
            break;
        default:
            break;
    }
}

document.getElementById("small").onclick = () => {selectPicture("s");}
document.getElementById("medium").onclick = () => {selectPicture("m");}
document.getElementById("large").onclick = () => {selectPicture("l");}