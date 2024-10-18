var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto", // 슬라이드 크기를 자동으로 설정하여 각 슬라이드의 너비를 반영
    spaceBetween: 40, // 슬라이드 간의 간격
    centeredSlides: false, // 슬라이드가 가운데 정렬되지 않도록 설정
    loop: true, // 반복 여부
    speed: 500, // 슬라이드 속도
    autoplay: true, // 자동 재생
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
