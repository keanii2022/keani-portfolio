        // Code will only run once the DOM is read for JS code to execute
        $(document).ready(function(){
            $(window).scroll(function(){
                // Nav Sticky Effect
                if(this.scrollY > 20){
                    $('.nav').addClass("sticky");
                }else{
                    $('.nav').removeClass("sticky")
                }
                // Scroll Show/Hide Effect
                if(this.scrollY > 500){
                    $('.scroll-btn').addClass("show");
                }else{
                    $('.scroll-btn').removeClass("show");
                }
            });
                // slide up
            $('.scroll-btn').click(function(){
                $('html').animate({scrollTop: 0});
                // removes smoothness on slide-up btn 
                $('html').css("scrollBehavior", "auto")
            });
        
            $('.nav .nav-menu li a').click(function(){
                // smooth scroll back on menu clicks
                $('html').css("scrollBehavior", "smooth")
            });
        
                // menu/nav toggle
            $('.menu-btn').click(function(){
                $('.nav .menu').toggleClass("active")
                $('.menu-btn i').toggleClass("active")
            });
        });
        
            // typing effects
            var typed = new Typed(".typing", {
                strings:["Father", "Software Engineer", "Small Business Owner", "Writer", "Team Player"],
                typeSpeed: 100,
                backSpeed:60,
                loop:true
            });
            
            var typed = new Typed(".typing-2", {
                strings: ["Dad", "Diligent Developer", "Sole Proprietor", "Wordsmith", "Constructive Colleague", ],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });