var ready;


ready = function() {
    $(".slider").HSlider(); //инициализируем слайдер

    // $('.col .apps:even').css('background-color','#DEE5EB');

    //open
    $('.items').find('.item-info').on('click', function(){

        selected_item = $(this).data('type');
        $('html , body').css({'overflow':'hidden'});
        $('.info-panel-'+selected_item).addClass('is-visible');
        $('.overlay').fadeIn(400);
        $('.close').addClass('is-visible ');
    });

    //close
    $(document).on('click', '.close, .overlay', function(){
        $('html').css({'overflow':'scroll'});
        $('.info-panel-'+selected_item).removeClass('is-visible');
        $('.overlay').fadeOut(400);
        $('.close').removeClass('is-visible');
    });



};

$(document).ready(ready);
$(document).on('page:load', ready);
