// $("body").addClass("overflow-hidden")
$(document).ready(function () {
    $(".loader").fadeOut(500, function () {
        $(".loading").fadeOut(500, function () {
            $("body").removeClass("overflow-hidden")
            $(".loading").remove()
        })
    })
    let aboutPosition = $("#about").offset().top
    let navHeight = $("nav").outerHeight();
    let spans = document.querySelectorAll(".about .progress-bar");

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > aboutPosition - navHeight) {
            $("nav").addClass("nav-scroll");
            spans.forEach((span) => {
                span.style.width = span.dataset.width;
            });
        }
        else {
            $("nav").removeClass("nav-scroll")

        }
    })

})

