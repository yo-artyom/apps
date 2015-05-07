var ready;
ready = function() {

    //open

    $('#items').find('ul a').on('click', function(event){
        event.preventDefault();
        var selected_item = $(this).data('type');
        $('.info-panel-'+selected_item).addClass('is-visible');
    });

    //close
    $('.items').on('click', function(event){
        var si = $('#items').find('ul a').data(type);

        if( $(event.target).is('.info-panel-'+si) || $(event.target).is('.info-panel-close') ) {
            $('.info-panel-'+si).removeClass('is-visible');
            event.preventDefault();
        }
    });
};
 $(document).ready(ready)
 $(document).on('page:load', ready)
