$(document).ready(function () {
    $('html, body').animate({scrollTop:$(document).height()}, 10000);
    setTimeout(function() { $('html, body').animate({scrollTop:0}, 4000);},4000);

    var scrolltopbottom =  setInterval(function(){
    // Takes 7 seconds to scroll to bottom
    $("html, body").animate({ scrollTop: $(document).height() }, 7000);
    setTimeout(function() {
       $('html, body').animate({scrollTop:0}, 10000);
    },7000);

    },8000);

});