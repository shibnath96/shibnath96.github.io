$(function() {

	var ref = window.location.search;

	if ( ref === "" ) {
		$("#profileMsg").show();
		$("#siteBlocker").hide();
		$("title").text('Shibnath Salui | Profile');

	} else {
		$("#siteBlocker").show();
		$("#profileMsg").hide();
		$("title").text('access denied');

	}

})
