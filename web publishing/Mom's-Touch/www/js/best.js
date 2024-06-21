$(function () {
    // 첫번째 나오는 배너가 누구인지 체크할 변수
    let sNum = 0;


    // 복사 전 배너의 개수
    let liCount = $(".best-list>li").length;
    console.log(liCount);

    // 앞 배너 4개를 복사하여 마지막 배너 뒤에 붙이기
    let frontObj = $(".best-list>li:lt(6)").clone();
    $(".best-list").append(frontObj);

    // 복사 후 자식의 개수
    let copyCount = $(".best-list>li").length;
    console.log(copyCount);

    // 부모의 너비값 재계산
    // 100% * 자식의 개수 / 보여질 개수
    let pWidth = 100 * copyCount / 4;
    $(".best-list").outerWidth(pWidth + "%");

    // .best-list>li의 너비값
    let liWidth = $(".best-list>li:first").outerWidth();
    console.log(liWidth);


    // 움직이게 하는 명령어
    function moveBanner() {
        $(".best-list").stop().animate({
            // 1번 클릭: -liWidth
            // 2번 클릭: -2*liWidth
            // 3번 클릭: -3*liWidth
            "margin-left": -sNum * liWidth
        }, 1000);
        console.log(-sNum * liWidth);
    }

    // 오른쪽 버튼을 클릭하면 배너 한개 너비만큼 왼쪽으로 이동
    $(".right>a").on("click", function () {
        if (sNum == liCount) {
            $(".best-list").css("margin-left", 0)
            sNum = 0;
        }
        sNum++;
        moveBanner();
    })

    // 왼쪽 버튼을 클릭하면 배너 한개 너비만큼 오른쪽으로 이동
    $(".left>a").on("click", function () {
        if (sNum == 0) {
            $(".best-list").css("margin-left", -liCount * liWidth);
            sNum = liCount;
        }
        sNum--;
        moveBanner();
    })




})