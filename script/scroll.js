/* <a href="#ya1" class="scroll-to">Ссылка 1</a> -откуда идет прокрутка
<a href="#ya2" class="scroll-to">Ссылка 2</a>
<a href="#ya3" class="scroll-to">Ссылка 3</a>
У элементов, к которым нужно осуществить прокрутку, 
должны быть прописаны атрибуты: «id="ya1"» и так далее. */


// Навигация по якорям внутри страницы
$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        // scrollTop: $(anchor).offset().top + (anchor === "#header"? 0 : (anchor === "#contacts"? 90 : 50))
        scrollTop: $(anchor).offset().top + (anchor === "#header"? 0 :  50)
    }, 800);

    if (anchor != "#header") {setTimeout(clearShown, 600);}
});

function clearShown(){
let shownBlocks = document.querySelectorAll(".element-show");
shownBlocks.forEach(
        element => element.classList.remove("element-show")
)
}

// Появление кнопок "Позвонить" и "Наверх" при скролле
$(window).scroll(function(){
    if($(window).scrollTop()>300){
    $('#callback-bt').addClass("show")
    $('#up-button').addClass("show")
    }
    if($(window).scrollTop()<300){
    $('#callback-bt').removeClass("show")
    $('#up-button').removeClass("show")
    }
})