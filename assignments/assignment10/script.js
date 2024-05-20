//loops
const validNum = (num, errorId) =>{
    const errorSpan = document.getElementById(errorId);
    errorSpan.innerHTML = "";

    if(isNaN(num)){
        errorSpan.innerHTML = "* Not a number";
        return false;
    }
    else if(num < 0){
        errorSpan.innerHTML = "* Number should be >= 0";
        return false;
    }

    return true;
}

//Loop Stars
document.getElementById("btn-draw").onclick = () => {
    const numStars = document.getElementById("txt-num").value;
    console.log(numStars);
    if(!validNum(numStars, "error-num")){
        return;
    }
    const starDiv = document.getElementById("div-stars");
    starDiv.innerHTML = "";
    for(let i = 0; i < numStars ; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.setProperty("left", ((Math.random() * 387)) + "px");
        star.style.setProperty("bottom", (4 + (Math.random() * 386)) + "px");
        starDiv.appendChild(star);
        star.onclick = () => {
            const special = document.getElementById("info")
            special.innerHTML = `You clicked star ${i+1}`;
        }
    }

}