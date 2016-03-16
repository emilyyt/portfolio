var $ = require('jquery');


var Home = {

	/**
	 * Initialize the Home javascript by defining static variables, and kicking
	 * off the setInterval for scroll updates.
	 */
	init: function() {
		$(document).ready(function(){
			var self = this;
			console.log("Document in Home: " + $(document)[0]);
			self.fadeStart = 30;
			self.$headerContentContainer = $('.header-content-container');
			self.$headerMenu = $('.header-menu');
			console.log("fade start: " + self.fadeStart);
			console.log("Header menu: " + self.$headerMenu);
			console.log("self: " + self);
			console.log("Header menu offset:" + self.$headerMenu.offset());
			self.headerPosition = self.$headerMenu.offset().top;
			self.$projects = $('.projects');
			self.projectPosition = self.$projects.offset().top - 300;
			self.$nameLogo = $('.name');
			self.$window = $(window);
			setInterval(function(){
				scrollPosition = self.$window.scrollTop();
				prevScrollPosition = 0;

				if((scrollPosition !== prevScrollPosition) ||
					(prevScrollPosition === undefined)) {
					//NOT SURE WHY but scrollUpdate is not a function?!?!
					 // self.scrollUpdate(scrollPosition);

					 //Temp solution!
					 var opacity = 0;

					 // Hasn't yet reached fade start point
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

				}
				prevScrollPosition = scrollPosition;
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

		// Hasn't yet reached fade start point
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
	}
};

module.exports = Home;