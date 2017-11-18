var colors = generateRandomColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
setSquareColors();
resetButton.addEventListener("click", function ( ) {
    // Generate all new colors
    colors = generateRandomColors(6);
    // Pick a new random color
    pickedColor = pickColor();
    colorDisplayElement.textContent = pickedColor;
    // Change the colors of squares
    setSquareColors();
})

function setSquareColors() {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.background;
            console.log(pickedColor, clickedColor);
            if (clickedColor == pickedColor) {
                message.textContent = "Correct";
                resetButton.textContent = "Play again!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                message.textContent = "Try again";
            }
        })
    }
}
var colorDisplayElement = document.getElementById("colorDisplay");
colorDisplayElement.textContent = pickedColor;

function changeColors(color) {
    for (var i=0;i<colors.length;i++) {
        squares[i].style.background = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(number) {
    // make an array
    var arr = [];
    for (var i=0;i<number;i++) {
        arr[i] = generateRandomColor();
    }
    return arr;
}
function generateRandomColor()
{
    return "rgb(" + Math.floor(Math.random() * 255)
        + ", " + Math.floor(Math.random() * 255)
        + ", " + Math.floor(Math.random() * 255)
        + ")";
}