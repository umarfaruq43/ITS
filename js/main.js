/*-----------------------------------------------------------------------------------

  Template Name: Simply Construction HTML Template.
  Template URI: #
  Description: Simply Construction is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  Author: DevItems
  Version: 1.0

-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  03. Project  Masonry
  04. Sticky Header
  05. ScrollUp
  06. Testimonial Slick Carousel
  07. Testimonial Slick Carousel
  08. CounterUp
  16. ScrollReveal Js Init
  17. Magnific Popup




/*--------------------------------
[ End table content ]
-----------------------------------*/

(function ($) {
    "use strict";

    /*-------------------------------------------
  01. jQuery MeanMenu
--------------------------------------------- */

    $(".mobile-menu nav").meanmenu({
        meanMenuContainer: ".mobile-menu-area",
        meanScreenWidth: "991",
        meanRevealPosition: "right",
    });
    /*-------------------------------------------
  02. wow js active
--------------------------------------------- */
    new WOW().init();

    /*-------------------------------------------
  03. Project  Masonry
--------------------------------------------- */

    $(".htc__project__container").imagesLoaded(function () {
        // filter items on button click
        $(".project__menu").on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
        });
        // init Isotope
        var $grid = $(".htc__latest__project__wrap").isotope({
            itemSelector: ".single__project",
            percentPosition: true,
            transitionDuration: "0.7s",
            layoutMode: "fitRows",
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: ".single__project",
            },
        });
    });

    $(".project__menu button").on("click", function (event) {
        $(this).siblings(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
        event.preventDefault();
    });

    /*-------------------------------------------
  04. Sticky Header
--------------------------------------------- */

    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#sticky-header-with-topbar").removeClass("scroll-header");
        } else {
            $("#sticky-header-with-topbar").addClass("scroll-header");
        }
    });

    /*--------------------------
  05. ScrollUp
---------------------------- */

    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade",
    });

    /*---------------------------------------------
  06. Testimonial Slick Carousel
------------------------------------------------*/
    $(".testimonial__activation").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        // fade: true,
        dots: true,
    });

    /*------------------------------------------
  07. Testimonial Slick Carousel
-------------------------------------------*/
    $(".testimonial__activation--2").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        draggable: true,
        // fade: true,
        dots: true,
    });

    /*-----------------------------
  08. CounterUp
-----------------------------*/
    $(".count").counterUp({
        delay: 60,
        time: 3000,
    });

    /*-----------------------------------------------
  15. Home Slider
-------------------------------------------------*/

    if ($(".slider__activation__wrap").length) {
        $(".slider__activation__wrap").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: false,
            navText: [
                '<i class="zmdi zmdi-chevron-left"></i>',
                '<i class="zmdi zmdi-chevron-right"></i>',
            ],
            autoplayTimeout: 10000,
            items: 1,
            dots: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
            },
        });
    }

    /*-----------------------------------
  16. ScrollReveal Js Init
-------------------------------------- */

    window.sr = ScrollReveal({ duration: 800, reset: false });
    sr.reveal(".foo");
    sr.reveal(".bar");

    /*--------------------------------
  17. Magnific Popup
----------------------------------*/

    $(".video-popup").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        },
    });

    $(".image-popup").magnificPopup({
        type: "image",
        mainClass: "mfp-fade",
        removalDelay: 100,
        gallery: {
            enabled: true,
        },
    });

    /*-----------------------------------------------
  16. Blog Slider
-------------------------------------------------*/

    if ($(".blog__activation").length) {
        $(".blog__activation").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: false,
            navText: [
                '<i class="zmdi zmdi-chevron-left"></i>',
                '<i class="zmdi zmdi-chevron-right"></i>',
            ],
            autoplayTimeout: 10000,
            items: 1,
            dots: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
            },
        });
    }
})(jQuery);

$(document).ready(function () {
    $(".gallery-image").click(function () {
        var imgSrc = $(this).attr("src");
        var imgId = $(this).attr("id");
        var modalContent = "";
        $(".gallery-image").each(function () {
            if ($(this).attr("id") === imgId) {
                modalContent +=
                    '<img src="' +
                    $(this).attr("src") +
                    '" class="modal-image selected">';
            } else {
                modalContent +=
                    '<img src="' +
                    $(this).attr("src") +
                    '" class="modal-image">';
            }
        });
        $(".modal-content").html(modalContent);
        $(".modal-image").click(function () {
            $(".selected").removeClass("selected");
            $(this).addClass("selected");
        });
        $("#modal").css("display", "block");
    });

    $(".close").click(function () {
        $("#modal").css("display", "none");
    });
});

const submitButton = document.getElementById("submitButton");
// const submitForm = document.getElementById("myForm");
// submitForm.addEventListener("submit", submitForm);

// function submitForm(event) {

//     event.preventDefault();
//     submitButton.disabled = true;
//     submitButton.innerHTML = "Submitting...";
//     const form = document.getElementById("myForm");
//     const data = new URLSearchParams();
//     data.append("name", form.elements["name"].value);
//     data.append("subject", form.elements["subject"].value);
//     data.append("phoneNumber", form.elements["phone"].value);
//     data.append("message", form.elements["message"].value);
//     data.append("userEmail", form.elements["email"].value);

//     fetch("https://nodemailerf.onrender.com/submit", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: data.toString(),
//         mode: "no-cors",
//     })
//         .then((response) => {
//             console.log(response);
//             alert("Your message have been sent Succesfully");
//             // do something with the response, like show a success message
//             submitButton.disabled = false;
//             submitButton.innerHTML = "SEND NOW";
//             form.reset();
//         })
//         .catch((error) => {
//             console.error(error);
//             // do something with the error, like show an error message
//         });
// }

function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById("myForm");
    const name = form.elements["name"].value;
    const subject = form.elements["subject"].value;
    const phone = form.elements["phone"].value;
    const message = form.elements["message"].value;
    const email = form.elements["email"].value;

    if (!name || !subject || !phone || !message || !email) {
        // If any field is empty, do not submit the form
        alert("Please fill out all fields before submitting the form");
        return;
    }

    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting...";
    const data = new URLSearchParams();
    data.append("name", name);
    data.append("subject", subject);
    data.append("phoneNumber", phone);
    data.append("message", message);
    data.append("userEmail", email);

    fetch("https://nodemailerf.onrender.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
        mode: "no-cors",
    })
        .then((response) => {
            console.log(response);
            alert("Your message has been sent successfully");
            // do something with the response, like show a success message
            submitButton.disabled = false;
            submitButton.innerHTML = "SEND NOW";
            form.reset();
        })
        .catch((error) => {
            console.error(error);
            // do something with the error, like show an error message
        });
}
