jQuery(document).ready(function($) {

    var docwidth = $(window).width();
    /* 1. Get the width of the document and toggle menu */

    if ((docwidth <= 1110  )) {
        $('#main-menu').addClass('resp');
        $(".burger-menu").click(function(){
            $('#main-menu.resp').toggle();
        });

        $(".navbar li a").click(function(){
            $('#main-menu.resp').slideUp();
        });
    }

    if ((docwidth >= 1110  )) {
        $('#main-menu').removeClass('resp');
    }

    $( window ).resize(function() {
        var docwidth = $(window).width();
        if ((docwidth <= 1110  )) {
            $('#main-menu').addClass('resp');
            $('#main-menu.resp').css('display', 'none');
        }

        if ((docwidth >= 1110  )) {
            $('#main-menu').removeClass('resp');
            $('#main-menu').css('display', 'block');
        }
    });

    /* 2. Controls and options for the content slider */

        $('#content-slider-1').royalSlider({
            autoHeight: true,
            arrowsNav: true,
            fadeinLoadedSlide: true,
            controlNavigationSpacing: 0,
            controlNavigation: 'tabs',
            imageScaleMode: 'none',
            imageAlignCenter:false,
            loop: false,
            loopRewind: true,
            numImagesToPreload: 6,
            keyboardNavEnabled: true,
            usePreloader: false
        });

    /* 3. Controls and options for the testimonials slider */

    $('#testimonials-slider').royalSlider({
        autoHeight: true,
        arrowsNav: false,
        fadeinLoadedSlide: true,
        controlNavigationSpacing: 0,
        controlNavigation: 'tabs',
        imageScaleMode: 'none',
        imageAlignCenter:false,
        loop: false,
        loopRewind: true,
        numImagesToPreload: 6,
        keyboardNavEnabled: true,
        usePreloader: false
    });

    /* 4. Smooth Scroll */
    $('a').smoothScroll();

    $('#main-menu a').click(function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            scrollTarget: link.hash,
            speed: 1000,
            scroll: true
        });
    });


    /* 5. Slider Custom Navigation */

    var mycount = $('.rsNav').length;
    for (var start1=1; start1<=mycount; start1++) {
        $('#testimonials .rsNavItem:nth-child('+ start1 +')').attr('class', 'replace-btn');
    }
    $('.replace-btn').remove();
    for (var start=1; start<=mycount; start++) {
        $('#testimonials .rsNav').append('<div class="rsNavItem rsTab">' + start + '</div>');
    }

    $('.rsNavItem.rsTab').click(function() {
        $('.rsNavItem.rsTab').removeClass('active');
        $(this).toggleClass('active');
    });

    $(function(){
        var $gallery = $('.gallery a').simpleLightbox();
    });
});

/* 6. Portfolio Filter*/
$(function () {
    var filterList = {
        init: function () {
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
            });
        }
    };

    filterList.init();

    /* 7. Scroll Spy */

    var sections = [];
    var scrolled_id = false;
    var id = false;
    var $navbar = $('#main-menu');
    var $navbar__links = $navbar.find('.menu-item');

    $navbar__links.each(function(){
        sections.push($($(this).attr('href')));

    });

    $navbar__links.click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        });
    });

    $(window).scroll(function(e){
        e.preventDefault();
        var scrollTop = $(this).scrollTop() + ($(window).height() / 3);

        for(var i in sections){
            var section = sections[i];

            if(scrollTop > section.offset().top){
                scrolled_id = section.attr('id');
            }

            if(scrolled_id !== id){
                id = scrolled_id;

                $navbar__links.removeClass('active-link');

                $('a[href="#'+ id + '"]', $navbar).addClass('active-link');
            }
        }
    });

    $(window).trigger('scroll');

    /* 8. Blog Filter Badges */
    $('.filter-badge').click(function() {
        $('#blog-filter').toggleClass('show-filter');
    });

    $('.close').click(function() {
        $('#blog-filter').toggleClass('show-filter');
    });

    /* 9. Send Email */

    var form = $( "#contactform" );

    $( "#contactform" ).validate( {

        rules: {
            fname: "required",
            mail: {
                required: true,
                email: true
            },
            tel: "required",
            message: "required"

        },
        messages: {
            fname: "Please enter your Name",
            mail: "Please enter a valid email address",
            tel: "Please enter a mobile number",
            message: "Don't forget to leave a messsage"
        },
        errorPlacement: function ( error, element ) {
            error.addClass( "ui red pointing label transition" );
            //var showme = 'input';
            error.appendTo( element.parent('.row') );
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".row" ).addClass( errorClass );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).parents( ".row" ).removeClass( errorClass );
        }
    });


    /* 10. Form Validation */

    form.validate();
    $("#contactsubmit").click(function(e) {
        e.preventDefault();
        if(form.valid() == true){

            var firstname = $("#firstname").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var message = $("#message").val();

            $.ajax({
                url: "sayhello.php",
                method: "POST",
                data: { fname: firstname, mail: email, tel: mobile, msg: message }
            })

            .done(function() {
                $(".action").text("Message Sent!");
            });
        }
    });
});