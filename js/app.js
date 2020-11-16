/* Template Name: Invoza - Bootstrap 4 Landing Page Tamplate
   Author: Themesdesign
   File Description: Main JS file of the template
*/


! function($) {
    "use strict";

    var Invoza = function() {};

    Invoza.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
        
            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },

    Invoza.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    Invoza.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },

    Invoza.prototype.initTesticarousel = function() {
        $('#testi-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                576:{
                    items:2
                },
     
            }
        });
    },

    Invoza.prototype.initCounter = function() {
        // Counter Number
        var a = 0;
        $(window).scroll(function() {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                            countNum: countTo
                        },

                        {

                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }
        });

    },


    feather.replace()

    Invoza.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initTesticarousel();
        this.initCounter();
    },
    //init
    $.Invoza = new Invoza, $.Invoza.Constructor = Invoza
}(window.jQuery),


//initializing
function($) {
    "use strict";
    $.Invoza.init();

    $(document).ready(function() {

        $('#submit').click(function (event) {
            event.preventDefault();
            var valid = $('#contact-us').valid();
            console.log(valid);
            if(valid) {
                var name = $('#name').val();
                var email = $('#email').val();
                var message = $('#message').val();

                var content = {
                  name: name,
                  email: email,
                  message: message
                };

                $.ajax({
                    type: 'POST',
                    url: "http://sfacs.000webhostapp.com/wp-json/shapely/v1/latest-email",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(content),
                    dataType: 'json',
                    crossDomain: true
                }).then(function(data) {
                    //$('.greeting-id').append(data.id);
                    //$('.greeting-content').append(data.content);
                    console.log(data);
                }).catch(function(error) {
                    console.log(error);
                });
            }

        });


    });
}(window.jQuery);
