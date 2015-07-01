(function($){

	var defaults = {
		easing:"ease",
		animationTime:500,
		pagination:true

	};

	$.fn.HSlider = function(options){
		var settings = $.extend({}, defaults, options),
			wrapper = $(this),
			sections = $("section"),
			total = sections.length,
			quiet = false

		$.fn.transformPage = function(settings,pos){
			$(this).css({
				"-webkit-transform": "translate3d(" + pos + "%, 0 ,0)",
				"-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
				"-moz-transform": "translate3d(" + pos + "%, 0 ,0)",
				"-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
				"-ms-transform": "translate3d(" + pos + "%, 0 ,0)",
				"-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
				"transform": "translate3d(" + pos + "%, 0 ,0)",
				"transition": "all " + settings.animationTime + "ms " + settings.easing
			});
		}

		$.fn.slideLeft = function(){
			indexNow = $("section.active").data("index");
			if (indexNow<total) {
				current = $("section[data-index='" + indexNow + "']");
				next = $("section[data-index='" + (indexNow + 1) + "']");

				current.removeClass("active")
				next.addClass("active");

				//for pagination
				if(settings.pagination == true) {
					$(".pagination li a" + "[data-index='" + indexNow + "']").removeClass("active");
					$(".pagination li a" + "[data-index='" + (indexNow + 1) + "']").addClass("active");
				}

				pos = (indexNow * 100) * -1;
				$(this).transformPage(settings, pos);
			};
		}

		$.fn.slideRight = function(){
			indexNow = $("section.active").data("index");
			if (indexNow<=total && indexNow>1) {
				current = $("section[data-index='" + indexNow + "']");
				next = $("section[data-index='" + (indexNow - 1) + "']");

				current.removeClass("active")
				next.addClass("active");

				//for pagination
				if(settings.pagination == true) {
					$(".pagination li a" + "[data-index='" + indexNow + "']").removeClass("active");
					$(".pagination li a" + "[data-index='" + (indexNow - 1) + "']").addClass("active");
				}

				pos = ((next.data("index") - 1) * 100) * -1;
				$(this).transformPage(settings, pos);
			};
		}


		function ready(event,delta){

			console.log('wheel!');

			if (quiet == false) {
				if (delta<0) {
					wrapper.slideLeft()
				} else {
					wrapper.slideRight()
				};
				quiet = true;
				setTimeout(function(){
					quiet = false;
					console.log("refresh!"+quiet);
				} , settings.animationTime+200);
			}else{
				event.preventDefault();
			}

		}

		//Create Pagination

		if(settings.pagination == true)  {
			$(".pagination li a").click(function (){
				var page_index = $(this).data("index");

				if (!$(this).hasClass("active")) {
					current = $("section.active")
					next = $("section[data-index='" + (page_index) + "']");

					current.removeClass("active")
					next.addClass("active")

					$(".pagination li a" + ".active").removeClass("active");
					$(".pagination li a" + "[data-index='" + (page_index) + "']").addClass("active");

					pos = ((page_index - 1) * 100) * -1;
					wrapper.transformPage(settings, pos);
				}
			});
		}


		//init to slide
		$("section[data-index='1']").addClass("active");
		$(".pagination li a" + "[data-index=1]").addClass("active");

		//bind Mousewheel Scroll Event
		$(document).bind('mousewheel DOMMouseScroll', function(event) {
			event.preventDefault();
			var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
			ready(event, delta);
		});




	}

})(window.jQuery);