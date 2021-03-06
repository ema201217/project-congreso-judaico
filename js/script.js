(function ($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-to-top");
      if (windowpos >= 1) {
        siteHeader.addClass("fixed-header");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.fadeOut(300);
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(
      ".main-header .nav-outer .main-menu .navigation"
    ).html();
    $(".mobile-menu").append(
      '<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>'
    );
    $(".mobile-menu .navigation").append(mobileMenuContent);
    $(".sticky-header .navigation").append(mobileMenuContent);
    $(".mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });
    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev("ul").slideToggle(500);
    });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  //Shedule Block
  if ($(".schedule-block").length) {
    $(".schedule-block.active").find(".lower-content").slideDown();

    $(".schedule-block .toggle-btn").on("click", function () {
      $(this).parents(".schedule-block").toggleClass("active");
      $(this)
        .parents(".schedule-block")
        .find(".lower-content")
        .slideToggle(400);
      $(this)
        .parents(".schedule-block")
        .siblings()
        .find(".lower-content")
        .slideUp(400);
      $(this).parents(".schedule-block").siblings().removeClass("active");
    });
  }

  //Last Date
  if ($(".date-btn").length) {
    var last_date = $(".date-btn").attr("data-last-date");
    $(".date-btn").on("click", function () {
      $(this).html(last_date);
    });
  }

  //Search Popup
  if ($("#search-popup").length) {
    //Show Popup
    $(".search-box-btn").on("click", function () {
      $("#search-popup").addClass("popup-visible");
    });
    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        $("#search-popup").removeClass("popup-visible");
      }
    });
    //Hide Popup
    $(".close-search,.search-popup .overlay-layer").on("click", function () {
      $("#search-popup").removeClass("popup-visible");
    });
  }

  // Banner Carousel / Owl Carousel
  if ($(".banner-carousel").length) {
    $(".banner-carousel").owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      loop: false,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: false,
      autoplayTimeout: 5000,
      center:true,
      navText: [
        '<span class="fa fa-angle-left">',
        '<span class="fa fa-angle-right">',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }


  /* -------------------------------------------- */
  /*           GALLERY IMAGES FUNCTIONS           */
  /* -------------------------------------------- */
  // Gallery  Carousel
  if ($('.gallery-carousel').length) {
    $('.gallery-carousel').owlCarousel({
      loop: true,
      smartSpeed: 1000,
      margin: 40,
      stagePadding:0,
      nav: false,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause:true,
      merge: true,
      center: true,
      video:true,
      videoWidth: true,
      videoHeight: true,
      lazyLoad:true,
      slideTransition:'linear',
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2
        },
        767: {
          items: 3
        },
        1000: {
          items: 4,
          mergeFit: true
        }
      }
    });
  }

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      'transitionIn': 'elastic',
      'transitionOut': 'elastic',
      'speedIn': 600,
      'speedOut': 200,
      'overlayShow': true,
      'showCloseButton'	: true,
      'loop':true
    });
  }

