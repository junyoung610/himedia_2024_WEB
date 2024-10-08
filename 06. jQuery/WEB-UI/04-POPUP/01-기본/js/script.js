$(function () {
    // 대상을 변수에 저장
    const $dim = $(".dim");
    const $popup = $(".popup");
    const $btnClose = $(".btn-close");

    $(".wrap a").on("click", function (e) {
        e.preventDefault();

        $dim.fadeIn();
        $popup.addClass("active");
    });

    $btnClose.on("click", function () {
        $dim.fadeOut();
        $popup.removeClass("active");
    });
});
