const colorBox = document.getElementById("colorBox");
const changeColorButton = document.getElementById("changeColorButton");


const colors = ["#192370", "#00008B", "#000080", "#7B68EE", "#9b59b6"," #302C42"];


function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
}


changeColorButton.addEventListener("click", changeColor);