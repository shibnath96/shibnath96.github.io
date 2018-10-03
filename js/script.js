$(function() {

	var ref = window.location.search;

	console.log(ref);

	if ( ref === "" ) {
		$(profileMsg).show();
		$(siteBlocker).hide();

	} else {
		$(siteBlocker).show();
		$(profileMsg).hide();
	}

})