$('.menu-toggle').click(function(){
    $(".navigation-list").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
 });

 function goBack() {
    window.history.back();
}
