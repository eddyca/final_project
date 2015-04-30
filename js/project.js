// $(document).ready(function(){
//   $('#image-grid').isotope({
//     itemSelector: '.item',
//     masonry: {
//       // resizable: false,
//       isFitWidth: true,
//       // percentPosition: true,
//       containerStyle: null,
//       gutter: 20,
//       columnWidth: $(this).find('.item')[0],
//     }
//   });
// });

(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options === 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function () {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
      });
    }
  };
})(jQuery);

