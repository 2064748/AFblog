var newsbtn = $('.btn-column-fashion');

newsbtn.click(function (event) {
    event.preventDefault();

    thisPanel = $(this).parent().attr('class');
    panel = $(this).attr('id');

    // console.log(thisPanel + ' ' + panel);

    let href = $(this).attr("href");
    $.ajax({
        url: href,

        beforeSend: function () {
            console.log("loading")
        },
        success: function (data) {
            $('body').append('<div class="article-page">' + data + '<a class="article-back">back</a></div>'); 
            console.log("succes");
            document.body.style.overflow = "hidden";
        }
    })
})

$('body').on('click', '.article-back', function (event){
    event.preventDefault();
    console.log('back to fashion page')
    $('.article-page, .article-back').remove();
    document.body.style.overflow = "scroll";
})