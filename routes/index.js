var leya = require('jsleya');

leya.create('leya.Route', {
	module: module,
	invoke: function(reply) {
		leya.create('App.view.Main', {
			reply: reply,
		
			done: function(err) {
				reply.send(this.getHtml());
			}
		});
	}
});
