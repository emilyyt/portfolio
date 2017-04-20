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