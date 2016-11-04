function fade_slide() {
    var window_top = $(window).scrollTop();
    var div_top = $('.sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('.sticky-nav').addClass('fade-slide');
        $('.sticky-nav').slideDown();
    } else {
        $('.sticky-nav').removeClass('fade-slide');
        $('.sticky-nav').slideUp();
    }
}

$(function () {
    $(window).scroll(fade_slide);
    fade_slide();
});

$(document).click(function() {
    fade_slide();
});
