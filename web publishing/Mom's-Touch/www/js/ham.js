$(function () {
    $("#menu>li>a").on("click", function () {
        $(this).toggleClass("active")
        $(this).next(".sub").slideToggle(500);
        $(this).parents("li").siblings("li").children("a").removeClass("active")
            .next(".sub").slideUp(500)
    })


    $(".ham-btn").on("click", function () {
        $(".gnb-menu").stop().animate({
            "left": 0
        }, 500)
    })
    $(".close").on("click", function () {
        $(".gnb-menu").stop().animate({
            "left": "-100%"
        }, 500)
    })

})