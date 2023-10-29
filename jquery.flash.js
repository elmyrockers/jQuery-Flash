(function($) {
	$.fn.flash = function(options) {
	// Default options
		var defaults = {};
		var settings = $.extend({}, defaults, options);

		return this.each(function() {
			var element = $(this);
				console.log( 'inside plugin' );
				
		});
	};
})(jQuery);

/*












*/