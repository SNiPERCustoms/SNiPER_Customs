$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    $('.navbar-toggler-icon').click(function(){
        $('.navbar-nav').toggleClass("active");
        $('.avbar-toggler').toggleClass("active")
    })

    var typed = new Typed(".typing", {
        strings: ["Investor", "Content Writer", "Web Designer", "Trader"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // toggle menu/navbar script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")

    });

    

});

