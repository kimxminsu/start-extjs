Ext.define('SenchaApp.view.main.FormViewModel', {
	extend: 'Ext.app.ViewModel',
	
	alias: 'viewmodel.formviewmodel',
	
	stores: {
		getPhoneNumber: {
			fields: [
				'name', 'email', 'phone'
			],
			date: [
				{name: 'Rafael Nadal', email: "rafaelnadal@happy.com", phone: "010-1111-1111"},
				{name: 'Federer', email: "federer@happy.com", phone: "010-2222-2222"},
				{name: 'Djokovic', email: "djokovic@happy.com", phone: "010-3333-3333"},
				{name: 'Dominic Tim', email: "dominictim@happy.com", phone: "010-4444-4444"}
			]
		}
	}
});