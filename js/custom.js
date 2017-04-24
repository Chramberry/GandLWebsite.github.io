
/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Mobile Navigation
 -----------------------------------------------*/
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/* HTML document is loaded. DOM is ready. 
 -------------------------------------------*/
$(document).ready(function () {

    /* Hide mobile menu after clicking on a link
     -----------------------------------------------*/
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });


    /* Parallax section
     -----------------------------------------------*/
    function initParallax() {
        $('#intro').parallax("100%", 0.1);
        $('#overview').parallax("100%", 0.3);
        $('#bridalparty').parallax("100%", 0.1);
        $('#Accommodations').parallax("100%", 0.1);
        $('#thingstd').parallax("100%", 0.3);
        $('#registry').parallax("100%", 0.3);
        $('#rsvp').parallax("100%", 0.2);

    }
    initParallax();


    /* Owl Carousel
     -----------------------------------------------*/
    $(document).ready(function () {
        $("#owl").owlCarousel({
            autoPlay: 10000,
            items: 4,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: [985, 2],
            itemsMobile: [479, 1]
        });
    });

    /* Add guest
     -----------------------------------------------*/
    var counter = 1;
    $(document).ready(function () {
        
        $("#addRow").click(function () {
            
            var newRow = jQuery(
                    '</td><tr><td><input autocomplete="off"  name="Guest' +
                    counter + '"\n\
                    id="guest' +
                    counter + '"\n\
                    type="text" placeholder="Guest" class="form-control"/></td></tr><tr><td><div class="radiobar">' +
                    '<input type="radio" id="rsvp_1'+
                    counter + '"\n\
                    " name="Food'+
                    counter + '"\n\
                    value="Salmon" /><label for="rsvp_1'+
                    counter + '"\n\
                    ">Salmon</label>'+         
                    '<input type="radio" id="rsvp_2'+
                    counter + '"\n\
                    " name="Food'+
                    counter + '"\n\
                    value="Chicken" /><label for="rsvp_2'+
                    counter + '"\n\
                    ">Chicken</label>'+
                    '<input type="radio" id="rsvp_3'+
                    counter + '"\n\
                    " name="Food'+
                    counter + '"\n\
                    value="Quiche" /><label for="rsvp_3'+
                    counter + '"\n\
                    ">Quiche</label></div></td></tr>');
                     
            counter++;
           
            $("#guestTable").append(newRow);
        });
    });
    /* Back top
     -----------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /* wow
     -------------------------------*/
    new WOW({mobile: false}).init();



    /* List of Guests
     ------------------------*/
    var availableGuests = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#guests").autocomplete({
        source: availableGuests
    });

});

