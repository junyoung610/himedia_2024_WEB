const menuSlider = new Swiper(".menu-slider", {
    slidesPerView: "auto", // 슬라이드 크기를 자동으로 설정하여 각 슬라이드의 너비를 반영
    spaceBetween: 20, // 슬라이드 간의 간격
    centeredSlides: false, // 슬라이드가 가운데 정렬되지 않도록 설정
    loop: true, // 반복 여부 (필요에 따라 설정)
    speed: 500, // 슬라이드 속도
    autoplay: true, // 자동 재생 (필요 시 설정)

    // 네비게이션 화살표 설정
    navigation: {
        nextEl: ".menu-slider-wrap .btn-next",
        prevEl: ".menu-slider-wrap .btn-prev",
    },

    // 페이지네이션 설정 (필요하면 추가)
    pagination: {
        el: ".menu-slider-wrap .pagination",
        clickable: true,
    },
});
