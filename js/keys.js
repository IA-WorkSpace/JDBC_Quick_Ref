function init() {
	document.addEventListener('tizenhwkey', function(e) { // assign hardware buttons click event handler
		if(e.keyName == 'back') { // if back button is clicked
			if (location.hash === '' || location.hash === 'mainPage') { // if the main page is active
				tizen.application.getCurrentApplication().exit(); // close the application
			} 
			if (location.hash === '#index'){

			}
			else { // if not main page is active
				$.mobile.back(); // go to the previous page
			}
		}
		if(e.keyName == 'menu') {
		$(function(){$( "#menu" ).popup( "open" );});
		}
	});
}
$(document).bind('pageinit', init); // assign the init function call to the page initialization


function exitApp()
{
		tizen.application.getCurrentApplication().exit(); // close the application
}

$( function() {
    $( "#menu" ).enhanceWithin().popup();
});

$( function() {
    $( "#index" ).enhanceWithin().panel();
});

