var leya = require('jsleya');

/**
 * @class leya.view.MasterPage
 */
leya.def(module, 'App.view.Main', {
	extend: 'leya.view.MasterPage',
	policy: 'alluser',
	contents: [{
		code: 'leya.view.timeline.Main',
		renderData: function() {
			return {
				contents: '<li>Test</li>'
			}
		}
	}]
});