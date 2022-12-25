$(document).ready(function() {
    // slider js
    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 3000,
        appendArrows: $(".slider"),
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true
            }
        }]
    });
});