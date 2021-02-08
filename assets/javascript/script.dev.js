"use strict";

var isElementInView = function isElementInView(element) {
  var pageTop = $(window).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var elementTop = $(element).offset().top;
  var elementBottom = elementTop + $(element).height();
  return elementTop <= pageBottom && elementBottom >= pageTop;
};

$(window).on("scroll", function () {
  var $projects = $("#project__section");
  var $about = $('#about');
  var $home = $('#home');

  if (isElementInView($home)) {
    $("nav ul li a").css("color", "#E5E5E5");
    $("nav ul li a:hover").css("color", "#A4742C");
  } else if (isElementInView($projects)) {
    $("nav ul li a").css("color", "#332A2A");
    $("nav ul li a:hover").css("color", "#A4742C");
  } else if (isElementInView($about) && !isElementInView($projects)) {
    $("nav ul li a").css("color", "#E5E5E5");
    $("nav ul li a:hover").css("color", "#A4742C");
  }
});