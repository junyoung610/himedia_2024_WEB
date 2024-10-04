// document.addEventListener("DOMContentLoaded", function () {
//     // 대상을 변수에 저장
//     const $body = document.body;
//     const colorItem = document.querySelectorAll(".wrap > ul > li");
//     console.log(colorItem);

//     for (let i = 0; i < colorItem.length; i++) {
//         colorItem[i].addEventListener("click", function () {
//             const colorCode = colorItem[i].getAttribute("data-color");
//             $body.style.backgroundColor = colorCode;
//         });
//     }
// });

$(function () {
    const $body = $("body");
    const colorItem = $(".wrap > ul > li");

    colorItem.on("click", function () {
        const colorCode = $(this).attr("data-color");
        $body.css("background-color", colorCode);
    });
});
