let moving = false; 

function changeColor(color) {
    if (moving) return; 
    moving = true;

    let box = document.querySelector(".box");

    let newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.style.borderColor = color;
    newSquare.style.backgroundColor = color;

    newSquare.style.top = "-150px";
    newSquare.style.opacity = "1";

    box.appendChild(newSquare);

    setTimeout(() => {
        newSquare.style.top = "50px";
        newSquare.style.opacity = "1";
    }, 10);

    setTimeout(() => {
        newSquare.style.backgroundColor = "transparent"; 
    }, 500);

    let oldSquare = document.querySelector(".square:not(:last-child)");
    if (oldSquare) {
        oldSquare.style.top = "-150px";
        oldSquare.style.opacity = "0";
        setTimeout(() => oldSquare.remove(), 500);
    }

    setTimeout(() => {
        moving = false;
    }, 500);
}
