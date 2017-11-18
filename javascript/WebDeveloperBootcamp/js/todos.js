var liList = document.querySelectorAll("li");
for (var i=0;i<liList;i++) {
    liList[i].addEventListener("mouseover", function () {
        this.style.color="red";
    });
    liList[i].addEventListener("mouseout", function () {
        this.style.color="black";
    })
}
