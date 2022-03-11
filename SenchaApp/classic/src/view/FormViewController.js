Ext.define('SenchaApp.view.main.FormViewController', {
	extend: 'Ext.app.ViewController',
	
	alias: 'controller.formcontroller',
	
	onItemSelected: function(item) {
		alert('selected!');
	}
});