
var Home = {

	/**
	 * Initialize the Home javascript by defining static variables, and kicking
	 * off the setInterval for scroll updates.
	 */
	init: function() {
		var self = this;

		$(document).ready(function(){
			// click event for the header menu on the home page
			$('a').click(self.onLinkClick);

			//Variables for the scrolling-dependent effects
			self.fadeStart = 30;
			self.$headerContentContainer = $('.header-content-container');
			self.$headerMenu = $('.header-menu');
			self.headerPosition = self.$headerMenu.offset().top;
			self.$projects = $('.projects');
			self.projectPosition = self.$projects.offset().top - 300;
			self.$nameLogo = $('.name');
			self.$window = $(window);

			self.prevScrollPosition = undefined;

			/**
			 * Timer for the scroll effects. A performance optimized approach
			 * instead of the event listener. 
			 * Scroll position only updates when a change is detected 
			 */

			setInterval(function(){
				scrollPosition = self.$window.scrollTop();

				if((scrollPosition !== self.prevScrollPosition) ||
					(self.prevScrollPosition === undefined)) {
					 self.scrollUpdate(scrollPosition);
				}
				self.prevScrollPosition = scrollPosition;
			}, 20);
		});

	},

	/**
	 * Function to call whenever scroll position updates. Adds and removes
	 * various classses depending on the scroll position.
	 * @param  {number}
	 */
	scrollUpdate: function(scrollPosition) {
		var self = this;

		var opacity = 0;
			
		if (scrollPosition < self.fadeStart) {
			opacity = 1;
			self.$headerContentContainer.css('opacity', opacity);
		} else if (scrollPosition < self.headerPosition) {
			opacity = 1 - (scrollPosition / (self.projectPosition - self.fadeStart));
			self.$headerContentContainer.css('opacity', opacity);
			self.$headerMenu.removeClass('sticky');
			self.$nameLogo.addClass('hide');
		} else if (scrollPosition >= self.headerPosition) {
			self.$headerMenu.addClass('sticky');
			self.$nameLogo.removeClass('hide');
		}

		if (scrollPosition >= self.projectPosition - 200) {
			self.$projects.removeClass('hide');
		}
	},


	/**
	 * Scroll animation function on the fixed header menu
	 */
	onLinkClick: function() {
	    var $root = $('html, body');
	    $root.animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 600);
	    return false;
	}
};

module.exports = Home;