/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Practice.Application',

    name: 'Practice',

    requires: [
        // This will automatically load all classes in the Practice namespace
        // so that application classes do not need to require each other.
        'Practice.*'
    ],

    // The name of the initial view to create.
    mainView: 'Practice.view.main.Main'
});
