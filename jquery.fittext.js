/*global jQuery */
/*!
* FitText.js 1.1.1
*
* Copyright 2013, Jamy Golden http://css-plus.com
*
* Original plugin developed by:
* Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Sat November 23 16:25:00 2013 +0200
*/

(function( $ ){

    $.fn.fitText = function( kompressor, options ) {

        // Setup options
        var compressor = kompressor || 1,
                settings = $.extend({
                    'minFontSize' : Number.NEGATIVE_INFINITY,
                    'maxFontSize' : Number.POSITIVE_INFINITY
                }, options);

        return this.each(function(){

            // Store the object
            var $this = $(this);

            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function () {
                var fontSize = Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize));
                $this.css('font-size', fontSize);

                if(typeof settings.resized === 'function'){
                        settings.resized($this, fontSize);
                }
            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize.fittext orientationchange.fittext', resizer);

        });

    };

})( jQuery );