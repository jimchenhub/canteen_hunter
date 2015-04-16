// Generated by CoffeeScript 1.8.0
(function() {
  var adjustSize;

  adjustSize = function() {
    var contentHeight, contentLeft, contentTop, contentWidth, factor, height, screenHeight, screenWidth, width;
    width = $(window).width();
    height = $(window).height();
    screenHeight = height - 60;
    factor = screenHeight / 800;
    screenWidth = factor * 395;
    contentWidth = factor * 320;
    contentHeight = factor * 569;
    contentLeft = factor * 38;
    contentTop = factor * 117;
    $('.screen').css({
      width: "" + screenWidth + "px",
      height: "" + screenHeight + "px"
    });
    return $('.screen .content').css({
      width: "" + contentWidth + "px",
      height: "" + contentHeight + "px",
      left: "" + contentLeft + "px",
      top: "" + contentTop + "px"
    });
  };

  $(window).on('resize', adjustSize);

  adjustSize();

  $(document).on('click', 'a', function() {
    var url;
    url = $(this).attr('href');
    $.ajax(url, {
      success: function(data) {
        $(".content", data).replaceAll('.content');
        return adjustSize();
      }
    });
    return false;
  });

}).call(this);
