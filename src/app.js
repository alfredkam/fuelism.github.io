require('../css/base.less');

(function(win){
    var toggle = true;

    $('.expand-bio-btn').click(function () {
        if (toggle) {
            $(this).html('Collapse');
            $('.extended-bio-content').slideDown();
        } else {
            $(this).html('Expand');
            $('.extended-bio-content').slideUp();
        }
        toggle = !toggle;
    });

    var resizeSquare = function () {
        $('.friends-content .wide-1 a div').each(function () {
            var width = $(this).width();
            $(this).height(width);
        });
    };
    resizeSquare();
    $(window).resize(resizeSquare);

})(window);
