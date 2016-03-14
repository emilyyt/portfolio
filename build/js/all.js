$(document).ready(function(){

	//Function for handling scroll animations in the header
	var fadeStart = 30;
	var fadeUntil = 780;
	var headerPosition = $('.page-menu').offset().top;
	$(window).scroll(function() {
		// fade out the header based on scroll position
		var scrollPosition = $(this).scrollTop();
		var opacity = 0;

		var menu = $('.page-menu');

		if (fadeStart > scrollPosition) {
			opacity = 1;
		}
		else if (scrollPosition < fadeUntil) {
			opacity = 1-scrollPosition/fadeUntil;
			$('header').css('opacity', opacity)
			$('.page-border').removeClass('sticky');
			if (!menu.hasClass('hide')) {
				menu.addClass('hide');
			}
		}
		
		else if (scrollPosition >= fadeUntil) {
			$('.page-border').addClass('sticky');
			menu.removeClass('hide');

			if (scrollPosition >= 850) {
				menu.addClass('sticky');
				$("body").css("margin-top", 30);
			} else {
				menu.removeClass('sticky');
				$("body").css("margin-top", 0);
			}
		}

	});


	$('a').click(function(){
    var $root = $('html, body');
    $root.animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 600);
    return false;
});


});