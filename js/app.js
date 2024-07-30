$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 3,
        dots: false,
        smartspeed: 1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1140:{
                items:1
            }
        }
    })


//PROJECT SLIDER
$('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: true,
    smartSpeed: 1000,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    navText: ['PREV','NEXT'],
    margin: 24,
    responsive:{
        0:{
             items:1,
             center:true,
        },
        768:{
            items:1,
            center: true,
        },
        1140:{
            items: 2,
            center: true,
        }

    }
})

/*
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    items:1,
})

*/

//Testimonials carousel (uses the Owl Carousel library)
$(".testimonials-carousel").owlCarousel({
    autoplay:true,
    loop:true,
    margin:0,
    nav:false,
    items: 3,
    dots: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    smartspeed: 1000,
    responsive:{
        0:{
            items:1
        },
        768: {
            items:2
        },
        1140:{
            items: 3
        }
    }
});

})(jQuery);