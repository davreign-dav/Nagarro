$(document).ready(function () {
    var check = false;
    $('.clicks').on('click', function () {
        if (!check) {
            $('#box').addClass('show');
            check = true;
        } else {
            $('#box').removeClass('show');
            check = false;
        }
    })
    $('.submission').on('click', function () {
        $('#box').removeClass('show');
    })

});


