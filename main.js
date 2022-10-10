let menu = document.getElementById("menu")
let links = document.getElementById("links")
menu.onclick = () => {
    links.classList.toggle("sm:block")
}
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'],
        responsive: {
            0: {
                nav: false
            },
            // breakpoint from 768 up
            768: {
                nav: true,
            }
        }
    });
});
var typed = new Typed('.element', {
    strings: [' I"M a Businessman', 'Sameh Elsaid', ' a Developer', 'a Designer'],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
});

$(document).ready(function () {
    $(".darkColor").on("click", () => {
        $("body").toggleClass("dark-mode")
    })
    $(window).scroll(() => {
        $(this).scrollTop() > 50 ? $(".nav").addClass("stacky") : $(".nav").removeClass("stacky")
    })
});