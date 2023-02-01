$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing:'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 3,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        asNavFor: '.sliderbig'
    });
    $('.sliderbig').slick({
        arrows: true,
        fade: true,
        asNavFor: '.slider'
    });
})
