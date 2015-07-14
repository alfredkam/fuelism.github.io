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

})(window);
