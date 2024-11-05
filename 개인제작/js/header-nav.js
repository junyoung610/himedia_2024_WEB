function toggleMenu() {
    const gnb = document.querySelector(".gnb");
    const gnbInfo = document.querySelector(".user-info-M");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    gnb.classList.toggle("active");
    gnbInfo.classList.toggle("active");

    // 버튼 토글
    if (btn1.style.display === "none") {
        btn1.style.display = "block";
        btn2.style.display = "none";
    } else {
        btn1.style.display = "none";
        btn2.style.display = "block";
    }
}
