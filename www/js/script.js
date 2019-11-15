// jQuery for RD Navbar

$(document).ready(function () {
  $(".rd-navbar").RDNavbar({
    stickUpClone: false,
    stickUpOffset: 170
  });
});

// jQuery for Banner Preloader

$(window).on("load", function () {
  $("#preloader")
    .delay(100)
    .fadeOut("slow");
  $("#load")
    .delay(100)
    .fadeOut("slow");
});

// jQuery for jsSocial

$('#article-social').jsSocials({
  showLabel: false,
  showCount: false,
  shares: ['twitter', 'facebook', 'googleplus', 'linkedin', 'pinterest']
});

// Javascript for youtube and video gallery

$(document).on("click", "a.product-zoom", function (e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  return false;
});

$(document).on("click", "a.popup-youtube", function (e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  return false;
});

$('.zoom-gallery').each(function () {
  $(this).magnificPopup({
    delegate: 'a.product-zoom',
    type: 'image',
    gallery: { enabled: true }
  });
});

var yPopup = $('.popup-youtube');
if (yPopup.length) {
  yPopup.magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
}

// jQuery for Parallax Materialize

$(document).ready(function () {
  $(".parallax").parallax();
});

// @description FadeOut to Next Page

$(document).ready(function () {
  $(document).on("click", "a", function (e) {
    e.preventDefault();

    var link = $(this);
    var href = link.attr("href");
    var target = link.attr("target");
    if (target && target.indexOf("_blank") >= 0) {
      window.open(href, "_blank");
      return;
    }
    if (target && target.indexOf("_self") >= 0) {
      window.open(href, "_self");
      return;
    }
    if (href.indexOf("mailto:") == 0) {
      window.location = href;
      return;
    }
    if (href.indexOf("tel:") == 0) {
      window.location = href;
      return;
    }
    if (!href || href[0] === "#") {
      return;
    }

    setTimeout(function () {
      $("html").fadeOut(function () {
        window.location = href;
      });
    });
  });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin

$(function () {
  $(".navbar-nav li a").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
  $(".page-scroll a").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// jQuery for Side Menu feature

$(function () {
  var navikMenuListDropdown = $(".side-menu ul li:has(ul)");

  navikMenuListDropdown.each(function () {
    $(this).append('<span class="dropdown-append"></span>');
  });

  $(".side-menu li").each(function () {
    $(this)
      .parents("ul")
      .css("display", "block");
    $(this)
      .parents("ul")
      .next(".dropdown-append")
      .addClass("dropdown-open");
  });

  $(".side-menu .active").each(function () {
    $(this)
      .parents("ul")
      .css("display", "block");
    $(this)
      .parents("ul")
      .next(".dropdown-append")
      .addClass("dropdown-open");
  });

  $(".dropdown-append").on("click", function () {
    $(this)
      .prev("ul")
      .slideToggle(300);
    $(this).toggleClass("dropdown-open");
  });
});

// jQuery for Jump to Top

$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $("#top").fadeIn();
  } else {
    $("#top").fadeOut();
  }
});

$("#top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
