

var $ = require('jquery');
var Home = require('./Home.js');

var Global = {

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
		console.log("Event Handler document dom element: " + $(document));
		$(document).ready(function(){

			$(window).load(self.onPageLoad);	
			$('a').click(self.onLinkClick);
		});	
	},

	/**
	 * 
	 */
	onPageLoad: function() {
		// Animate loader off screen
		$(".ajax-loader").fadeOut("slow");
	},

	/**
	 * 
	 */
	onLinkClick: function() {
	    var $root = $('html, body');
	    $root.animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 600);
	    return false;
	}

};

Global.init();