const header = document.querySelector(".gnb");

document.querySelectorAll(".gnb > li > a").forEach((item) => {
    item.addEventListener("click", (event) => {
        const submenu = item.nextElementSibling;

        if (submenu) {
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            item.setAttribute("aria-expanded", submenu.style.display === "block");

            // header의 active 클래스 토글
            header.classList.toggle("active");
            console.log(header.classList.contains("active")); // 클래스 상태 확인
        }

        event.preventDefault(); // 기본 링크 동작 방지
    });
});
