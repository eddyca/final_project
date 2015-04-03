(function () {

  $('#container').isotope({
    itemSelector: '.portfolio',
    masonry: {
      resizable: false,
      isFitWidth: true,
      gutter: 20,
      columnWidth: $('#container').find('.portfolio')[0]
    }
  });
  $('#filters').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('#container').isotope({ filter: filterValue });
});

}());

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
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);


jQuery(function(){
  jQuery.mark.jump();
});

$(function(){

  $('.awesome-form .input-group input').focusout(function(){

    var text_val = $(this).val();

    if(text_val === "") {

      $(this).removeClass('has-value');

    } else {

      $(this).addClass('has-value');

    }

  });

});

$(function(){

  $("#filters li").on("click", function(){
    $(this).toggleClass("selected");
  });

});