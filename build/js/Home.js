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

Home.init();

// module.exports = Home;
},{"./Global.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvR2xvYmFsLmpzIiwic3JjL2pzL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gdmFyIEhvbWUgPSByZXF1aXJlKCcuL0hvbWUuanMnKTtcbi8vIHZhciBXb3JrID0gcmVxdWlyZSgnLi9Xb3JrLmpzJyk7XG5cbnZhciBHbG9iYWwgPSB7XG5cblx0LyoqXG5cdCAqIFxuXHQgKi9cblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHNlbGYuYXR0YWNoRXZlbnRIYW5kbGVycygpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBcblx0ICovXG5cdGF0dGFjaEV2ZW50SGFuZGxlcnM6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG5cdFx0XHQkKHdpbmRvdykubG9hZChzZWxmLm9uUGFnZUxvYWQpO1x0XG5cdFx0fSk7XHRcblx0fSxcblxuXHQvKipcblx0ICogUGFnZSBsb2FkaW5nIHNwaW5uZXJcblx0ICovXG5cdG9uUGFnZUxvYWQ6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIEFuaW1hdGUgbG9hZGVyIG9mZiBzY3JlZW5cblx0XHQkKFwiLmFqYXgtbG9hZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xuXHR9LFxuXHQvKipcblx0ICogTGF6eSBMb2FkIHRoZSBpbWFnZXNcblx0ICovXG5cdGxhenlsb2FkOiBmdW5jdGlvbigpIHtcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdCQoXCJpbWcubGF6eVwiKS5sYXp5bG9hZCgpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdsb2JhbDsiLCJ2YXIgR2xvYmFsID0gcmVxdWlyZSgnLi9HbG9iYWwuanMnKTtcblxuXG52YXIgSG9tZSA9IHtcblxuXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdHNlbGYuYXR0YWNoRXZlbnRIYW5kbGVycygpO1xuXHRcdEdsb2JhbC5pbml0KCk7XG5cblx0fSxcblx0LyoqXG5cdCAqIEluaXRpYWxpemUgdGhlIEhvbWUgamF2YXNjcmlwdCBieSBkZWZpbmluZyBzdGF0aWMgdmFyaWFibGVzLCBhbmQga2lja2luZ1xuXHQgKiBvZmYgdGhlIHNldEludGVydmFsIGZvciBzY3JvbGwgdXBkYXRlcy5cblx0ICovXG5cdGF0dGFjaEV2ZW50SGFuZGxlcnM6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblxuXHRcdFx0Ly8gY2xpY2sgZXZlbnQgZm9yIHRoZSBoZWFkZXIgbWVudSBvbiB0aGUgaG9tZSBwYWdlXG5cdFx0XHQkKCdhJykuY2xpY2soc2VsZi5vbkxpbmtDbGljayk7XG5cblx0XHRcdC8vVmFyaWFibGVzIGZvciB0aGUgc2Nyb2xsaW5nLWRlcGVuZGVudCBlZmZlY3RzXG5cdFx0XHRzZWxmLmZhZGVTdGFydCA9IDMwO1xuXHRcdFx0c2VsZi4kaGVhZGVyQ29udGVudENvbnRhaW5lciA9ICQoJy5oZWFkZXItY29udGVudC1jb250YWluZXInKTtcblx0XHRcdHNlbGYuJGhlYWRlck1lbnUgPSAkKCcuaGVhZGVyLW1lbnUnKTtcblx0XHRcdHNlbGYuaGVhZGVyUG9zaXRpb24gPSBzZWxmLiRoZWFkZXJNZW51Lm9mZnNldCgpLnRvcDtcblx0XHRcdHNlbGYuJHByb2plY3RzID0gJCgnLnByb2plY3RzJyk7XG5cdFx0XHRzZWxmLnByb2plY3RQb3NpdGlvbiA9IHNlbGYuJHByb2plY3RzLm9mZnNldCgpLnRvcCAtIDMwMDtcblx0XHRcdHNlbGYuJG5hbWVMb2dvID0gJCgnLm5hbWUnKTtcblx0XHRcdHNlbGYuJHdpbmRvdyA9ICQod2luZG93KTtcblxuXHRcdFx0c2VsZi5wcmV2U2Nyb2xsUG9zaXRpb24gPSB1bmRlZmluZWQ7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVGltZXIgZm9yIHRoZSBzY3JvbGwgZWZmZWN0cy4gQSBwZXJmb3JtYW5jZSBvcHRpbWl6ZWQgYXBwcm9hY2hcblx0XHRcdCAqIGluc3RlYWQgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiBcblx0XHRcdCAqIFNjcm9sbCBwb3NpdGlvbiBvbmx5IHVwZGF0ZXMgd2hlbiBhIGNoYW5nZSBpcyBkZXRlY3RlZCBcblx0XHRcdCAqL1xuXG5cdFx0XHRzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuXHRcdFx0XHRzY3JvbGxQb3NpdGlvbiA9IHNlbGYuJHdpbmRvdy5zY3JvbGxUb3AoKTtcblxuXHRcdFx0XHRpZigoc2Nyb2xsUG9zaXRpb24gIT09IHNlbGYucHJldlNjcm9sbFBvc2l0aW9uKSB8fFxuXHRcdFx0XHRcdChzZWxmLnByZXZTY3JvbGxQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSkge1xuXHRcdFx0XHRcdCBzZWxmLnNjcm9sbFVwZGF0ZShzY3JvbGxQb3NpdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5wcmV2U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcblx0XHRcdH0sIDIwKTtcblx0XHR9KTtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbiB0byBjYWxsIHdoZW5ldmVyIHNjcm9sbCBwb3NpdGlvbiB1cGRhdGVzLiBBZGRzIGFuZCByZW1vdmVzXG5cdCAqIHZhcmlvdXMgY2xhc3NzZXMgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGwgcG9zaXRpb24uXG5cdCAqIEBwYXJhbSAge251bWJlcn1cblx0ICovXG5cdHNjcm9sbFVwZGF0ZTogZnVuY3Rpb24oc2Nyb2xsUG9zaXRpb24pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHR2YXIgb3BhY2l0eSA9IDA7XG5cdFx0XHRcblx0XHRpZiAoc2Nyb2xsUG9zaXRpb24gPCBzZWxmLmZhZGVTdGFydCkge1xuXHRcdFx0b3BhY2l0eSA9IDE7XG5cdFx0XHRzZWxmLiRoZWFkZXJDb250ZW50Q29udGFpbmVyLmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xuXHRcdH0gZWxzZSBpZiAoc2Nyb2xsUG9zaXRpb24gPCBzZWxmLmhlYWRlclBvc2l0aW9uKSB7XG5cdFx0XHRvcGFjaXR5ID0gMSAtIChzY3JvbGxQb3NpdGlvbiAvIChzZWxmLnByb2plY3RQb3NpdGlvbiAtIHNlbGYuZmFkZVN0YXJ0KSk7XG5cdFx0XHRzZWxmLiRoZWFkZXJDb250ZW50Q29udGFpbmVyLmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xuXHRcdFx0c2VsZi4kaGVhZGVyTWVudS5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XG5cdFx0XHRzZWxmLiRuYW1lTG9nby5hZGRDbGFzcygnaGlkZScpO1xuXHRcdH0gZWxzZSBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gc2VsZi5oZWFkZXJQb3NpdGlvbikge1xuXHRcdFx0c2VsZi4kaGVhZGVyTWVudS5hZGRDbGFzcygnc3RpY2t5Jyk7XG5cdFx0XHRzZWxmLiRuYW1lTG9nby5yZW1vdmVDbGFzcygnaGlkZScpO1xuXHRcdH1cblxuXHRcdGlmIChzY3JvbGxQb3NpdGlvbiA+PSBzZWxmLnByb2plY3RQb3NpdGlvbiAtIDIwMCkge1xuXHRcdFx0c2VsZi4kcHJvamVjdHMucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcblx0XHR9XG5cdH0sXG5cblxuXHQvKipcblx0ICogU2Nyb2xsIGFuaW1hdGlvbiBmdW5jdGlvbiBvbiB0aGUgZml4ZWQgaGVhZGVyIG1lbnVcblx0ICovXG5cdG9uTGlua0NsaWNrOiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciAkcm9vdCA9ICQoJ2h0bWwsIGJvZHknKTtcblx0ICAgICRyb290LmFuaW1hdGUoe1xuXHQgICAgICAgIHNjcm9sbFRvcDogJCgnW25hbWU9XCInICsgJC5hdHRyKHRoaXMsICdocmVmJykuc3Vic3RyKDEpICsgJ1wiXScpLm9mZnNldCgpLnRvcFxuXHQgICAgfSwgNjAwKTtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0fVxufTtcblxuSG9tZS5pbml0KCk7XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gSG9tZTsiXX0=
