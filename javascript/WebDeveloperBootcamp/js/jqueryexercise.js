$(document).ready(function() {
    $('h1').click(function () {
        alert("heading clikced");
    })
    $('button').click(function () {
        $(this).css("background","yellow");
    })    $('#dontclick').click(function () {
        $(this).css("background", "red");
    })
});