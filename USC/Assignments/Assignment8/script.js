const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
    document.getElementById("up").classList.toggle("hidden");
    document.getElementById("down").classList.toggle("hidden");
}

const toggleE1 = () => {
    document.getElementById("yoga-slider").classList.toggle("hidden", true);
    document.getElementById("entercommand").classList.toggle("hidden", false);
}

const toggleE2 = () => {
    document.getElementById("entercommand").classList.toggle("hidden", true);
    document.getElementById("yoga-slider").classList.toggle("hidden", false);
}

const textBox = document.getElementById("text-box");

textBox.addEventListener('input', function() {
    const userInput = this.value;

    const commandImage = document.getElementById("command-image");

    if (userInput) {
        const lastChar = userInput.charAt(userInput.length - 1);
        switch (lastChar) {
            case "b":
                commandImage.src = "images/read.jpg";
                break;
            case "c":
                commandImage.src = "images/clown.jpg";
                break;
            case "p":
                commandImage.src = "images/birthday.jpg";
                break;
            case "r":
                commandImage.src = "images/rain.jpg";
                break;
            case "s":
                commandImage.src = "images/shovel.jpg";
                break;
            case "w":
                commandImage.src = "images/work.jpg";
                break;
            default:
                break;
        }
    }
});

const yogaSlider = document.getElementById("slider");

yogaSlider.addEventListener('input', function() {
    const value = parseInt(this.value);

    const sliderImage = document.getElementById("slider-image");

    if (value) {
        switch (value) {
            case 1:
                sliderImage.src = "images/yoga1.jpg";
                break;
            case 2:
                sliderImage.src = "images/yoga2.jpg";
                break;
            case 3:
                sliderImage.src = "images/yoga3.jpg";
                break;
            case 4:
                sliderImage.src = "images/yoga4.jpg";
                break;
            case 5:
                sliderImage.src = "images/yoga5.jpg";
                break;
            case 6:
                sliderImage.src = "images/yoga6.jpg";
                break;
            case 7:
                sliderImage.src = "images/yoga7.jpg";
                break;
            case 8:
                sliderImage.src = "images/yoga8.jpg";
                break;
            default:
                break;
        }
    }
});

window.onload = () => {
    document.getElementById("yoga-slider").classList.toggle("hidden", true);
    document.getElementById("up").classList.toggle("hidden", true);
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("btn-e1").onclick = toggleE1;
    document.getElementById("btn-e2").onclick = toggleE2;
    document.getElementById("text-box").oninput

}