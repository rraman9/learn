var h1 = document.querySelector("h1");
var isBlue = false;
setInterval(function () {
    if (isBlue) {
        h1.style.color = "pink";
        isBlue = false;
    } else {
        h1.style.color = "blue";
        isBlue = true;
    }
}, 100000);