window.addEventListener("load", () => {
    const navLinks = document.querySelectorAll(".container-nav a");
    const imgsNav = document.querySelectorAll("nav img");
    const title = document.querySelector(".home-content h1");
    const middleLine = document.querySelector(".middle-line");
    const grape = document.querySelector(".home-content img");
    const btnDiscover = document.querySelector(".home-content button");

    // 순차적인 애니메이션을 위해 타임라인을 구성
    const t1 = gsap.timeline();

    t1.from(navLinks, { autoAlpha: 0, y: -50, duration: 1, stagger: 0.3 });
    t1.from(imgsNav, { autoAlpha: 0, y: -50, duration: 1, stagger: 0.3 }, "<");
    t1.from(title, { autoAlpha: 0, y: -50, duration: 0.5 });
    t1.to(middleLine, { duration: 0.5, height: 200 });
    t1.from(grape, { autoAlpha: 0, y: -50, duration: 0.8, ease: "bounce.out" });
    t1.from(btnDiscover, { autoAlpha: 0, y: -50, duration: 0.5 }, "+=1");

    t1.to(grape, { duration: 1, rotation: 360, repeat: -1, repeatDelay: 2 });
});
