$(function () {
    containerResize();
});

//! Out of document Ready function
function containerResize() {
    if ($(".ds-sidebar").length <= 0) {
        $("#content-page .container").css("marginRight", "auto");
        return;
    }

    let window_width = $(window).width() - 30;
    let sidebar_width = $(".ds-sidebar").width();
    let left = $(".ds-sidebar").css("left");
    let target_width = window_width - sidebar_width;
    if (left == "-260px") {
        $("#content-page .container").css("maxWidth", window_width + "px");
        $("#content-page .container").css("marginRight", "auto");
    } else {
        $("#content-page .container").css("maxWidth", target_width + "px");
        $("#content-page .container").css("marginRight", "0px");
    }
    $("#content-page .messenger").css("minHeight", ($(window).height() - 105) + "px");
    $("#content-page .messages").css("maxHeight", ($(window).height() - 180) + "px");
}

