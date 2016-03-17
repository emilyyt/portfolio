(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{}],2:[function(require,module,exports){
var Work = {

};
},{}],3:[function(require,module,exports){
var Home = require('./Home.js');
var Work = require('./Work.js');

var main = {

	/**
	 * 
	 */
	init: function() {
		var self = this;
		self.attachEventHandlers();
		Home.init();
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
	 * 
	 */
	onPageLoad: function() {
		// Animate loader off screen
		$(".ajax-loader").fadeOut("slow");
	},

};

main.init();
},{"./Home.js":1,"./Work.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvSG9tZS5qcyIsInNyYy9qcy9Xb3JrLmpzIiwic3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG52YXIgSG9tZSA9IHtcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgSG9tZSBqYXZhc2NyaXB0IGJ5IGRlZmluaW5nIHN0YXRpYyB2YXJpYWJsZXMsIGFuZCBraWNraW5nXG5cdCAqIG9mZiB0aGUgc2V0SW50ZXJ2YWwgZm9yIHNjcm9sbCB1cGRhdGVzLlxuXHQgKi9cblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0XHRcdC8vIGNsaWNrIGV2ZW50IGZvciB0aGUgaGVhZGVyIG1lbnUgb24gdGhlIGhvbWUgcGFnZVxuXHRcdFx0JCgnYScpLmNsaWNrKHNlbGYub25MaW5rQ2xpY2spO1xuXG5cdFx0XHQvL1ZhcmlhYmxlcyBmb3IgdGhlIHNjcm9sbGluZy1kZXBlbmRlbnQgZWZmZWN0c1xuXHRcdFx0c2VsZi5mYWRlU3RhcnQgPSAzMDtcblx0XHRcdHNlbGYuJGhlYWRlckNvbnRlbnRDb250YWluZXIgPSAkKCcuaGVhZGVyLWNvbnRlbnQtY29udGFpbmVyJyk7XG5cdFx0XHRzZWxmLiRoZWFkZXJNZW51ID0gJCgnLmhlYWRlci1tZW51Jyk7XG5cdFx0XHRzZWxmLmhlYWRlclBvc2l0aW9uID0gc2VsZi4kaGVhZGVyTWVudS5vZmZzZXQoKS50b3A7XG5cdFx0XHRzZWxmLiRwcm9qZWN0cyA9ICQoJy5wcm9qZWN0cycpO1xuXHRcdFx0c2VsZi5wcm9qZWN0UG9zaXRpb24gPSBzZWxmLiRwcm9qZWN0cy5vZmZzZXQoKS50b3AgLSAzMDA7XG5cdFx0XHRzZWxmLiRuYW1lTG9nbyA9ICQoJy5uYW1lJyk7XG5cdFx0XHRzZWxmLiR3aW5kb3cgPSAkKHdpbmRvdyk7XG5cblx0XHRcdHNlbGYucHJldlNjcm9sbFBvc2l0aW9uID0gdW5kZWZpbmVkO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIFRpbWVyIGZvciB0aGUgc2Nyb2xsIGVmZmVjdHMuIEEgcGVyZm9ybWFuY2Ugb3B0aW1pemVkIGFwcHJvYWNoXG5cdFx0XHQgKiBpbnN0ZWFkIG9mIHRoZSBldmVudCBsaXN0ZW5lci4gXG5cdFx0XHQgKiBTY3JvbGwgcG9zaXRpb24gb25seSB1cGRhdGVzIHdoZW4gYSBjaGFuZ2UgaXMgZGV0ZWN0ZWQgXG5cdFx0XHQgKi9cblxuXHRcdFx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcblx0XHRcdFx0c2Nyb2xsUG9zaXRpb24gPSBzZWxmLiR3aW5kb3cuc2Nyb2xsVG9wKCk7XG5cblx0XHRcdFx0aWYoKHNjcm9sbFBvc2l0aW9uICE9PSBzZWxmLnByZXZTY3JvbGxQb3NpdGlvbikgfHxcblx0XHRcdFx0XHQoc2VsZi5wcmV2U2Nyb2xsUG9zaXRpb24gPT09IHVuZGVmaW5lZCkpIHtcblx0XHRcdFx0XHQgc2VsZi5zY3JvbGxVcGRhdGUoc2Nyb2xsUG9zaXRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYucHJldlNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG5cdFx0XHR9LCAyMCk7XG5cdFx0fSk7XG5cblx0fSxcblxuXHQvKipcblx0ICogRnVuY3Rpb24gdG8gY2FsbCB3aGVuZXZlciBzY3JvbGwgcG9zaXRpb24gdXBkYXRlcy4gQWRkcyBhbmQgcmVtb3Zlc1xuXHQgKiB2YXJpb3VzIGNsYXNzc2VzIGRlcGVuZGluZyBvbiB0aGUgc2Nyb2xsIHBvc2l0aW9uLlxuXHQgKiBAcGFyYW0gIHtudW1iZXJ9XG5cdCAqL1xuXHRzY3JvbGxVcGRhdGU6IGZ1bmN0aW9uKHNjcm9sbFBvc2l0aW9uKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0dmFyIG9wYWNpdHkgPSAwO1xuXHRcdFx0XG5cdFx0aWYgKHNjcm9sbFBvc2l0aW9uIDwgc2VsZi5mYWRlU3RhcnQpIHtcblx0XHRcdG9wYWNpdHkgPSAxO1xuXHRcdFx0c2VsZi4kaGVhZGVyQ29udGVudENvbnRhaW5lci5jc3MoJ29wYWNpdHknLCBvcGFjaXR5KTtcblx0XHR9IGVsc2UgaWYgKHNjcm9sbFBvc2l0aW9uIDwgc2VsZi5oZWFkZXJQb3NpdGlvbikge1xuXHRcdFx0b3BhY2l0eSA9IDEgLSAoc2Nyb2xsUG9zaXRpb24gLyAoc2VsZi5wcm9qZWN0UG9zaXRpb24gLSBzZWxmLmZhZGVTdGFydCkpO1xuXHRcdFx0c2VsZi4kaGVhZGVyQ29udGVudENvbnRhaW5lci5jc3MoJ29wYWNpdHknLCBvcGFjaXR5KTtcblx0XHRcdHNlbGYuJGhlYWRlck1lbnUucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xuXHRcdFx0c2VsZi4kbmFtZUxvZ28uYWRkQ2xhc3MoJ2hpZGUnKTtcblx0XHR9IGVsc2UgaWYgKHNjcm9sbFBvc2l0aW9uID49IHNlbGYuaGVhZGVyUG9zaXRpb24pIHtcblx0XHRcdHNlbGYuJGhlYWRlck1lbnUuYWRkQ2xhc3MoJ3N0aWNreScpO1xuXHRcdFx0c2VsZi4kbmFtZUxvZ28ucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcblx0XHR9XG5cblx0XHRpZiAoc2Nyb2xsUG9zaXRpb24gPj0gc2VsZi5wcm9qZWN0UG9zaXRpb24gLSAyMDApIHtcblx0XHRcdHNlbGYuJHByb2plY3RzLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG5cdFx0fVxuXHR9LFxuXG5cblx0LyoqXG5cdCAqIFNjcm9sbCBhbmltYXRpb24gZnVuY3Rpb24gb24gdGhlIGZpeGVkIGhlYWRlciBtZW51XG5cdCAqL1xuXHRvbkxpbmtDbGljazogZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgJHJvb3QgPSAkKCdodG1sLCBib2R5Jyk7XG5cdCAgICAkcm9vdC5hbmltYXRlKHtcblx0ICAgICAgICBzY3JvbGxUb3A6ICQoJ1tuYW1lPVwiJyArICQuYXR0cih0aGlzLCAnaHJlZicpLnN1YnN0cigxKSArICdcIl0nKS5vZmZzZXQoKS50b3Bcblx0ICAgIH0sIDYwMCk7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZTsiLCJ2YXIgV29yayA9IHtcblxufTsiLCJ2YXIgSG9tZSA9IHJlcXVpcmUoJy4vSG9tZS5qcycpO1xudmFyIFdvcmsgPSByZXF1aXJlKCcuL1dvcmsuanMnKTtcblxudmFyIG1haW4gPSB7XG5cblx0LyoqXG5cdCAqIFxuXHQgKi9cblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHNlbGYuYXR0YWNoRXZlbnRIYW5kbGVycygpO1xuXHRcdEhvbWUuaW5pdCgpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBcblx0ICovXG5cdGF0dGFjaEV2ZW50SGFuZGxlcnM6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG5cdFx0XHQkKHdpbmRvdykubG9hZChzZWxmLm9uUGFnZUxvYWQpO1x0XG5cdFx0fSk7XHRcblx0fSxcblxuXHQvKipcblx0ICogXG5cdCAqL1xuXHRvblBhZ2VMb2FkOiBmdW5jdGlvbigpIHtcblx0XHQvLyBBbmltYXRlIGxvYWRlciBvZmYgc2NyZWVuXG5cdFx0JChcIi5hamF4LWxvYWRlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcblx0fSxcblxufTtcblxubWFpbi5pbml0KCk7Il19
