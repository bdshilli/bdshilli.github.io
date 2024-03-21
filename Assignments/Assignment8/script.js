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
                commandImage.src = "Images/read.jpg";
                break;
            case "c":
                commandImage.src = "Images/clown.jpg";
                break;
            case "p":
                commandImage.src = "Images/birthday.jpg";
                break;
            case "r":
                commandImage.src = "Images/rain.jpg";
                break;
            case "s":
                commandImage.src = "Images/shovel.jpg";
                break;
            case "w":
                commandImage.src = "Images/work.jpg";
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
                sliderImage.src = "Images/yoga1.jpg";
                break;
            case 2:
                sliderImage.src = "Images/yoga2.jpg";
                break;
            case 3:
                sliderImage.src = "Images/yoga3.jpg";
                break;
            case 4:
                sliderImage.src = "Images/yoga4.jpg";
                break;
            case 5:
                sliderImage.src = "Images/yoga5.jpg";
                break;
            case 6:
                sliderImage.src = "Images/yoga6.jpg";
                break;
            case 7:
                sliderImage.src = "Images/yoga7.jpg";
                break;
            case 8:
                sliderImage.src = "Images/yoga8.jpg";
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