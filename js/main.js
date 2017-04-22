$(function () {
    var okno = $(window);
    var menu = $('#main-nav');

    /* Transparent scroll menu - start */
    if (okno.scrollTop() >= 100) {
        menu.addClass('scroll');
    }

    okno.scroll(function () {

        if (okno.scrollTop() >= 100) {
            menu.addClass('scroll');
        } else {
            menu.removeClass('scroll');
        }

    });
    /* Transparent scroll menu - stop */

    /* Smoth scroll - start */

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();
        var menuHeight = $('#main-nav').height();
        
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
    });

    /* Smoth scroll - stop */

});