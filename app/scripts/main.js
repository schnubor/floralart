var updateNavbar = function ( scrollTop ) {
    var opacity = scrollTop / $(window).height() * 0.6;

    $('.navbar').css( 'backgroundColor', 'rgba(0,0,0, ' + opacity + ')' );
}

var onWindowScroll = function (params) {
    var scrollTop = $(window).scrollTop();

    if( scrollTop <= $(window).height() ) {
        updateNavbar( scrollTop );
    }
}

window.addEventListener( 'scroll', onWindowScroll );


