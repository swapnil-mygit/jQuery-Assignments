
$(document).ready(function () {
    $("#details").addClass("active");
    $("#para2").hide();
    $("#para3").hide();
    $("#para1").show();
    $('#details').click(function () {
        $("#details").addClass("active");
        $("#about").removeClass("active");
        $("#assignment").removeClass("active");
        $("#para1").fadeIn();
        $("#para2").hide();
        $("#para3").hide();
    });
    $('#about').click(function () {
        $("#details").removeClass("active");
        $("#about").addClass("active");
        $("#assignment").removeClass("active");
        $("#para1").hide();
        $("#para2").fadeIn();
        $("#para3").hide();
    });
    $('#assignment').click(function () {
        $("#details").removeClass("active");
        $("#about").removeClass("active");
        $("#assignment").addClass("active");
        $("#para1").hide();
        $("#para2").hide();
        $("#para3").fadeIn();
    });
});