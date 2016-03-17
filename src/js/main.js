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