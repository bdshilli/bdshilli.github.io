//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
  document.getElementById("main-nav-ul").classList.toggle("hide-small");
  document.getElementById("up").classList.toggle("hidden");
  document.getElementById("down").classList.toggle("hidden");
};
