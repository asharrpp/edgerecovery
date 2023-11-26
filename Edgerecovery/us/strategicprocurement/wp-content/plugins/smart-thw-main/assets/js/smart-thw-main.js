/*
 * Plugin Name: Smart THW Main
 * Plugin URI: http://www.themewing.com/
 * Author: Themewing
 * Author URI: http://www.themewing.com
 * License - GNU/GPL V2 or Later
 * Description: Smart THW Main is a required plugin for this theme.
 * Version: 1.0
 */

/* ----------------------------------------------------------- */
/*  Video popup
/* ----------------------------------------------------------- */


jQuery(document).ready(function($) {
    'use strict';


    /* --------------------------------------
     *   Video Popup
     *  -------------------------------------- */
    jQuery(".popup").colorbox({
        iframe: true,
        innerWidth: 650,
        innerHeight: 409
    });

    /* --------------------------------------
     *   Product Slider
     *  -------------------------------------- */
    var delay = 1;
    setTimeout(function() {
        $(".product-slide").owlCarousel({

            loop: true,
            margin: 20,
            navigation: true,
            pagination: false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1]

        });
    }, delay);

    /* --------------------------------------
     *   Simple SLider
     *  -------------------------------------- */
    var delay = 1;
    setTimeout(function() {
        $(".box-slide").owlCarousel({

            loop: true,
            autoPlay: false,
            navigation: true,
            pagination: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            slideSpeed: 800,
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1]

        });
    }, delay);

    /* --------------------------------------
     *   Testimonial
     *  -------------------------------------- */
    var delay = 1;
    setTimeout(function() {
        $(".testimonial-slide").owlCarousel({

            loop: true,
            margin: 20,
            navigation: false,
            pagination: true,
            items: 2,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1]

        });
    }, delay);

    //Partners slide
    var delay = 1;
    setTimeout(function() {
        $(".partner-slide").owlCarousel({

            loop: true,
            margin: 20,
            autoPlay: true,
            navigation: false,
            pagination: true,
            items: 5,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1]

        });
    }, delay);

    //Team slide
    var delay = 1;
    setTimeout(function() {
        $(".team-slide").owlCarousel({

            loop: true,
            margin: 20,
            navigation: true,
            pagination: false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1]

        });
    }, delay);

    /* ----------------------------------------------------------- */
    /*  Counter
    /* ----------------------------------------------------------- */

    jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /* --------------------------------------
     *   Shortcode hover 
     *  -------------------------------------- */

    //thw features effect
    var clr = '';
    var clr_bg = '';
    var clr_border = '';
    jQuery(".thw-hover-effect i").on({
        mouseenter: function() {
            clr = jQuery(this).css('color');
            clr_bg = jQuery(this).css('backgroundColor');
            clr_border = jQuery(this).css('border-color');
            jQuery(this).css("color", jQuery(this).data("hover-color"));
            jQuery(this).css("background-color", jQuery(this).data("hover-bg-color"));
            jQuery(this).css("border-color", jQuery(this).data("hover-border-color"));
        },
        mouseleave: function() {
            jQuery(this).css("color", clr);
            jQuery(this).css("background-color", clr_bg);
            jQuery(this).css("border-color", clr_border);
        }
    });

});