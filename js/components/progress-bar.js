// Progress Bar
var ProgressBar = function() {
  'use strict';

  // Handle Progress Bar
  var handleProgressBar = function() {
    ANGULAR_LOADER.ready(function() {
      $('.progress').each(function() {
        $(this).appear(function() {
          $(this).animate({
            opacity: 1,
            left: '0'
          }, 800);
          var w = $(this).find('.progress-bar').attr('data-width');
          var h = $(this).find('.progress-bar').attr('data-height');
          $(this).find('.progress-bar').animate({
            width: w + '%',
            height: h + '%'
          }, 100, 'linear');
        });
      });
    });
  }

  return {
    init: function() {
      handleProgressBar(); // initial setup for Progress Bar
    }
  }
}();

ANGULAR_LOADER.ready('progress-bar', function() {
  ProgressBar.init();
});
