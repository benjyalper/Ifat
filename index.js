$('.btn-primary').on('click', function() {
    $('img').addClass('animate__flipInX')
    setTimeout(
        function () {
            $("img").attr("src", "/Ifat/IMG_6889.JPG").attr("style", "height: 400px");
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
            $("img").attr("src", "/Ifat/IMG_8505.jpg").attr("style", "height: 400px").attr("style", "width: 300px");
        }, 100);
    setTimeout(
        function () {
            $('img').removeClass('animate__flipInX')
        }, 2000);
})
