var ready;
var selected_item;

ready = function() {

    $(".slider").HSlider(); //инициализируем слайдер
    $('.apps:odd').css('background-color','#ffffff'); //чередуем цвет строк
    $('.apps:even').css('background-color','#DEE5EB');

    window.onerror = function (msg, url, line) {
        alert(msg + "\n" + url + "\n" + "\n" + line);
        return true;
    };
    $('.slider').find('.apps').on('click', function(event){ //выдвижное меню, клик на открытие
        event.preventDefault();
        selected_item = $(this).data('type');

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
