var Global = require('./Global');

var Work = {
	init: function() {
		var self = this;
		Global.init();
		Global.lazyload();
	}
};

Work.init();