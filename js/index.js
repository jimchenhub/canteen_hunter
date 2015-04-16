$(document).ready(function(){

    function jumpToMain(){
        $(".content").animate({opacity:"0"},function(){
            location.href = "login.html";
        });
    }

    var jump = setTimeout(function(){
        jumpToMain();
    }, 1500, "swing");

});