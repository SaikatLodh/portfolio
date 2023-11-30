let loder = document.querySelector(".loder")
window.addEventListener("load", function () {
    loder.style.opacity = 0
})

let curser = document.querySelector(".curser")
document.addEventListener("mousemove", function (dets) {
    curser.style.left = dets.x - 10 + "px"
    curser.style.top = dets.y - 10 + "px"

})

let curser1 = document.querySelector(".curser1")
document.addEventListener("mousemove", function (dets) {
    curser1.style.left = dets.x - 3 + "px"
    curser1.style.top = dets.y - 2 + "px"

})


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".About",
        scroll: ".main",
        start: "5%",
        end: "10%",
        scrub: true,
        markers: false,
    }
})

tl.to(".logo h3", {
    color: "black"
}, "a")

tl.to(".nav-bar ul li a", {
    color: "black"
}, "a")




let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".Home",
        scroll: ".main",
        start: "20%",
        end: "30%",
        scrub: true,
        markers: false,
    }
})

tl2.to(".banner-text", {
    opacity: 0
})





let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".About",
        scroll: ".main",
        start: "0%",
        end: "100%",
        scrub: true,
        markers: false,
        pin: true,
    }
})

tl3.to(".left", {
    width: "100%"
})




let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".About",
        scroll: ".main",
        start: "35%",
        end: "65%",
        markers: false,


    }
})

tl4.to(".skills-anm", {
    width: "95%"
}, "a")

tl4.to(".skills-anm2", {
    width: "90%"
}, "b")

tl4.to(".skills-anm3", {
    width: "85%"
}, "c")

tl4.to(".skills-anm4", {
    width: "88%"
}, "a")

tl4.to(".skills-anm5", {
    width: "65%"
}, "b")

tl4.to(".skills-anm6", {
    width: "75%"
}, "c")



document.querySelectorAll(".service-one").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX - 130,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        712: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

    }


});


let project = document.querySelector(".project-curser")
let project2 = document.querySelector(".project-con")


project2.addEventListener("mousemove", function (dets) {
    project.style.opacity = 1
    project.style.left = dets.x - 50 + "px"
    project.style.top = dets.y - 50 + "px"

})

project2.addEventListener("mouseleave", function (dets) {
    project.style.opacity = 0


})

let responsive = document.querySelector(".menu")
let responsiveOpen = document.querySelector(".menu-responsive")
let renponsiveClose = document.querySelector(".navi-icon")

responsive.addEventListener("click", function () {
    gsap.to(responsiveOpen, {
        opacity: 1,
        height: "400px",
        scale: 1,


    })
})

renponsiveClose.addEventListener("click", function () {
    gsap.to(responsiveOpen, {
        height: "0px",
        scale: 0,
        opacity: 0,


    })
})


let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".Home",
        scroll: ".main",
        start: "75%",
        markers: false,
        scrub: true


    }
})

tl5.to(".menu-responsive", {
    background: "linear-gradient( 180deg, #ff424278,#ff424278)",

})










