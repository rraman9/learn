var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var resetButton = document.querySelector("#reset")
var p1score = 0;
var p2score = 0;
var h1 = document.querySelector("h1");
var gameOver = false;
var winningScore = 5;
p1.addEventListener("click", function () {
    if (gameOver == false) {
        p1score++;
        if (p1score == winningScore) {
            gameOver = true;
            p1Display.classList.add("winner");
            p1Display.textContent = p1score;
        } else {
            p1Display.textContent = p1score;
        }
    }
});
p2.addEventListener("click", function () {
        if (!gameOver) {
            p2score++;
            if (p2score == winningScore) {
                gameOver = true;
                p2Display.classList.add("winner");
                p2Display.textContent = p2score;
            } else {
                p2Display.textContent = p2score;
            }
        }

    }
);
resetButton.addEventListener("click", function () {
    gameOver=false;
    p1score=0;
    p2score=0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
})