adjustSize = ->
  width = $(window).width()
  height = $(window).height()

  screenHeight = height - 60
  factor = screenHeight / 800

  screenWidth = factor * 395
  contentWidth = factor * 320
  contentHeight = factor * 569
  contentLeft = factor * 38
  contentTop = factor * 117

  $('.screen').css
    width: "#{screenWidth}px"
    height: "#{screenHeight}px"

  $('.screen .content').css
    width: "#{contentWidth}px"
    height: "#{contentHeight}px"
    left: "#{contentLeft}px"
    top: "#{contentTop}px"

$(window).on 'resize',adjustSize
adjustSize()

$(document).on 'click','a',->
  url = $(this).attr('href')
  $.ajax url,
    success: (data)->
      $(".content",data).replaceAll '.content'
      adjustSize()
  return false