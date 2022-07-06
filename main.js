        // Code will only run once the DOM is read for JS code to execute
$(document).ready(function(){
    $(window).scroll(function(){
        // Nav Sticky Effect
        if(this.scrollY > 20){
            $('.nav').addClass("sticky");
        }else{
            $('.nav').removeClass()
        }
    })
});
        // Menu/Nav Show Effect
$('.menu-btn').click(function () {
    $('.nav . menu').toggleClass("active");
    $('.menu-btn i'). toggleClass("active");
})