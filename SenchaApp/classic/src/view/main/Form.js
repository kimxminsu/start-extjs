Ext.define('SenchaApp.view.main.Form', {
	extend: 'Ext.form.Panel',
	xtype: 'testform',
	
	title: 'Test Form Panel',
	
	height: 200,
	width: 300,
	bodyPadding: 10,
	defaultType: 'textfield',
	
	viewModel: {
		type: 'formviewmodel'
	},
	
	controller: 'formcontroller',
	
	items : [
		{
			fieldLabel : 'Name',
			name : 'name'
		},{
			fieldLabel : 'Email',
			name : 'email'
		},{
			xtype:'datefield',
			fieldLabel : 'Date of birth',
			name : 'date'
		},{
			xtype: 'combobox',
			bind: {
				store: '{getPhoneNumber}'
			},
			fieldLabel: 'Phone',
			valueField: 'abbr',
			name: 'phone',
			displayFiled: 'phone',
			typeAhead: true,
			queryMode: 'local',
			emptyText: 'Select a phone...',
		}
	],
	
	buttons: [{
		text: 'Register',
		disabled: true,
		formBind: true,
		listeners: {
			click: 'onItemSelected'
		}
	}],
	
	listeners: {
		select: 'onItemSelected'
	}
});