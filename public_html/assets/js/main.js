(function ($) {

    var $window = $(window),
            $body = $('body');

    // Breakpoints.
    breakpoints({
        wide: ['1281px', '1680px'],
        normal: ['1001px', '1280px'],
        narrow: ['737px', '1000px'],
        mobile: [null, '736px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('.scrolly').scrolly();

})(jQuery);

$('#goObjectives').click(function (e) {
    e.preventDefault();

    //document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    $('html').animate({scrollTop: $('#objectives').offset().top}, 500, 'swing');


    return false;

});

$('#goITsolution').click(function (e) {
    e.preventDefault();

    //document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    $('html').animate({scrollTop: $('#ITsolution').offset().top}, 500, 'swing');


    return false;

});

$('#goBibliography').click(function (e) {
    e.preventDefault();

    //document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    $('html').animate({scrollTop: $('#bibliography').offset().top}, 500, 'swing');


    return false;

});
