function main() {

    (function() {
        $(window).load(function() {
            // will first fade out the loading animation
            $("#status").fadeOut("slow");

            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(500).fadeOut("slow", function() {
                $('.brand-heading').fadeIn("slow");
            });

        })

        // Page scroll when clicking same-page hrefs
        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        $(document).ready(function() {


        });

        // Portfolio Isotope Filter
        $(window).load(function() {
            var $container = $('.portfolio-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function() {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });

    }());

}
main();
