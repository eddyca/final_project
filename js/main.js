(function () {

  $('#container').isotope({
    itemSelector: '.portfolio',
    masonry: {
      resizable: false,
      isFitWidth: true,
      gutter: 20,
      columnWidth: $('#container').find('portfolio')[0]
    }
  });
  $('#filters').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('#container').isotope({ filter: filterValue });
});

$(function() {
  smoothScroll(300);
  workBelt();
  workLoad();

  $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
  $(".biglink").fitText(1.5);

  $('textarea').autosize();
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}


function workBelt() {

  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-container label').click(function() {
    $('.work-belt').addClass("slided");
    $('.work-container').show();
  });

  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-container').hide(800);
  });

}


function  workLoad() {

  $.ajaxSetup({ cache: true });

  $('.thumb-container label').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.find('.thumb-unit').data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newfolder;

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });

}

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
    $(this).toggleClass("selected").css("color", "#ffffff");
  });

});