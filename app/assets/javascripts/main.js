var ready;
var selected_item;
ready = function() {

    //open

    $('#items').find('a').on('click', function(event){
        event.preventDefault();
        selected_item = $(this).data('type');
        $('body').addClass('overflow-hidden');
        $('.info-panel-'+selected_item).addClass('is-visible');
        $('.overlay').fadeIn(300);
        $('.close').addClass('is-visible ')
    });

    //close
    $(document).on('click', '.overlay, .close', function(event){
        event.preventDefault();

        $('.info-panel-'+selected_item).removeClass('is-visible');
        $('.overlay').fadeOut(300);
        $('.close').removeClass('is-visible')
        //}
    });
};
 $(document).ready(ready)
 $(document).on('page:load', ready)