/*   // // Clicking on the image
  // $('.lightbox-image').on('click', function () {
  //   // We click on fancybox element to enlarge the image
  //   $('.fancybox-button--fullscreen').click()
  // }) */

  /* -------------------------------------------- */
  /*             GALLERY FUNCTIONS END            */
  /* -------------------------------------------- */


  //Parallax Scene for Icons
  if ($(".parallax-scene-1").length) {
    var scene = $(".parallax-scene-1").get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($(".parallax-scene-2").length) {
    var scene = $(".parallax-scene-2").get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($(".parallax-scene-3").length) {
    var scene = $(".parallax-scene-3").get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($(".parallax-scene-4").length) {
    var scene = $(".parallax-scene-4").get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($(".parallax-scene-5").length) {
    var scene = $(".parallax-scene-5").get(0);
    var parallaxInstance = new Parallax(scene);
  }

  //Masonary
  function enableMasonry() {
    if ($(".masonry-items-container").length) {
      var winDow = $(window);
      // Needed variables
      var $container = $(".masonry-items-container");

      $container.isotope({
        itemSelector: ".masonry-item",
        masonry: {
          columnWidth: 1,
        },
        animationOptions: {
          duration: 500,
          easing: "linear",
        },
      });

      winDow.on("resize", function () {
        $container.isotope({
          itemSelector: ".masonry-item",
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false,
          },
        });
      });
    }
  }

  enableMasonry();

  /* Close menu mobile when clicked link-header */
  if ($(".link-header").length) {
    $(".link-header").on("click", function () {
      $(".close-btn").click();
    });
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab animated fadeIn");
        $(target).fadeIn(300);
        $(target).addClass("active-tab animated fadeIn");
      }
    });
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active ");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  //Event Countdown Timer
  if ($(".time-countdown").length) {
    $("[data-countdown]").each(function () {
      var $this = $(this),
        finalDate = $(this).data("countdown");
      $this.countdown(finalDate, function (event) {
        let date = new Date();
        var $this = $(this).html(
          event.strftime(
            "" +
            '<div class="counter-column"><span class="count">%D</span>Dias</div> ' +
            '<div class="counter-column"><span class="count">%H</span>Horas</div>  ' +
            '<div class="counter-column"><span class="count">%M</span>Minutos</div>  ' +
            '<div class="counter-column"><span class="count">%S</span>Segundos</div>'
          )
        );
      });
    });
  }

  if ($(".cs-countdown").length) {
    $(function () {
      $("[data-countdown]").each(function () {
        var $this = $(this),
          finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
          $this.html(event.strftime("%D d??as %H:%M:%S"));
        });
      });
    });

    $(".cs-countdown")
      .countdown("")
      .on("update.countdown", function (event) {
        var $this = $(this).html(
          event.strftime(
            "<div><span>%m</span><h6>Meses</h6></div> <div><span>%D</span><h6>d??as</h6></div> <div><span>%H</span><h6>Horas</h6></div> <div><span>%M</span><h6>Minutos</h6></div> <div><span>%S</span><h6>Segundos</h6></div>"
          )
        );
      });
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function (e) {
      e.preventDefault();
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1500
      );
    });
  }

  if ($(".thematic").length) {
    $(".thematic").on("click", function (e) {
      e.preventDefault();
      var href = $(this).attr("href");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top - 110,
        },
        1500
      );
    });
  }

  if ($(".logo").length) {
    $(".logo").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });
  }

  if ($(".participate").length) {
    $(".participate").on("click", function (e) {
      e.preventDefault();
      var href = $(this).attr("href");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top - 120,
        },
        1500
      );
    });
  }

  if ($(".speakers").length) {
    $(".speakers").on("click", function (e) {
      e.preventDefault();
      var href = $(this).attr("href");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top - 100,
        },
        2000
      );
    });
  }

  if ($(".images").length) {
    $(".images").on("click", function (e) {
      e.preventDefault();
      var href = $(this).attr("href");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top - 50,
        },
        2000
      );
    });
  }


  // BOT??N VER MAS - SPEAKERS
  if ($("#btn-ver-mas-speakers").length) {
    $("#btn-ver-mas-speakers").on("click", function (e) {
      e.preventDefault();
      $('#speakers-hidden,.container-speaker-hidden').toggleClass('active')
      if ($('#speakers-hidden,.container-speaker-hidden').hasClass("active")) {
        $('#btn-ver-mas-speakers .btn-title').text('VER MENOS');
        location.href = '#speakers-hidden';
      } else {
        $('#btn-ver-mas-speakers .btn-title').text('VER M??S');
        location.href = '#speakers';
      }
    });
  }

  // BOT??N VER MAS - PARTAKERS
  if ($("#btn-ver-mas-partakers").length) {
    $("#btn-ver-mas-partakers").on("click", function (e) {
      e.preventDefault();
      $('#partakers-hidden,.container-partaker-hidden').toggleClass('active')
      if ($('#partakers-hidden,.container-partaker-hidden').hasClass("active")) {
        $('#btn-ver-mas-partakers .btn-title').text('VER MENOS');
        location.href = '#partakers-hidden';
      } else {
        $('#btn-ver-mas-partakers .btn-title').text('VER M??S');
        location.href = '#partakers';
      }
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /* ==========================================================================
   Low edge swap
   ========================================================================== */
  $().ready(function () {
    $(`a[href="${location.hash.slice(1) == "" ? "#section1" : location.hash}"]`)
      .parent()
      .addClass("current");
  });

  if ($(".dropdown").length) {
    $(".dropdown").on("click", function (e) {
      const childChild = e.currentTarget.firstElementChild.firstElementChild;
      const child = e.currentTarget.firstElementChild;
      $(".dropdown").siblings().removeClass("current");
      e.currentTarget.classList.add("current");
      location.hash = childChild
        ? childChild.getAttribute("href")
        : child.getAttribute("href");
    });
  }
  $(".logo").on("click", function () {
    $(".dropdown").siblings().removeClass("current");
  });

  $(window).scroll(function () {
    const arrElements = [
      { idSection: "#thematic", ancla: 'a[href="#thematic"]' },
      { idSection: "#speakers", ancla: 'a[href="#speakers"]' },
      { idSection: "#participate", ancla: 'a[href="#participate"]' },
    ];
    arrElements.forEach((element) => {
      if ($(element.idSection).offset().top - 500 < $(window).scrollTop()) {
        $(element.ancla).parent().siblings().removeClass("current");
        $(element.ancla).parent().addClass("current");
      } else {
        $(element.ancla).parent().removeClass("current");
      }
      if ($('#amia').offset().top - 300 < $(window).scrollTop()) {
        $(arrElements[0].ancla).parent().removeClass("current");
        $(arrElements[1].ancla).parent().removeClass("current");
        $(arrElements[2].ancla).parent().removeClass("current");
      }

    });
  });

  /* ==========================================================================
   When document is Scrolling, do
   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
  });

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
    enableMasonry();
  });
})(window.jQuery);



