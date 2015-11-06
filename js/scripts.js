$(document).ready(function(){
/*
  $("#collapseOneLink").on("click", function() {
    $("#collapseTwo").removeClass("in");
  });

  $("#collapseTwoLink").on("click", function() {
    $("#collapseOne").removeClass("in");
  }); 
*/
/* This changes the nav from transparent to opaque and vice versa when scrolling down or up */
  var nav = $(".nav-wrapper");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 55) {
    nav.css("background-color", "#8c9c90");
    }
  if ($(this).scrollTop() < 55) {
    nav.css("background-color", "rgba(140, 156, 144, 0.5)");
    }
  });

  /*linkedinfooter*/


});
