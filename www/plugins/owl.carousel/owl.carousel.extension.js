$(document).ready(function() {
  bannerOwl = $("#" + bannerID);
  bannerOwl
    .parent("div")
    .prepend('<div id="preloader"><div id="status">&nbsp;</div></div>');

  bannerOwl.on("initialize.owl.carousel", function(prop) {
    // $(this).css({'background':'url(./images/misc/loader.gif) no-repeat center;'});
  });

  bannerOwl.on("initialized.owl.carousel", function(prop) {
    $(this)
      .find("img")
      .show();
    var currentIndex = prop.item.index;
    var currentEl = $(prop.target)
      .find(".owl-item")
      .eq(currentIndex);
    currentEl.animateCss(bannerFxIn);
    currentEl.find(".banner-caption").show();
    currentEl.find(".banner-caption").animateCss(bannerCaptionFxIn);
  });

  bannerOwl.owlCarousel({
    animateOut: bannerFxOut,
    animateIn: bannerFxIn,
    items: 1,
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: autoPlayTimeout,
    callbacks: true,
    smartSpeed: 3000,
    touchDrag: false,
    mouseDrag: false
  });

  $(".brand-logo").owlCarousel({
    nav: true,
    center: true,
    loop: true,
    margin: 50,
    responsive: {
      1200: {
        items: 5
      },
      992: {
        items: 3
      },
      760: {
        items: 2
      },
      740: {
        items: 2
      },
      640: {
        items: 2
      },
      300: {
        items: 1
      }
    }
  });

  $(".featured-product").owlCarousel({
    nav: true,
    center: true,
    loop: true,
    margin: 50,
    responsive: {
      1200: {
        items: 3
      },
      992: {
        items: 2
      },
      760: {
        items: 1
      },
      740: {
        items: 1
      },
      640: {
        items: 1
      },
      300: {
        items: 1
      }
    }
  });

  bannerOwl.on("changed.owl.carousel", function(prop) {
    if ($(this).css("background") != "inherit") {
      $(this).css({ background: "inherit" });
    }
    var currentIndex = prop.item.index;
    var currentCaption = $(prop.target)
      .find(".owl-item")
      .eq(currentIndex)
      .find(".banner-caption");
    currentCaption.show();
    currentCaption.animateCss(bannerCaptionFxIn);
  });
});

$.fn.extend({
  animateCss: function(animationName) {
    var animationEnd =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $(this)
      .addClass("animated " + animationName)
      .one(animationEnd, function() {
        $(this).removeClass("animated " + animationName);
      });
  }
});
