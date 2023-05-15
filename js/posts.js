function openPop() {
    document.getElementById("popup_layer").style.display = "block";
}

function closePop() {
    document.getElementById("popup_layer").style.display = "none";
}



$(document).ready(function () {

    $(".nameButton").click(function () {
        if ($(this).next().next().css("display") == "none") {
            $(this).next().css("display", "block");
            $(this).next().next().css("display", "block");
        } else {
            $(this).next().css("display", "none");
            $(this).next().next().css("display", "none");
        }
    });

    $(".dropContentBg").click(function () {
        $(this).css("display", "none");
        $(this).next().css("display", "none");
    });

    $(".openReport").click(function () {
        var modalBg = $(this).parent().parent().find(".modalBackground");
        modalBg.show();
        modalBg.next().show();
    });

    $(".closeReport").click(function () {
        var modalBg = $(this).parent().parent().find(".modalBackground");
        modalBg.hide();
        modalBg.next().hide();
    });

});