$('.btn-primary').on('click', function() {
    $('img').addClass('animate__flipInX')
    setTimeout(
        function () {
            $("img").attr("src", "/Ifat/IMG_6889.JPG");
        }, 100);
    setTimeout(
        function () {
            $('img').removeClass('animate__flipInX')
        }, 2000);
})

$('.btn-outline-secondary').on('click', function() {
    
    $('img').addClass('animate__flipInX')
    setTimeout(
        function () {
            $("img").attr("src", "/Ifat/IMG_0366.JPG");
        }, 100);
    setTimeout(
        function () {
            $('img').removeClass('animate__flipInX')
        }, 2000);
})