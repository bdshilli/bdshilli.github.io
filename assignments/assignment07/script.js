const exercise1 = () => {
    count = count + 1;
    document.getElementById("num").innerHTML = count;
}

const exercise2 = () => {
    const dis = document.getElementById("randomImage");
    const img1 = "https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o";
    const img2 = "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY";
    const img3 = "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s";

    const x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0:
            dis.src = img1;
            break;
        case 1:
            dis.src = img2;
            break;
        case 2:
            dis.src = img3;
            break;
        default:
            dis.src = img1;
            break;
    }
}

let count = 0;

document.getElementById("pt1").onclick = exercise1;
document.getElementById("pt2").onclick = exercise2;

document.getElementById("slider").oninput = () => {
    const val = document.getElementById("slider").value;
    document.getElementById("movingImg").style.transform = `translateX(${val}px)`;  // help from https://developer.mozilla.org/en-US/docs/Web/CSS/transform
}