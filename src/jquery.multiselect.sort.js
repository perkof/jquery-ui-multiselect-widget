/*
 * jQuery MultiSelect UI Widget Sorting Plugin 0.8
 * Copyright (c) 2011 Fraser Perkins, William Rayner
 *
 * Depends:
 *   - jQuery UI MultiSelect widget
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
*/

(function( $ ){
	$.fn.multiselectsort = function() {
		var sortCheckedToTop = function($inputs){
			$inputs.sort(function(a,b)
			{
			    if (a.text === undefined)
                    return -1;

                if (b.text === undefined)
                    return 1;
			
				// both are selected
				if(a.selected && b.selected)
				{
					if (b.text > a.text)
						return -1;
					if (b.text < a.text)
						return 1;
					return 0;
				} 
				
				// one is selected
				if(a.selected || b.selected)
				{
					if(a.selected)
						return -1;		
					return 1;
				} 
				
				// neither is selected
				if (!a.selected && !b.selected)
				{
					if (b.text > a.text)
						return -1;
					if (b.text < a.text)
						return 1;
				}
				return -1;
			});
			
			return $inputs;
		};
		
		this.bind('multiselectboxchecked', function (e, source) {
				var nodes = $(this).find('option');
				var baseList = $(this).data("multiselect").element;
				baseList.empty();
				baseList.prepend( sortCheckedToTop(nodes));
				 $(this).data("multiselect").refresh();
			});

		return this;
	};
})( jQuery );