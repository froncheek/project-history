var leya = require('jsleya');

/**
 * @class leya.view.MasterPage
 */
leya.def(module, 'App.view.Main', {
	extend: 'leya.view.MasterPage',
	policy: 'alluser',
	contents: [{
		code: 'leya.view.timeline.Main',
		contents: [{
			code: 'leya.view.timeline.Item'
		}, {
			code: 'leya.view.timeline.Item'
		}, {
			code: 'leya.view.timeline.Item'
		}, {
			code: 'leya.view.timeline.Item'
		}, {
			code: 'leya.view.timeline.Item'
		}]
	}]
});