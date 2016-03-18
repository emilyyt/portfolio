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
		// Home.init();
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

// Global.init();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvR2xvYmFsLmpzIiwic3JjL2pzL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIHZhciBIb21lID0gcmVxdWlyZSgnLi9Ib21lLmpzJyk7XG4vLyB2YXIgV29yayA9IHJlcXVpcmUoJy4vV29yay5qcycpO1xuXG52YXIgR2xvYmFsID0ge1xuXG5cdC8qKlxuXHQgKiBcblx0ICovXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRzZWxmLmF0dGFjaEV2ZW50SGFuZGxlcnMoKTtcblx0XHQvLyBIb21lLmluaXQoKTtcblx0fSxcblxuXHQvKipcblx0ICogXG5cdCAqL1xuXHRhdHRhY2hFdmVudEhhbmRsZXJzOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuXHRcdFx0JCh3aW5kb3cpLmxvYWQoc2VsZi5vblBhZ2VMb2FkKTtcdFxuXHRcdH0pO1x0XG5cdH0sXG5cblx0LyoqXG5cdCAqIFxuXHQgKi9cblx0b25QYWdlTG9hZDogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gQW5pbWF0ZSBsb2FkZXIgb2ZmIHNjcmVlblxuXHRcdCQoXCIuYWpheC1sb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XG5cdH0sXG5cbn07XG5cbi8vIEdsb2JhbC5pbml0KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2xvYmFsOyIsInZhciBHbG9iYWwgPSByZXF1aXJlKCcuL0dsb2JhbC5qcycpO1xuXG5cbnZhciBIb21lID0ge1xuXG5cblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0c2VsZi5hdHRhY2hFdmVudEhhbmRsZXJzKCk7XG5cdFx0R2xvYmFsLmluaXQoKTtcblxuXHR9LFxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgSG9tZSBqYXZhc2NyaXB0IGJ5IGRlZmluaW5nIHN0YXRpYyB2YXJpYWJsZXMsIGFuZCBraWNraW5nXG5cdCAqIG9mZiB0aGUgc2V0SW50ZXJ2YWwgZm9yIHNjcm9sbCB1cGRhdGVzLlxuXHQgKi9cblx0YXR0YWNoRXZlbnRIYW5kbGVyczogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuXG5cdFx0XHQvLyBjbGljayBldmVudCBmb3IgdGhlIGhlYWRlciBtZW51IG9uIHRoZSBob21lIHBhZ2Vcblx0XHRcdCQoJ2EnKS5jbGljayhzZWxmLm9uTGlua0NsaWNrKTtcblxuXHRcdFx0Ly9WYXJpYWJsZXMgZm9yIHRoZSBzY3JvbGxpbmctZGVwZW5kZW50IGVmZmVjdHNcblx0XHRcdHNlbGYuZmFkZVN0YXJ0ID0gMzA7XG5cdFx0XHRzZWxmLiRoZWFkZXJDb250ZW50Q29udGFpbmVyID0gJCgnLmhlYWRlci1jb250ZW50LWNvbnRhaW5lcicpO1xuXHRcdFx0c2VsZi4kaGVhZGVyTWVudSA9ICQoJy5oZWFkZXItbWVudScpO1xuXHRcdFx0c2VsZi5oZWFkZXJQb3NpdGlvbiA9IHNlbGYuJGhlYWRlck1lbnUub2Zmc2V0KCkudG9wO1xuXHRcdFx0c2VsZi4kcHJvamVjdHMgPSAkKCcucHJvamVjdHMnKTtcblx0XHRcdHNlbGYucHJvamVjdFBvc2l0aW9uID0gc2VsZi4kcHJvamVjdHMub2Zmc2V0KCkudG9wIC0gMzAwO1xuXHRcdFx0c2VsZi4kbmFtZUxvZ28gPSAkKCcubmFtZScpO1xuXHRcdFx0c2VsZi4kd2luZG93ID0gJCh3aW5kb3cpO1xuXG5cdFx0XHRzZWxmLnByZXZTY3JvbGxQb3NpdGlvbiA9IHVuZGVmaW5lZDtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaW1lciBmb3IgdGhlIHNjcm9sbCBlZmZlY3RzLiBBIHBlcmZvcm1hbmNlIG9wdGltaXplZCBhcHByb2FjaFxuXHRcdFx0ICogaW5zdGVhZCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIFxuXHRcdFx0ICogU2Nyb2xsIHBvc2l0aW9uIG9ubHkgdXBkYXRlcyB3aGVuIGEgY2hhbmdlIGlzIGRldGVjdGVkIFxuXHRcdFx0ICovXG5cblx0XHRcdHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHNjcm9sbFBvc2l0aW9uID0gc2VsZi4kd2luZG93LnNjcm9sbFRvcCgpO1xuXG5cdFx0XHRcdGlmKChzY3JvbGxQb3NpdGlvbiAhPT0gc2VsZi5wcmV2U2Nyb2xsUG9zaXRpb24pIHx8XG5cdFx0XHRcdFx0KHNlbGYucHJldlNjcm9sbFBvc2l0aW9uID09PSB1bmRlZmluZWQpKSB7XG5cdFx0XHRcdFx0IHNlbGYuc2Nyb2xsVXBkYXRlKHNjcm9sbFBvc2l0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLnByZXZTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuXHRcdFx0fSwgMjApO1xuXHRcdH0pO1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbmV2ZXIgc2Nyb2xsIHBvc2l0aW9uIHVwZGF0ZXMuIEFkZHMgYW5kIHJlbW92ZXNcblx0ICogdmFyaW91cyBjbGFzc3NlcyBkZXBlbmRpbmcgb24gdGhlIHNjcm9sbCBwb3NpdGlvbi5cblx0ICogQHBhcmFtICB7bnVtYmVyfVxuXHQgKi9cblx0c2Nyb2xsVXBkYXRlOiBmdW5jdGlvbihzY3JvbGxQb3NpdGlvbikge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdHZhciBvcGFjaXR5ID0gMDtcblx0XHRcdFxuXHRcdGlmIChzY3JvbGxQb3NpdGlvbiA8IHNlbGYuZmFkZVN0YXJ0KSB7XG5cdFx0XHRvcGFjaXR5ID0gMTtcblx0XHRcdHNlbGYuJGhlYWRlckNvbnRlbnRDb250YWluZXIuY3NzKCdvcGFjaXR5Jywgb3BhY2l0eSk7XG5cdFx0fSBlbHNlIGlmIChzY3JvbGxQb3NpdGlvbiA8IHNlbGYuaGVhZGVyUG9zaXRpb24pIHtcblx0XHRcdG9wYWNpdHkgPSAxIC0gKHNjcm9sbFBvc2l0aW9uIC8gKHNlbGYucHJvamVjdFBvc2l0aW9uIC0gc2VsZi5mYWRlU3RhcnQpKTtcblx0XHRcdHNlbGYuJGhlYWRlckNvbnRlbnRDb250YWluZXIuY3NzKCdvcGFjaXR5Jywgb3BhY2l0eSk7XG5cdFx0XHRzZWxmLiRoZWFkZXJNZW51LnJlbW92ZUNsYXNzKCdzdGlja3knKTtcblx0XHRcdHNlbGYuJG5hbWVMb2dvLmFkZENsYXNzKCdoaWRlJyk7XG5cdFx0fSBlbHNlIGlmIChzY3JvbGxQb3NpdGlvbiA+PSBzZWxmLmhlYWRlclBvc2l0aW9uKSB7XG5cdFx0XHRzZWxmLiRoZWFkZXJNZW51LmFkZENsYXNzKCdzdGlja3knKTtcblx0XHRcdHNlbGYuJG5hbWVMb2dvLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjcm9sbFBvc2l0aW9uID49IHNlbGYucHJvamVjdFBvc2l0aW9uIC0gMjAwKSB7XG5cdFx0XHRzZWxmLiRwcm9qZWN0cy5yZW1vdmVDbGFzcygnaGlkZScpO1xuXHRcdH1cblx0fSxcblxuXG5cdC8qKlxuXHQgKiBTY3JvbGwgYW5pbWF0aW9uIGZ1bmN0aW9uIG9uIHRoZSBmaXhlZCBoZWFkZXIgbWVudVxuXHQgKi9cblx0b25MaW5rQ2xpY2s6IGZ1bmN0aW9uKCkge1xuXHQgICAgdmFyICRyb290ID0gJCgnaHRtbCwgYm9keScpO1xuXHQgICAgJHJvb3QuYW5pbWF0ZSh7XG5cdCAgICAgICAgc2Nyb2xsVG9wOiAkKCdbbmFtZT1cIicgKyAkLmF0dHIodGhpcywgJ2hyZWYnKS5zdWJzdHIoMSkgKyAnXCJdJykub2Zmc2V0KCkudG9wXG5cdCAgICB9LCA2MDApO1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5Ib21lLmluaXQoKTtcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBIb21lOyJdfQ==
