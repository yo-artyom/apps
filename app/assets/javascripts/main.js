var ready;


ready = function() {

    $(".slider").HSlider(); //инициализируем слайдер
    $('.apps:odd').css('background-color','#ffffff'); //чередуем цвет строк
    $('.apps:even').css('background-color','#DEE5EB');

    //open
    $('#items').find('.item-info').on('click', function(event){

        event.preventDefault();
        $('html').css({'overflow':'hidden'});
        selected_item = $(this).data('type');
        $('body').addClass('overflow-hidden');
        $('.info-panel-'+selected_item).addClass('is-visible');
        $('.overlay').fadeIn(300);
        $('.close').addClass('is-visible ')
    });

    //close
    $(document).on('click', '.close, .overlay ', function(event){
        event.preventDefault();
        $('body').removeClass('overflow-hidden');
        $('html').css({'overflow':'scroll'});
        $('.info-panel-'+selected_item).removeClass('is-visible');
        $('.overlay').fadeOut(300);
        $('.close').removeClass('is-visible');
    });

};

$(document).ready(ready);
$(document).on('page:load', ready);
