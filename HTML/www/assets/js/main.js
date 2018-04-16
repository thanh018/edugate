(function ($) {
    "use strict";

    // header fixed when scroll coming
    var shw_add_header_fixed = function () {
        if ($('.header-main').hasClass('homepage-01')) {
            if ($(window).width() > 767) {
                var topmenu = $(".header-topbar").height();

                $(window).scroll(function () {
                    if ($(window).scrollTop() > topmenu) {
                        $(".header-main.homepage-01").addClass('header-fixed');
                    }
                    else {
                        $(".header-main.homepage-01").removeClass('header-fixed');
                    }
                    ;
                });
            }
            else {
                var offset = 117;

                $(window).scroll(function () {
                    if ($(window).scrollTop() > offset) {
                        $(".header-main.homepage-01").addClass('header-fixed');
                    }
                    else {
                        $(".header-main.homepage-01").removeClass('header-fixed');
                    }
                });
            }
        }
        else if ($('.header-main').hasClass('homepage-02')) {
            var $topmenu = $(".choose-course-2"),
                offset = $topmenu.offset();

            $(window).scroll(function () {
                if ($(window).scrollTop() > offset.top - 1) {
                    $(".header-main.homepage-02").addClass('header-fixed');
                }
                else {
                    $(".header-main.homepage-02").removeClass('header-fixed');
                }
            });

            // button scroll
            $('.arrow-down').click(function () {
                $('html, body').animate({
                    scrollTop: $(".choose-course-2").offset().top
                }, 1000);
            });
        }
        else if ($('.header-main').hasClass('homepage-03')) {
            var $topmenu = $(".section.slider-banner-03"),
                offset = $topmenu.offset();

            $(window).scroll(function () {
                if ($(window).scrollTop() > offset.top) {
                    $(".header-main.homepage-03").addClass('header-fixed');
                }
                else {
                    $(".header-main.homepage-03").removeClass('header-fixed');
                }
            });
        }
    };

    // set height and width
    var shw_set_height_width = function () {
        // set width for section search
        $('.search-input .form-input').width($('.container').width() - ($('.form-select').width() * 3) - 115);

        // slider banner 1
        if ($(window).width() > 767) {
            $('.slider-banner').height($(window).height() - $('header').height() + 1);
            $('.slider-banner .slider-item').height($(window).height() - $('header').height() + 1);
            // slider banner 3
            $('.slider-banner-03').height($(window).height() - $('header').height() + 1);
        }

        // set height for page 03
        var height_page03 = $('.choose-course-3 .item-course').height();
        $('.choose-course-3').find('.item-course').height(height_page03);


        // set height width for table
        $(".table-body").scroll(function () {
            $(".table-header").offset({left: -1 * this.scrollLeft + 15});
        });

        $(".course-table").height($(".inner-container").height());
        $(".course-table").width($(".inner-container").width());
    };

    // owl carousel for ....
    var shw_slider_carousel = function () {
        // owl carousel slider banner
        $('.slider-banner').owlCarousel({
            margin: 0,
            loop: true,
            //lazyLoad: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });

        // owl carousel top courses
        $('.top-courses-slider').owlCarousel({
            margin: 30,
            loop: true,
            nav: false,
            responsiveClass: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1025: {
                    items: 2
                }
            }
        });
        // button click slider top courses
        $('.group-btn-top-courses-slider .btn-prev').on('click', function () {
            $('.top-courses-slider .owl-prev').click();
        });
        $('.group-btn-top-courses-slider .btn-next').on('click', function () {
            $('.top-courses-slider .owl-next').click();
        });

        // owl carousel slider logos
        $('.carousel-logos').owlCarousel({
            margin: 115,
            loop: true,
            //lazyLoad: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 30,
                },
                320: {
                    items: 3,
                    margin: 40,
                },
                480: {
                    items: 3,
                    margin: 50,
                },
                600: {
                    items: 4,
                    margin: 90,
                },
                768: {
                    items: 5,
                    margin: 60,
                },
                1024: {
                    items: 5,
                    margin: 90,
                },
                1025: {
                    items: 6
                }
            }
        });

        // owl carousel slider best staff
        $('.best-staff-content').owlCarousel({
            margin: 30,
            loop: true,
            nav: false,
            responsiveClass: true,
            //autoplay:true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    margin: 15,
                },
                400: {
                    items: 2,
                    margin: 15,
                },
                768: {
                    items: 3
                },
                1024: {
                    items: 3
                },
                1025: {
                    items: 4
                }
            }
        });
        // button click slider best staff
        $('.best-staff .group-btn-slider .btn-prev').on('click', function () {
            $('.best-staff .owl-prev').click();
        });
        $('.best-staff .group-btn-slider .btn-next').on('click', function () {
            $('.best-staff .owl-next').click();
        });

        // responsive for section pricing when screen < 768
        if ($(window).width() <= 768) {
            $('.pricing-wrapper').owlCarousel({
                margin: 15,
                loop: true,
                nav: false,
                responsiveClass: true,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                    },
                    636: {
                        items: 2
                    },
                    768: {
                        items: 2
                    }
                }
            });
        }
        ;
        // button click slider
        $('.pricing .group-btn-slider .btn-prev').on('click', function () {
            $('.pricing-wrapper .owl-prev').click();
        });
        $('.pricing .group-btn-slider .btn-next').on('click', function () {
            $('.pricing-wrapper .owl-next').click();
        });

        // Responsive for Progress bar when screen < 767
        if ($(window).width() <= 767) {
            $('.progress-bar-wrapper .content').owlCarousel({
                margin: 0,
                loop: true,
                nav: false,
                responsiveClass: true,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items: 2,
                        margin: 15,
                    },
                    480: {
                        items: 2,
                        margin: 15,
                    },
                    600: {
                        items: 3
                    },
                    767: {
                        items: 3
                    }
                }
            });
        }
        ;
        // button click slider
        $('.progress-bars .group-btn-slider .btn-prev').on('click', function () {
            $('.progress-bars .owl-prev').click();
        });
        $('.progress-bars .group-btn-slider .btn-next').on('click', function () {
            $('.progress-bars .owl-next').click();
        });
    };

    // animate number
    var shw_count_to = function () {
        $('.progress-bar-number').appear(function () {
            setTimeout(function () {
                $('.progress-bar-number .num').countTo();
            }, 1000);
        });

        $('.pricing').appear(function () {
            setTimeout(function () {
                $('.pricing .inner-number').countTo();
            }, 1000);
        });
    };

    // gallery isotope
    var shw_gallery_isotope = function () {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-item'
            }
        });

        $(".fancybox-button").fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            helpers: {
                title: {type: 'inside'},
                buttons: {}
            }
        });
    };

    // BACK TOP
    var shw_back_to_top = function () {
        $('#back-top a').on('click', function () {
            $('body,html').animate({
                scrollTop: 0
            }, 700);
            return false;
        });

        var temp = $(window).height();
        $(window).scroll(function () {
            if ($(window).scrollTop() > temp) {
                $('#back-top a').addClass('show');
                $('#back-top a').removeClass('hide');
            }
            else {
                $('#back-top a').addClass('hide');
                $('#back-top a').removeClass('show');
            }
        });
    };

    // WOW JS
    var shw_wow_js = function () {
        new WOW().init();
    };

    // efect button list - grid for page courses
    var shw_list_grid = function () {
        $('.btn-list-grid .btn-grid').click(function () {
            //alert('true');
            if ($('.style-show').hasClass('style-list')) {
                $('.style-show').removeClass('style-list');
                $('.style-show').addClass('style-grid');
                $('.btn-list-grid .btn-grid').parent().addClass('active');
                $('.btn-list-grid .btn-list').parent().removeClass('active');
            }

        });

        $('.btn-list-grid .btn-list').click(function () {
            //alert('false');
            if ($('.style-show').hasClass('style-grid')) {
                $('.style-show').removeClass('style-grid');
                $('.style-show').addClass('style-list');
                $('.btn-list-grid .btn-grid').parent().removeClass('active');
                $('.btn-list-grid .btn-list').parent().addClass('active');
            }
        });
    };

    // efect for section pricing
    var shw_pricing = function () {
        if ($(window).width() > 600) {
            $('.pricing-widget').hover(function () {
                $('.pricing').find('.pricing-widget.main').removeClass('active');
            }, function () {
                $('.pricing-widget.main').addClass('active');
            });
        }
        else {
            $('.pricing').find('.pricing-widget.main').removeClass('active');
        }
    };

    // RESPONSIVE for page
    var shw_responsive_js = function () {

        // event scroll down and up - show hide menu
        if ($(window).width() <= 1024) {
            var lastScroll = 50;
            $(window).scroll(function (event) {
                //Sets the current scroll position
                var st = $(this).scrollTop();
                //Determines up-or-down scrolling
                if (st > lastScroll) {
                    //Replace this with your function call for downward-scrolling
                    $('.header-main').addClass('hide-menu');
                }
                else {
                    //Replace this with your function call for upward-scrolling
                    $('.header-main').removeClass('hide-menu');
                }

                if ($(window).scrollTop() == 0) {
                    $('.header-main').removeClass('.header-fixed').removeClass('hide-menu');
                }
                ;
                //Updates scroll position
                lastScroll = st;
            });
        }

        // show hide dropdown menu
        if ($(window).width() <= 767) {

            $('body').click(function (event) {
                if (
                    $('.edugate-navbar').has(event.target).length == 0 && !$('.edugate-navbar').is(event.target)
                    && $('.navigation').has(event.target).length == 0 && !$('.navigation').is(event.target)
                ) {
                    if ($('.navbar-collapse').hasClass('in')) {
                        $('.edugate-navbar').click();
                    }
                }
            });
        }

        $(window).scroll(function (event) {
            // hide dropdown menu when scroll
            if ($('.navbar-collapse').hasClass('in')) {
                $('.edugate-navbar').click();
            }

            // overflow scroll when screen small
            if ($(window).scrollTop() < 52) {
                var screen_height = $(window).height() - $('.header-main').height() - $('.header-topbar').height(),
                    navigation = $('.navigation').height();
                $('.navigation').css('max-height', screen_height - 20);
                if (navigation > screen_height) {
                    $('.navigation').addClass('scroll-nav');
                }
            }
            else {
                var screen_height = $(window).height() - $('.header-main').height(),
                    navigation = $('.navigation').height();
                $('.navigation').css('max-height', screen_height - 30);
                if (navigation > screen_height) {
                    $('.navigation').addClass('scroll-nav');
                }
            }

            // close dropdown sub menu
            var st2 = $(this).scrollTop();
            if (st2 > 0) {
                //Replace this with your function call for downward-scrolling
                $('.navigation').find('.dropdown').removeClass('open');
            }
            ;

        });


    };

    // Loading page
    var shw_loading_page = function () {
        $('.body-2').width($(window).width());
        $('.body-2').height($(window).height());
    };

    // show hide comment when click button realy
    var shw_reply_comment = function () {
        $('div[class*="merge"]').css("display", "none");
        $('.reply-1').click(function (event) {
            $('.merge-1').toggle(300);
        });
        $('.reply-2').click(function (event) {
            $('.merge-2').toggle(300);
        });
        $('.reply-2-1').click(function (event) {
            $('.merge-2').toggle(300);
        });
        $('.reply-3').click(function (event) {
            $('.merge-3').toggle(300);
        });
    };

    // Responsive for table
    var shw_responsive_table = function () {
        $(".table-body").scroll(function () {
            $(".table-header").offset({left: -1 * this.scrollLeft + 15});
        });

        $(".course-table").height($(".inner-container").height());
        $(".course-table").width($(".inner-container").width());
    };

    // show hide search
    var shw_search_box = function () {
        // show hide search when click button search
        $('.button-search').on('click', function () {
            $('.nav-search').toggleClass('hide');
        });

        // show hide search when click body
        if ($(window).width() > 767) {
            $('body').on('click', function (event) {

                if ($('.button-search').has(event.target).length == 0 && !$('.button-search').is(event.target)
                    && $('.nav-search').has(event.target).length == 0 && !$('.nav-search').is(event.target)) {
                    if ($('.nav-search').hasClass('hide') == false) {
                        $('.nav-search').toggleClass('hide');
                    }
                    ;
                }
            });
        }
    };

    // vote rating
    var shw_vote = function () {
        $('.stars span a').on('click', function (e) {
            e.preventDefault();
            $('.stars span').find('a').removeClass('active');
            $(this).addClass('active');
        });
    };

    var shw_dropdown_menu = function () {

        // show hide dropdown menu
        if ($(window).width() <= 767) {

            $('.nav-links>.dropdown>a').on('click', function () {
                if ($(this).parent().find('.edugate-dropdown-menu-1').hasClass('dropdown-focus') == true) {
                    $(this).parent().find('.edugate-dropdown-menu-1').removeClass('dropdown-focus');
                }
                else {
                    $('.nav-links .dropdown .edugate-dropdown-menu-1').removeClass('dropdown-focus');
                    $(this).parent().find('.edugate-dropdown-menu-1').addClass('dropdown-focus');
                }
            });
            $('.edugate-dropdown-menu-1 .dropdown>a').on('click', function () {
                $(this).parent().find('.edugate-dropdown-menu-2:first').toggleClass('dropdown-focus');
            });


            $('body').click(function (event) {
                if ($('.nav-links').has(event.target).length == 0 && !$('.nav-links').is(event.target)) {
                    if ($('.dropdown-menu').hasClass('dropdown-focus')) {
                        $('.dropdown-menu').removeClass('dropdown-focus');
                    }
                }
            });
        }
    }

    $(document).ready(function () {
        shw_add_header_fixed();
        shw_set_height_width();
        shw_count_to();
        shw_wow_js();
        shw_list_grid();
        shw_pricing();
        shw_responsive_js();
        shw_back_to_top();
        shw_reply_comment();
        shw_search_box();
        shw_vote();
        shw_dropdown_menu();

    });


    $(window).load(function () {
        shw_gallery_isotope();
        shw_responsive_js();
        shw_slider_carousel();
        shw_add_header_fixed();
        shw_loading_page();
        shw_responsive_table();
        $("html,body").animate({scrollTop: 0}, 100);

        setTimeout(function () {
            $('.body-2').removeClass('loading');
            $('.body-2').addClass('loaded');

        }, 1500);
    });

    $(window).resize(function () {
        location.reload();
        shw_set_height_width();
        shw_responsive_js();
    });

})(jQuery);
