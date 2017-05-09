(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var Home = require('./Home.js');
// var Work = require('./Work.js');

var Global = {

	/**
	 * 
	 */
	init: function() {
		var self = this;
		self.attachEventHandlers();
	},

	/**
	 * 
	 */
	attachEventHandlers: function() {
		var self = this;
		$(document).ready(function(){

			$(window).load(self.onPageLoad);	
		});	
	},

	/**
	 * Page loading spinner
	 */
	onPageLoad: function() {
		// Animate loader off screen
		$(".ajax-loader").fadeOut("slow");
	},
	/**
	 * Lazy Load the images
	 */
	lazyload: function() {
		$(document).ready(function() {
			$("img.lazy").lazyload();
		});
	}
};

module.exports = Global;
},{}],2:[function(require,module,exports){
var Global = require('./Global.js');


var Home = {


	init: function() {
		var self = this;

		self.attachEventHandlers();
		Global.init();

	},
	/**
	 * Initialize the Home javascript by defining static variables, and kicking
	 * off the setInterval for scroll updates.
	 */
	attachEventHandlers: function() {
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
			self.$window = $(window);
			self.prevScrollPosition = undefined;

			// Hide .header-menu when page is loaded
			self.$headerMenu.addClass('hide');

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
			self.$headerMenu.addClass('hide');
		} else if (scrollPosition >= self.headerPosition) {
			self.$headerMenu.addClass('sticky');
			self.$headerMenu.removeClass('hide');
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

Home.init();

// module.exports = Home;
},{"./Global.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvR2xvYmFsLmpzIiwic3JjL2pzL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyB2YXIgSG9tZSA9IHJlcXVpcmUoJy4vSG9tZS5qcycpO1xuLy8gdmFyIFdvcmsgPSByZXF1aXJlKCcuL1dvcmsuanMnKTtcblxudmFyIEdsb2JhbCA9IHtcblxuXHQvKipcblx0ICogXG5cdCAqL1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0c2VsZi5hdHRhY2hFdmVudEhhbmRsZXJzKCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFxuXHQgKi9cblx0YXR0YWNoRXZlbnRIYW5kbGVyczogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblx0XHRcdCQod2luZG93KS5sb2FkKHNlbGYub25QYWdlTG9hZCk7XHRcblx0XHR9KTtcdFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBQYWdlIGxvYWRpbmcgc3Bpbm5lclxuXHQgKi9cblx0b25QYWdlTG9hZDogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gQW5pbWF0ZSBsb2FkZXIgb2ZmIHNjcmVlblxuXHRcdCQoXCIuYWpheC1sb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XG5cdH0sXG5cdC8qKlxuXHQgKiBMYXp5IExvYWQgdGhlIGltYWdlc1xuXHQgKi9cblx0bGF6eWxvYWQ6IGZ1bmN0aW9uKCkge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0JChcImltZy5sYXp5XCIpLmxhenlsb2FkKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2xvYmFsOyIsInZhciBHbG9iYWwgPSByZXF1aXJlKCcuL0dsb2JhbC5qcycpO1xuXG5cbnZhciBIb21lID0ge1xuXG5cblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0c2VsZi5hdHRhY2hFdmVudEhhbmRsZXJzKCk7XG5cdFx0R2xvYmFsLmluaXQoKTtcblxuXHR9LFxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgSG9tZSBqYXZhc2NyaXB0IGJ5IGRlZmluaW5nIHN0YXRpYyB2YXJpYWJsZXMsIGFuZCBraWNraW5nXG5cdCAqIG9mZiB0aGUgc2V0SW50ZXJ2YWwgZm9yIHNjcm9sbCB1cGRhdGVzLlxuXHQgKi9cblx0YXR0YWNoRXZlbnRIYW5kbGVyczogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuXG5cdFx0XHQvLyBjbGljayBldmVudCBmb3IgdGhlIGhlYWRlciBtZW51IG9uIHRoZSBob21lIHBhZ2Vcblx0XHRcdCQoJ2EnKS5jbGljayhzZWxmLm9uTGlua0NsaWNrKTtcblxuXHRcdFx0Ly9WYXJpYWJsZXMgZm9yIHRoZSBzY3JvbGxpbmctZGVwZW5kZW50IGVmZmVjdHNcblx0XHRcdHNlbGYuZmFkZVN0YXJ0ID0gMzA7XG5cdFx0XHRzZWxmLiRoZWFkZXJDb250ZW50Q29udGFpbmVyID0gJCgnLmhlYWRlci1jb250ZW50LWNvbnRhaW5lcicpO1xuXHRcdFx0c2VsZi4kaGVhZGVyTWVudSA9ICQoJy5oZWFkZXItbWVudScpO1xuXHRcdFx0c2VsZi5oZWFkZXJQb3NpdGlvbiA9IHNlbGYuJGhlYWRlck1lbnUub2Zmc2V0KCkudG9wO1xuXHRcdFx0c2VsZi4kcHJvamVjdHMgPSAkKCcucHJvamVjdHMnKTtcblx0XHRcdHNlbGYucHJvamVjdFBvc2l0aW9uID0gc2VsZi4kcHJvamVjdHMub2Zmc2V0KCkudG9wIC0gMzAwO1xuXHRcdFx0c2VsZi4kd2luZG93ID0gJCh3aW5kb3cpO1xuXHRcdFx0c2VsZi5wcmV2U2Nyb2xsUG9zaXRpb24gPSB1bmRlZmluZWQ7XG5cblx0XHRcdC8vIEhpZGUgLmhlYWRlci1tZW51IHdoZW4gcGFnZSBpcyBsb2FkZWRcblx0XHRcdHNlbGYuJGhlYWRlck1lbnUuYWRkQ2xhc3MoJ2hpZGUnKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaW1lciBmb3IgdGhlIHNjcm9sbCBlZmZlY3RzLiBBIHBlcmZvcm1hbmNlIG9wdGltaXplZCBhcHByb2FjaFxuXHRcdFx0ICogaW5zdGVhZCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIFxuXHRcdFx0ICogU2Nyb2xsIHBvc2l0aW9uIG9ubHkgdXBkYXRlcyB3aGVuIGEgY2hhbmdlIGlzIGRldGVjdGVkIFxuXHRcdFx0ICovXG5cblx0XHRcdHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHNjcm9sbFBvc2l0aW9uID0gc2VsZi4kd2luZG93LnNjcm9sbFRvcCgpO1xuXG5cdFx0XHRcdGlmKChzY3JvbGxQb3NpdGlvbiAhPT0gc2VsZi5wcmV2U2Nyb2xsUG9zaXRpb24pIHx8XG5cdFx0XHRcdFx0KHNlbGYucHJldlNjcm9sbFBvc2l0aW9uID09PSB1bmRlZmluZWQpKSB7XG5cdFx0XHRcdFx0IHNlbGYuc2Nyb2xsVXBkYXRlKHNjcm9sbFBvc2l0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLnByZXZTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuXHRcdFx0fSwgMjApO1xuXHRcdH0pO1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbmV2ZXIgc2Nyb2xsIHBvc2l0aW9uIHVwZGF0ZXMuIEFkZHMgYW5kIHJlbW92ZXNcblx0ICogdmFyaW91cyBjbGFzc3NlcyBkZXBlbmRpbmcgb24gdGhlIHNjcm9sbCBwb3NpdGlvbi5cblx0ICogQHBhcmFtICB7bnVtYmVyfVxuXHQgKi9cblx0c2Nyb2xsVXBkYXRlOiBmdW5jdGlvbihzY3JvbGxQb3NpdGlvbikge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdHZhciBvcGFjaXR5ID0gMDtcblx0XHRcdFxuXHRcdGlmIChzY3JvbGxQb3NpdGlvbiA8IHNlbGYuZmFkZVN0YXJ0KSB7XG5cdFx0XHRvcGFjaXR5ID0gMTtcblx0XHRcdHNlbGYuJGhlYWRlckNvbnRlbnRDb250YWluZXIuY3NzKCdvcGFjaXR5Jywgb3BhY2l0eSk7XG5cdFx0fSBlbHNlIGlmIChzY3JvbGxQb3NpdGlvbiA8IHNlbGYuaGVhZGVyUG9zaXRpb24pIHtcblx0XHRcdG9wYWNpdHkgPSAxIC0gKHNjcm9sbFBvc2l0aW9uIC8gKHNlbGYucHJvamVjdFBvc2l0aW9uIC0gc2VsZi5mYWRlU3RhcnQpKTtcblx0XHRcdHNlbGYuJGhlYWRlckNvbnRlbnRDb250YWluZXIuY3NzKCdvcGFjaXR5Jywgb3BhY2l0eSk7XG5cdFx0XHRzZWxmLiRoZWFkZXJNZW51LnJlbW92ZUNsYXNzKCdzdGlja3knKTtcblx0XHRcdHNlbGYuJGhlYWRlck1lbnUuYWRkQ2xhc3MoJ2hpZGUnKTtcblx0XHR9IGVsc2UgaWYgKHNjcm9sbFBvc2l0aW9uID49IHNlbGYuaGVhZGVyUG9zaXRpb24pIHtcblx0XHRcdHNlbGYuJGhlYWRlck1lbnUuYWRkQ2xhc3MoJ3N0aWNreScpO1xuXHRcdFx0c2VsZi4kaGVhZGVyTWVudS5yZW1vdmVDbGFzcygnaGlkZScpO1xuXHRcdH1cblxuXHRcdGlmIChzY3JvbGxQb3NpdGlvbiA+PSBzZWxmLnByb2plY3RQb3NpdGlvbiAtIDIwMCkge1xuXHRcdFx0c2VsZi4kcHJvamVjdHMucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcblx0XHR9XG5cdH0sXG5cblxuXHQvKipcblx0ICogU2Nyb2xsIGFuaW1hdGlvbiBmdW5jdGlvbiBvbiB0aGUgZml4ZWQgaGVhZGVyIG1lbnVcblx0ICovXG5cdG9uTGlua0NsaWNrOiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciAkcm9vdCA9ICQoJ2h0bWwsIGJvZHknKTtcblx0ICAgICRyb290LmFuaW1hdGUoe1xuXHQgICAgICAgIHNjcm9sbFRvcDogJCgnW25hbWU9XCInICsgJC5hdHRyKHRoaXMsICdocmVmJykuc3Vic3RyKDEpICsgJ1wiXScpLm9mZnNldCgpLnRvcFxuXHQgICAgfSwgNjAwKTtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0fVxufTtcblxuSG9tZS5pbml0KCk7XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gSG9tZTsiXX0=
