$(document).ready(function(){
    $(".parent-li").hover(function(){
      $(".dropdown").css("display", "block");
      }, function(){
      $(".dropdown").css("display", "none");
    });
    $(".dropdown li a").hover(function(){
      $(this).css("background", "#192b3c");
      $(this).css("color", "#fff");
      }, function(){
      $(this).css("background", "#d59d43");
      $(this).css("color", "#192b3c");
    });
  });