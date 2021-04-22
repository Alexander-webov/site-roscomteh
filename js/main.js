$(document).ready(function () {
    $('.header__slider').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: false,
        nextArrow: false,
    });

    var men = true;

    $("#sandwich").click(function () {
        if (men == false) {
            $(".menu").slideUp();
            men = !men;
        }
        else {
            $(".menu").slideDown();
            men = !men;
        }
    });

    $("#sandwich, .menu_item").click(function () {
        $("#sandwich").toggleClass("active");
    });



});