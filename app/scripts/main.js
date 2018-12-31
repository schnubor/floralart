var updateNavbar = function (scrollTop) {
    var opacity = scrollTop / $(window).height() * 0.6;

    $('.navbar').css('backgroundColor', 'rgba(0,0,0, ' + opacity + ')');
}

var onWindowScroll = function (params) {
    var scrollTop = $(window).scrollTop();

    if (scrollTop <= $(window).height()) {
        updateNavbar(scrollTop);
    }
}

window.addEventListener('scroll', onWindowScroll);

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000 );
            }
        }
    });

$(function() {
    var nextButton = '<div class="slick-next navButton"><i class="fal fa-chevron-right"></i></div>';
    var prevButton = '<div class="slick-prev navButton"><i class="fal fa-chevron-left"></i></div>';

    $('.carousel').slick({
        dots: true,
        nextArrow: nextButton,
        prevArrow: prevButton,
    });

    lightbox.option({ wrapAround: true })
});