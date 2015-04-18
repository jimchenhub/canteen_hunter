function adjustSize(){
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
  var cssRules = ".content{ width:" + contentWidth + "px;" +
    "height:" + contentHeight + "px;" +
    "left:" + contentLeft + "px;" +
    "top:" + contentTop + "px;}"
  if($('style.content-style').length == 0) {
    $('<style class="content-style">').html(cssRules).appendTo('head')
  }
  else{
    $('style.content-style').html(cssRules)
  }
};

function jumpToPage(pageUrl, effect){
  $.ajax({
    url: pageUrl,
    success: function(data){
      switch(effect){
        case 'fade':
          fadeToPage(data);
          break;
        default:
          $('.content').remove()
          $(data).find('.content').appendTo('.screen')
      }
    }
  })
}

function fadeToPage(data){
  $('.content').fadeOut(function(){
    $('.content').remove()
    $(data).find('.content').appendTo('.screen').hide()
    $('.content').fadeIn()
  })
}

function init(){
  adjustSize()
}

// bind events
$(window).on('resize', adjustSize);
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

init()

