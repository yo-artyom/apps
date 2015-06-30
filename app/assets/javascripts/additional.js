$(function() {
    $("#demo").dragend({
        afterInitialize: function() {
            this.container.style.visibility = "visible";
        },
        onSwipeEnd: function() {
            $(".nav li").removeClass("active");
            $(".nav li").eq(this.page).addClass("active");

        }
    });

    $(".nav").click(function() {
        var page = $(event.target).data("page");
        $("#demo").dragend({
            scrollToPage: page
        });
        $(event.target).addClass("active");

    });

});

