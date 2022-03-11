Ext.define('SenchaApp.view.main.Form', {
	extend: 'Ext.form.Panel',
	xtype: 'testform',
	
	title: 'Test Form Panel',
	
	height: 200,
	width: 300,
	bodyPadding: 10,
	defaultType: 'textfield',
	
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
		}
	],
	
	listeners: {
		select: 'onItemSelected'
	}
});