$(document).ready(function() {
    $(".mat-drawer-content").css({"overflow": "hidden"});

    //active nav bar menu
    $(".navLink").click(function () {
        $(".navLink").removeClass("active");
        $(this).addClass("active");
    });


    //active side menu items
    $(".sideMenuList-Item").click(function () {
        $(".navigationLinks a").removeClass("active");
        $(".sideMenuList-Item").removeClass("active");
        $(this).addClass("active");
    });



    // Set the date we're counting down to
    var countDownDate = new Date("feb 1, 2018 15:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
        $('#seconds').fadeOut("fast");
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#seconds').text(seconds).slideDown();
        $("#minutes").text(minutes);
        $("#days").text(days);
        $("#hours").text(hours);
        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
});


function scrollToItem(item){
    $('.pageContent').animate({scrollTop: 0}, 0);
    $('.pageContent').animate({scrollTop: $(item).offset().top}, 1500);
}
