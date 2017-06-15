
var icode = (function() {
	'use strict';

	function init() {
		$(document).on('click', '.play-video', function(e){
			e.preventDefault();
			$('#video-player').append('<iframe src="https://www.youtube.com/embed/nKIu9yen5nc?autoplay=1" frameborder="0" allowfullscreen=""></iframe>');
		});
	}

	return {
		init: init
	};
}());

jQuery(document).ready(function($) { icode.init(); });
