jQuery(document).ready(function($){

    // toggle btn js
    $(".back").click(function(){
        $(this).toggleClass("active");
    });
    $(".dashboard-icon3").click(function(){
        $(".dropdown-wrap").toggleClass("active");
    });

    $("#ip1").click(function(){
        $(".ip1").toggleClass("active");
    });
    $("#ip2").click(function(){
        $(".ip2").toggleClass("active");
    });
    $("#ip3").click(function(){
        $(".ip3").toggleClass("active");
    });
    $("#ip4").click(function(){
        $(".ip4").toggleClass("active");
    });
    $("#ip5").click(function(){
        $(".ip5").toggleClass("active");
    });


    $(".menu-btn").click(function(){
        $(".sidebar").addClass("active");
    });
    $(".close-btn").click(function(){
        $(".sidebar").removeClass("active");
    });


    if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
        $('input, select').on('change focus', function (e) {
            setTimeout(function () {
                $.each(
                    document.querySelectorAll('*:-webkit-autofill'),
                    function () {
                        var clone = $(this).clone(true, true);
                        $(this).after(clone).remove();
                        updateActions();
                    })
            }, 300)
        }).change();
    }
    // var updateActions = function(){
    //     $(":-webkit-autofill,:-webkit-autofill:hover,:-webkit-autofill:focus,:-webkit-autofill:active ").css("background:","transparent");
    // };// method for update input actions
    // updateActions(); // start on load and on rebuild
    

});