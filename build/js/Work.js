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

	lazyload: function() {
		$(document).ready(function() {
			$("img.lazy").lazyload();
		});
	}
};

module.exports = Global;
},{}],2:[function(require,module,exports){
var Global = require('./Global');

var Work = {
	init: function() {
		var self = this;
		Global.init();
		Global.lazyload();
	}
};

Work.init();
},{"./Global":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvR2xvYmFsLmpzIiwic3JjL2pzL1dvcmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyB2YXIgSG9tZSA9IHJlcXVpcmUoJy4vSG9tZS5qcycpO1xuLy8gdmFyIFdvcmsgPSByZXF1aXJlKCcuL1dvcmsuanMnKTtcblxudmFyIEdsb2JhbCA9IHtcblxuXHQvKipcblx0ICogXG5cdCAqL1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0c2VsZi5hdHRhY2hFdmVudEhhbmRsZXJzKCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFxuXHQgKi9cblx0YXR0YWNoRXZlbnRIYW5kbGVyczogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblx0XHRcdCQod2luZG93KS5sb2FkKHNlbGYub25QYWdlTG9hZCk7XHRcblx0XHR9KTtcdFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBQYWdlIGxvYWRpbmcgc3Bpbm5lclxuXHQgKi9cblx0b25QYWdlTG9hZDogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gQW5pbWF0ZSBsb2FkZXIgb2ZmIHNjcmVlblxuXHRcdCQoXCIuYWpheC1sb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XG5cdH0sXG5cblx0bGF6eWxvYWQ6IGZ1bmN0aW9uKCkge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0JChcImltZy5sYXp5XCIpLmxhenlsb2FkKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2xvYmFsOyIsInZhciBHbG9iYWwgPSByZXF1aXJlKCcuL0dsb2JhbCcpO1xuXG52YXIgV29yayA9IHtcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdEdsb2JhbC5pbml0KCk7XG5cdFx0R2xvYmFsLmxhenlsb2FkKCk7XG5cdH1cbn07XG5cbldvcmsuaW5pdCgpOyJdfQ==
