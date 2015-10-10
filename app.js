var leya = require('jsleya');

leya.start({
	appName: 'App',
	appDir: __dirname,
	protocol: 'http',
	port: 8000,
	router: {
		'/': {
			GET: 'index.js'
		},
		'/timeline': {
			GET: 'timeline.js'
		}
	}
});
