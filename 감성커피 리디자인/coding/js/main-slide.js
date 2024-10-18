window.onload = function () {
    let currentIndex = 0; //현재 이미지
    const slider = document.querySelectorAll(".slider"); //모든 이미지를 변수에 저장
    slider.forEach((img) => (img.style.opacity = "0")); //모든 이미지를 투명하게
    slider[0].style.opacity = "1"; //첫번째 이미지만 보이게

    setInterval(() => {
        //3초에 한번씩 실행
        let nextIndex = (currentIndex + 1) % slider.length; // 1 2 0 1 2 무한반복

        slider[currentIndex].style.opacity = "0"; //첫번째 이미지 사라짐
        slider[nextIndex].style.opacity = "1"; //두번째 이미지 나타남
        slider.forEach((img) => (img.style.transition = "all 1s")); //이미지 애니메이션 추가

        currentIndex = nextIndex; //두번째 인덱스 값을 현재 인덱스 값에 저장
    }, 3000);
};
