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
document.getElementById("btn-loops").onclick = () => {

    const numStars = document.getElementById("txt-num").value;
    console.log(numStars);
    if(!validNum(numStars, "error-num")){
        return;
    }

}