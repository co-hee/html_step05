$(function () {

    $('.topBanner i').on('click', function () {
        $('.topBanner').toggleClass('on');
    })

    $('.topBanner2 i').on('click', function () {
        $('.topBanner2 .inner').slideToggle(600);
    })
    $('.bottomBanner i').on('click', function () {
        $('.bottomBanner .inner').slideToggle();
    })
    $('.bottomBanner i').on('click', function () {
        $('.bottomBanner .inner').slideToggle();
    })

    $('.popUp button').on('click', function () {
        $(this).parent().hide();
    })


})






