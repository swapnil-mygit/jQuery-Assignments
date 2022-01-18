
$(document).ready(function () {
    $("#para2").hide();
    $("#para3").hide();
    $("#para1").show();
    $('#details').click(function () {
        $("#para1").fadeIn();
        $("#para2").hide();
        $("#para3").hide();
    });
    $('#about').click(function () {
        $("#para1").hide();
        $("#para2").fadeIn();
        $("#para3").hide();
    });
    $('#assignment').click(function () {
        $("#para1").hide();
        $("#para2").hide();
        $("#para3").fadeIn();
    });
});