const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const togglee1 = () => {
    document.getElementById("enter-command").classList.toggle("hidden");
}


window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("btn-e1").onclick = togglee1;
}