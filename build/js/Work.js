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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvR2xvYmFsLmpzIiwic3JjL2pzL1dvcmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gdmFyIEhvbWUgPSByZXF1aXJlKCcuL0hvbWUuanMnKTtcbi8vIHZhciBXb3JrID0gcmVxdWlyZSgnLi9Xb3JrLmpzJyk7XG5cbnZhciBHbG9iYWwgPSB7XG5cblx0LyoqXG5cdCAqIFxuXHQgKi9cblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHNlbGYuYXR0YWNoRXZlbnRIYW5kbGVycygpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBcblx0ICovXG5cdGF0dGFjaEV2ZW50SGFuZGxlcnM6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG5cdFx0XHQkKHdpbmRvdykubG9hZChzZWxmLm9uUGFnZUxvYWQpO1x0XG5cdFx0fSk7XHRcblx0fSxcblxuXHQvKipcblx0ICogUGFnZSBsb2FkaW5nIHNwaW5uZXJcblx0ICovXG5cdG9uUGFnZUxvYWQ6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIEFuaW1hdGUgbG9hZGVyIG9mZiBzY3JlZW5cblx0XHQkKFwiLmFqYXgtbG9hZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xuXHR9LFxuXHQvKipcblx0ICogTGF6eSBMb2FkIHRoZSBpbWFnZXNcblx0ICovXG5cdGxhenlsb2FkOiBmdW5jdGlvbigpIHtcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdCQoXCJpbWcubGF6eVwiKS5sYXp5bG9hZCgpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdsb2JhbDsiLCJ2YXIgR2xvYmFsID0gcmVxdWlyZSgnLi9HbG9iYWwnKTtcblxudmFyIFdvcmsgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRHbG9iYWwuaW5pdCgpO1xuXHRcdEdsb2JhbC5sYXp5bG9hZCgpO1xuXHR9XG59O1xuXG5Xb3JrLmluaXQoKTsiXX0=
