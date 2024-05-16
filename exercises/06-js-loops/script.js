//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

//funds
document.getElementById("btn-funds").onclick = () => {
    const funds = document.getElementById("txt-funds").value;
    const errorFunds = document.getElementById("error-funds");
    errorFunds.innerHTML = "";
    let percent = "0%";

    if(isNaN(funds)) {
        errorFunds.innerHTML= "* Not a number";
        return;
    } 
    else if(funds < 0) {
        errorFunds.innerHTML ="* Funds need to be >= 0";
        return;
    }
    else {
        percent = (funds / 100) + "%";
    }
    document.querySelector(":root").style.setProperty("--funds", percent );
}

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

//loops with start and end

document.getElementById("btn-loops").onclick = () => {
    const result = document.getElementById("loop-results");
    const start = document.getElementById("txt-start").value;
    const end = document.getElementById("txt-end").value;
    const errorStart = document.getElementById("error-start");
    const errorEnd = document.getElementById("error-end");

    if(!validNum(start, "error-start") || ! validNum(end, "error-end")){
        return;
    } else if(start > end) {
        errorStart.innerHTML = "* start can't be greater than end";
        return;
    } else {
        for(let i=(start-1); i < (end); i++){
            const li = document.createElement("li");
            li.innerHTML = i+1;
            result.append(li);

            li.onclick = () => {
                const special = document.getElementById("info")
                special.innerHTML = `you clicked the li ${i+1}`;
            }
        }
    }
}