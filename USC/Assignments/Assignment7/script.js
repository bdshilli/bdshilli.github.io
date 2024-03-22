const changingImage = document.getElementById("imageSwitch")
const slider = document.getElementById("slider")
const rotateImage = document.getElementById("rotate")
const addStar = document.getElementById("starColumn")

changingImage.addEventListener("click", function (e) {
    toggleImage(e.target)
})

slider.addEventListener("input", function(e) {
    rotateImage.style.transform = `rotate(${e.target.value}deg)`
})

addStar.addEventListener("click", function(e) {
    let star = document.createElement("img")
    star.src = "Images/star.png"
    document.getElementById("starColumn").appendChild(star)
})

let imgindex = 0;

function toggleImage(target) {
    if (imgindex == 0) {
        target.src = "Images/1.png"
        imgindex = 1;
    } else {
        target.src = "Images/2.png"
        imgindex = 0;
    }
}