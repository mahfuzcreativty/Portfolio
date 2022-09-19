// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()
    
    
(function ($){
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });

    lightcase 
    $('a[data-rel^=lightcase]').lightcase();

    $(document).ready(function() {

        // wow animation
        new WOW().init();
        if ($(window).width() <= 991){ 
            $(".wow").removeClass("wow");
        }
        // Scrolling
        $(function () {
            $(document).ready(function () {
                $("[data-serialscrolling]").serialscrolling();
            });
        });

        //menu options
        var fixed_top = $(".Menu-area");
        $(window).on('scroll', function(){
            if( $(this).scrollTop() > 100 ){  
                fixed_top.addClass("animated fadeInDown header-fixed");
            }
            else{
                fixed_top.removeClass("animated fadeInDown header-fixed");
            }
        });

        $(".menubar ul li span").on('click', function(){
            $('section').toggleClass("active");
        });

        // Switch to Dark
        $(".change-theme").on('click', function(){
            $('body').toggleClass("dark");
            $('.change-theme span').toggleClass("active");
        });
        $('.sun').on('click', function () {
            $('.logo img').attr('src','./assets/images/logo/logo.png');
        })
        $('.moon').on('click', function () {
            $('.logo img').attr('src','./assets/images/logo/logo-dark.png');
        })

        // ====== Hire Me Form Open
        $(".hireMe").on('click', function(){
            $('.contact-part').css({'transform': 'scaleY(1)'});
        });
        
        $(".form-close").on('click', function(){
            $('.contact-part').css({'transform': 'scaleY(0)'});
        });

        // About Section
        $('#showDetails').on('click', function () {
            $('.about-img-one').addClass("hide")
            $('.about-icon').addClass("hide")
            $('.about-img-two').addClass("show")
            $('.about-content').addClass("show")
        })

        // Blog Section
        $('.showBlog').on('click', function () {
            $('.blog-details').addClass("show")
        })
        $('.blog-close').on('click', function () {
            $('.blog-details').removeClass("show")
        })
        $('.showBlog-2').on('click', function () {
            $('.blog-top img').attr('src','./assets/images/blog/02.jpg');
        })
        $('.showBlog-3').on('click', function () {
            $('.blog-top img').attr('src','./assets/images/blog/03.jpg');
        })
        $('.showBlog-4').on('click', function () {
            $('.blog-top img').attr('src','./assets/images/blog/04.jpg');
        })
        $('.showBlog-5').on('click', function () {
            $('.blog-top img').attr('src','./assets/images/blog/05.jpg');
        })
        
        //counterup
        $(window).on('scroll', function () {
            $('.counter').data('countToOptions', {
                formatter: function (value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                }
            });
            // start all the timers
            $('.counter').each(count);  
            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
            }
        });
        
        // ajax contact form
        $(function() {
            var form = $('#contact-form');
            var formMessages = $('.form-message');
            $(form).submit(function(e) {
                e.preventDefault();
                var formData = $(form).serialize();
                $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function(response) {
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    $(formMessages).text(response);
                    $('#contact-form input, #contact-form textarea').val('');
                })
                .fail(function(data) {
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
            });
        });

        //Progress Bar
        $('#bar1').barfiller({duration: 1000 });
        $('#bar2').barfiller({duration: 1500 });
        $('#bar3').barfiller({duration: 1800 });
        $('#bar4').barfiller({duration: 2100 });
        $('#bar5').barfiller({duration: 2400 });
        $('#bar6').barfiller({duration: 2700 });
        $('#bar7').barfiller({duration: 3000 });


        // Typing Option here
        var typed = new Typed('.typing-one', {
            strings: [
                "Mahfuzur Rahman.",
            ],
            typeSpeed: 70,
            backSpeed: 80,
            loop: true,
          });
        var typed = new Typed('.typing-two', {
            strings: [
                "Web Designer.",
            ],
            typeSpeed: 70,
            backSpeed: 80,
            loop: true,
          });
        var typed = new Typed('.typing-three', {
            strings: [
                "Freelancer.",
            ],
            typeSpeed: 70,
            backSpeed: 80,
            loop: true,
          });

        // scroll up start here
        $(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 200) {
                    $('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
                } else {
                    $('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'})
                }
            });
            //Click event to scroll to top
            $('.scrollToTop').on('click', function(){
                $('html, body').animate({scrollTop : 0},500);
                return false;
            });
        });

        // ==========banner slider part
        var swiper = new Swiper(".banner-slider", {
            loop:true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1600,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });

        // Testimonial slider
        var swiper = new Swiper(".myteam-slider", {
            loop:true,
            slidesPerView: 3,
            speed: 1000,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        // Gellery part js
        // init Isotope
        var $grid = $('.gellary-box').isotope({
            itemSelector: '.gellary-item',
            layoutMode: 'fitRows',
            getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function( itemElem ) {
                var weight = $( itemElem ).find('.weight').text();
                return parseFloat( weight.replace( /[\(\)]/g, '') );
            }
            }
        });
        
        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
            },
            // show if name ends with -ium
            ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
            }
        };
        
        // bind filter button click
        $('.button-group').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[ filterValue ] || filterValue;
            $grid.isotope({ filter: filterValue });
        });
        
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
            });
        });

    });
}(jQuery));


       











