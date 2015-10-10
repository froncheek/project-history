var leya = require('jsleya');

leya.create('leya.Route', {
	module: module,
	invoke: function(reply) {
		leya.create('App.view.Index', {
			reply: reply,
		
			complete: function(err) {
				reply.send(this.getHtml());
			}
		});
	}
});
