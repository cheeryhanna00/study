$(function(){
    let showBanner=0;

    function fadeBanner(){
        $(".m-banner>li").eq(showBanner).stop().fadeIn(1000)
        .siblings().stop().fadeOut(1000);

        $(".page>li").eq(showBanner).addClass("active")
        .siblings().removeClass("active");
    }

    let timer = setInterval(function(){
        $('.b-arrow .rightBtn').trigger('clcik')
    }, 3000)

    $(".page>li").on("click", function(){
        showBanner = $(this).index();
        fadeBanner();
    })

    $(".b-arrow .leftBtn").on("click", function () {
        $(".page").removeClass("active" + showBanner);
        if (showBanner== 0) {
           showBanner=2;
        }
        else {         
            showBanner--;          
        }
        $(".page").addClass("active" + showBanner);
        fadeBanner();
    })
    $(".b-arrow .rightBtn").on("click", function () {
        $(".page").removeClass("active" + showBanner);
        if (showBanner== 2) {
           showBanner=0;
        }
        else {         
            showBanner++;          
        }
        $(".page").addClass("active" + showBanner);
        fadeBanner();
    })
    
    $("#main-banner").on("mouseenter", function(){
        clearInterval(timer);
    })

    $("#main-banner").on("mouseleave", function(){
        timer = setInterval(function(){
       
        }, 3000)
    })

    $('.m-banner').bxSlider({
        auto: "true",
        mode: "fade",
        pager: "false",
        nextSelector: "#rightBtn",
        prevSelector: "#leftBtn",
        nextText: "",
        prevText: "",
        onSlideAfter: function ($slideElement, oldIndex, newIndex) {
          updateCounter(newIndex + 1);}
        });
    
    
      function updateCounter(currentSlide) {
        $('.count').text(currentSlide); // 현재 슬라이드 번호 업데이트
      }
    
      // 총 슬라이드 개수 표시
      $('.total').text(slider.getSlideCount());
    
    
      
      $('.pager-item').click(function(e) {
        e.preventDefault();
        var slideIndex = $(this).data('slide-index');
        slider.goToSlide(slideIndex);
      });
    


})