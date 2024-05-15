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
    alert(val);
}