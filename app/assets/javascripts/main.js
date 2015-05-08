var ready;
var selected_item;
ready = function() {

    //open

    $('#items').find('ul a').on('click', function(event){
        event.preventDefault();
        selected_item = $(this).data('type');
        $('body').addClass('overflow-hidden');
        $('.info-panel-'+selected_item).addClass('is-visible');
        $('.overlay').addClass('on');
    });

    //close
    $(document).on('click', '.overlay, .close', function(event){
        event.preventDefault();
        $('.overlay').removeClass('on');
        $('.info-panel-'+selected_item).removeClass('is-visible');

        //}
    });
};
 $(document).ready(ready)
 $(document).on('page:load', ready)
