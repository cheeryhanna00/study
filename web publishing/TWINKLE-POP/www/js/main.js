$(function () {
    // main-banner
    $('.m-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        speed: 900
    });
    $('.mobile-m-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        speed: 900
    });



    // 햄버거버튼
    //햄버거버튼 클릭시 서브메뉴
    $(".ham").on("click", function () {
        $(".m").show();
    })
    // 서브메뉴의 "X"버튼 클릭시 서브메뉴 닫힘
    $(".m-x").on("click", function () {
        $(".m").hide();
    })

    //서브메뉴_community
    $(".m-shop>.m-community").on("click", function(){
        $(this).toggleClass("active").children(".m-depth").stop().slideToggle(300);    
    })



    // 챗본 안내문구 x클릭시 hide
    $(".close").on("click", function () {
        $(".chat-bot").hide();
    })
})
