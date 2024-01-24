$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
       $(".sticky-header").addClass("on");
    } else {
       $(".sticky-header").removeClass("on");
    }
 });