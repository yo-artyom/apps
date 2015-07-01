var ready;


ready = function() {

    $(".slider").HSlider(); //инициализируем слайдер
    $('.apps:odd').css('background-color','#ffffff'); //чередуем цвет строк
    $('.apps:even').css('background-color','#DEE5EB');

    $('.slider').on('click', function(event){ //выдвижное меню, клик на открытие
        event.preventDefault();
        selected_item = $(this).find('.apps').data('type');

        $('.info-panel-'+selected_item).addClass('is-visible');
        $('.overlay').fadeIn(300);
        $('.close').addClass('is-visible ')
    });

    $(document).on('click', '.close, .overlay ', function(event){ //выдвижное меню, клик на закрытие
        event.preventDefault();
        $('body').removeClass('overflow-hidden');
        $('.info-panel-'+selected_item).removeClass('is-visible');
        $('.overlay').fadeOut(300);
        $('.close').removeClass('is-visible');
    });


};

$(document).ready(ready);
$(document).on('page:load', ready);
