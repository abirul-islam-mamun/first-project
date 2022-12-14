(function ($) {
// mobile menu 
$(".mobile-btn").click(function(){
    $(".responsive-menu").toggleClass("active");
  });



    // slider active
  if ($(".new-product-active").length) {
    $(".new-product-active").owlCarousel({
        autoplay: false,
        smartSpeed: 300,
        margin: 20,
        loop: true,
        fade:true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                center: false,
            },

            500: {
                items: 2,
                dots: true,
                nav: false,
                center: false,
            },

            768: {
                items: 4,
                center: false,
            },

            991: {
                items: 4,
                center: false,
            },
            1200: {
                items: 6,
            },

            1400: {
                items: 6,
            },

        }
    });
}



// odometer 
if ($(".odometer").length) {
    $('.odometer').appear();
    $(document.body).on('appear', '.odometer', function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
}
// odometer end 

// opinion active start 
if ($(".opinion-active").length) {
    $(".opinion-active").owlCarousel({
        autoplay: false,
        smartSpeed: 300,
        margin: 20,
        loop: true,
        fade:true,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        center: true,
        navText: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },

            500: {
                items: 1,
                dots: true,
                nav: false
            },

            768: {
                items: 2,
                dots: true,
            },
            992: {
                items: 3,
            },

            1200: {
                items: 3
            },

           

        }
    });
}
// opinion active end 



// // ------------------
//      team active 
// ----------------
if ($(".team-active").length) {
    $(".team-active").owlCarousel({
        autoplay: false,
        smartSpeed: 300,
        margin: 30,
        loop: true,
        fade:true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                center: false,
            },

            500: {
                items: 2,
                dots: true,
                nav: false,
                center: false,
            },

            768: {
                items: 4,
                center: false,
            },

            991: {
                items: 4,
                center: false,
            },
            1200: {
                items: 4,
            },

            1400: {
                items: 4,
            },

        }
    });
}








})(window.jQuery);