const sayHello = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello";
}

const styleMe = () => {
    const paragraph = document.getElementById("fun-message");
    paragraph.classList.add("tempClass");        
}

const hideMe = () => {
    const img = document.getElementById("img-koala");
    img.classList.add("hidden");
}

const rainbow = () => {
    document.getElementById("item").classList.add("rainbow");
}

document.getElementById("btn-hi").onclick = sayHello;
document.getElementById("btn-style").onclick = styleMe;
document.getElementById("btn-img").onclick = hideMe;
document.getElementById("btn-rainbow").onclick = rainbow;